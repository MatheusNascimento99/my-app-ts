import { Box, Text } from "@chakra-ui/react";

interface IcardInfo {
  mainContent: string,
  content: string
}

const CardInfo = ({ mainContent, content }: IcardInfo) => {
  return (
    <Box
      bg="pink"
      width={320}
      minHeight="25vh"
      padding={10}
      textAlign={"center"}
      borderRadius={20}
    >
      <Text fontSize={"2x-large"} fontWeight={"bold"}>{mainContent}</Text>
      <Text fontSize={"x-large"} >{content}</Text>
    </Box>
  );
};

export default CardInfo;
