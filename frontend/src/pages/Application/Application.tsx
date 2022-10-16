import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Button,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  Container,
  ChakraProvider,
} from "@chakra-ui/react";
import NavBar from "../../components/NavBar/NavBar";
import SmallArticle from "../../components/General/ArticleSmall/ArticleSmall";

const RequestBodySingle = {
  message: "success",
  data: {
    title:
      "Study on the government’s response to the COVID-19 pandemic and its economic consequences",
    date: "June 22, 2020",
    session: "43-1",
    url: "https://sencanada.ca/en/Content/Sen/Committee/431/NFFN/16EV-54998-E",
    summary: [
      "What peopinesses back mmentr being here today. My question is quick an on that?",
      "Thank you, minister, for being heree engine of the economy with so many people out of work?",
      "In May, the ning to reorient our , as we  back to. But, quite frankly, ike sure we continue to support people.",
      "I’ll  are in fact continue their studies in the fall. We did make adjustments through IRCC hat we can do to help.",
    ],
  },
};

const RequestBody = {
  message: "success",
  data: [
    {
      title:
        "Study on the government’s response to the COVID-19 pandemic and its economic consequences",
      date: "June 22, 2020",
      session: "43-1",
      summary: [
        "What peopinesses back mmentr being here today. My question is quick an on that?",
        "Thank you, minister, for being heree engine of the economy with so many people out of work?",
        "In May, the ning to reorient our , as we  back to. But, quite frankly, ike sure we continue to support people.",
        "I’ll  are in fact continue their studies in the fall. We did make adjustments through IRCC hat we can do to help.",
      ],
    },
    {
      title:
        "Study on the government’s response to the COVID-19 pandemic and its economic consequences",
      date: "June 22, 2020",
      session: "43-1",
      summary: [
        "What peopinesses back mmentr being here today. My question is quick an on that?",
        "Thank you, minister, for being heree engine of the economy with so many people out of work?",
        "In May, the ning to reorient our , as we  back to. But, quite frankly, ike sure we continue to support people.",
        "I’ll  are in fact continue their studies in the fall. We did make adjustments through IRCC hat we can do to help.",
      ],
    },
    {
      title:
        "Study on the government’s response to the COVID-19 pandemic and its economic consequences",
      date: "June 22, 2020",
      session: "43-1",
      summary: [
        "What peopinesses back mmentr being here today. My question is quick an on that?",
        "Thank you, minister, for being heree engine of the economy with so many people out of work?",
        "In May, the ning to reorient our , as we  back to. But, quite frankly, ike sure we continue to support people.",
        "I’ll  are in fact continue their studies in the fall. We did make adjustments through IRCC hat we can do to help.",
      ],
    },
    {
      title:
        "Study on the government’s response to the COVID-19 pandemic and its economic consequences",
      date: "June 22, 2020",
      session: "43-1",
      summary: [
        "What peopinesses back mmentr being here today. My question is quick an on that?",
        "Thank you, minister, for being heree engine of the economy with so many people out of work?",
        "In May, the ning to reorient our , as we  back to. But, quite frankly, ike sure we continue to support people.",
        "I’ll  are in fact continue their studies in the fall. We did make adjustments through IRCC hat we can do to help.",
      ],
    },
  ],
};

interface IBlogTags {
  tags: Array<string>;
  color1?: string;
  color2?: string;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const BlogTagsDefined: React.FC = () => {
  return (
    <HStack spacing={2} marginTop={2}>
      <Tag size={"md"} variant="solid" bg="purple.400">
        Coconuts
      </Tag>
      <Tag size={"md"} variant="solid" bg="teal.400">
        Finance
      </Tag>
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Button>Learn More</Button>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const Application = () => {
  return (
    <ChakraProvider>
      <NavBar></NavBar>
      <Container maxW={"7xl"} p="12">
        <Heading as="h1">Most Recent Hearing:</Heading>
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            <BlogTagsDefined />
            <Heading marginTop="1">
              <Link
                fontSize="32"
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
              >
                {RequestBodySingle.data.title}
              </Link>
            </Heading>
            <Text as="p" marginTop="2" fontSize="lg">
              {RequestBodySingle.data.summary[0]}
            </Text>
            <BlogAuthor
              name="John Doe"
              date={new Date("2021-04-06T19:01:27Z")}
            />
          </Box>
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: "100%", sm: "85%" }}
              zIndex="2"
              marginLeft={{ base: "0", sm: "5%" }}
              marginTop="5%"
            >
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  borderRadius="lg"
                  src={
                    "https://cdn.discordapp.com/attachments/1030527530639302743/1031034684131516506/blank_tradingcard.jpg"
                  }
                  alt="some good alt text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.02)",
                  }}
                />
              </Link>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box backgroundSize="20px 20px" opacity="0.4" height="100%" />
            </Box>
          </Box>
        </Box>
        <Box height="16"></Box>
        <Heading as="h2" marginTop="5">
          Latest Hearings:
        </Heading>
        <Divider marginTop="5" />
        <Wrap spacing="30px" marginTop="5">
          <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  <Image
                    transform="scale(1.0)"
                    src={
                      "https://cdn.discordapp.com/attachments/1030527530639302743/1031034684131516506/blank_tradingcard.jpg"
                    }
                    alt="some text"
                    objectFit="contain"
                    width="100%"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                  />
                </Link>
              </Box>
              <BlogTags tags={["Engineering", "Product"]} marginTop="3" />
              <Heading fontSize="xl" marginTop="2">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  Some blog title
                </Link>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
              <BlogAuthor
                name="John Doe"
                date={new Date("2021-04-06T19:01:27Z")}
              />
            </Box>
          </WrapItem>
          <SmallArticle
            title={RequestBody.data[0].title}
            date={RequestBody.data[0].date}
            summary={RequestBody.data[0].summary}
            tag1={"Climate"}
            tag2={"Finance"}
            image={"WOMBO Tings"}
          ></SmallArticle>
        </Wrap>
      </Container>
    </ChakraProvider>
  );
};

export default Application;
