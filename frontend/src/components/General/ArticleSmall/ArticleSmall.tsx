import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Button,
  Text,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  ChakraProvider,
} from "@chakra-ui/react";
import Expand from "../../Expand/Expand";

interface IBlogTags {
  tags: Array<string>;
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

interface BlogAuthorProps {
  date?: string;
  name: string;
}

interface SmallArticleProps {
  title?: string;
  date?: string;
  summary: Array<string>;
  tag1?: string;
  tag2?: string;
  image?: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (
  props: BlogAuthorProps
) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Expand></Expand>
      <Text>—</Text>
      <Text>{props.date}</Text>
    </HStack>
  );
};

const SmallArticle = (props: SmallArticleProps) => {
  return (
    <ChakraProvider>
      <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
        <Box w="100%">
          <Box borderRadius="lg" overflow="hidden">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                transform="scale(1.0)"
                src={
                  "https://cdn.discordapp.com/attachments/1030527530639302743/1031034139224322158/blank_tradingcard.jpg"
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
              {props.title}
            </Link>
          </Heading>
          <Text as="p" fontSize="md" marginTop="2">
            {props.summary[0]}
          </Text>
          <BlogAuthor name="John Doe" date={props.date} />
        </Box>
      </WrapItem>
    </ChakraProvider>
  );
};

export default SmallArticle;
