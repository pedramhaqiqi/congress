from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from sumarizer.settings import WOMBOHEADER
from .models import *
import requests
import json
# Create your views here.

class RetrieveArticle(APIView):
    
    def get(self, request):
        
        return Response({}, status = 200)
    
    
    def get_wombo(self, spec):
        post_payload = json.dumps({
            "use_target_image": False
        })
        
        post_response = requests.request(
            "POST", "https://api.luan.tools/api/tasks/",
            headers = WOMBOHEADER, data = post_payload
        )
        
        task_id = post_response['id']
        
        
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