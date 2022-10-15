from bdb import GENERATOR_AND_COROUTINE_FLAGS
from inspect import GEN_RUNNING
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from sumarizer.settings import WOMBOHEADER
from .models import *
import requests
import json
import time
from coHere import *
from .serializers import *
# Create your views here.

class RetrieveArticle(APIView):
    
    def post(self, request):
        data = request.body
        for i in data.key():
            article = ArticleModel(data[i]['title'],
                                  data[i]['session'],
                                  data[i]['date'],
                                  data[i]['1'],
                                  data[i]['2'],
                                  data[i]['3'],
                                  data[i]['4'],
                                  data[i]['url'])
            article.save()
    
    
    def get(self, request):
        response_list = []
        data = request.query_param
        list_of_ids = data['id']
        for i in list_of_ids:
            summary_list = []
            article = ArticleModel.objects.get(pk = i)
            first = article.first
            second = article.second
            third = article.third
            fourth = article.fourth
            articledata = ArticleSerializer(article).data
            summary_list.append(GenerateSummary(first))
            summary_list.append(GenerateSummary(second))
            summary_list.append(GenerateSummary(third))
            summary_list.append(GenerateSummary(fourth))
            articledata['summary'] = summary_list
            response_list.append(articledata)
        # prompt = "Parliament members discuss unemployment"
        # style_id = 23
        # imgspec = self.image_spec(0.1, 960, 1560) 
        # inputspec = self.input_spec(style_id, prompt, imgspec)  
        # self.get_wombo(inputspec)      
        return Response(response_list, status = 200)
    
    
    def get_wombo(self, spec):
        post_payload = json.dumps({
            "use_target_image": False
        })
        
        post_response = requests.request(
            "POST", "https://api.luan.tools/api/tasks/",
            headers = WOMBOHEADER, data = post_payload
        )
        print(post_response.json())
        task_id = post_response.json()['id']
        task_id_url = f"https://api.luan.tools/api/tasks/{task_id}"
        put_payload = json.dumps(
            spec
        )
        
        requests.request("PUT", task_id_url, headers = WOMBOHEADER, data = put_payload)
        while True:            
            response_json = requests.request(                    
                "GET", task_id_url, headers=WOMBOHEADER).json()     
            
            state = response_json["state"]    
        
            if state == "completed":                    
                r = requests.request("GET", response_json["result"])                    
                with open("image.jpg", "wb") as image_file:                            
                    image_file.write(r.content)                        
                print("image saved successfully :)")                    
                break 
            
            elif state =="failed":                    
                print("generation failed :(")                    
                break            
            time.sleep(3)
        
        
        
    def input_spec(self, style_id, prompt, spec = None):
        data = {
            'style': style_id,
            'prompt': prompt
        }
        
        if spec:
            for x in spec.keys():
                data[x] = spec[x]    
        
        return {
            'input_spec': data
        }
            
        
        
    def image_spec(self, weight, width, height):
        return {
            'target_image_weight': weight,
            'width': width,
            'height': height
        }