import {
  Center,
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  Flex,
  Button,
  Box,
  Text,
  List,
  Tag,
  ListItem,
} from "@chakra-ui/react";

export const RecipePage = ({ item, clickFn }) => {
  return (
    <Center flex={1} bgColor="green.500" flexDirection="column">
      <Card
        borderRadius="xl"
        w={["sm", "lg", "lg"]}
        flex={1}
        bgColor="whiteAlpha.700"
      >
        <CardBody>
          <Image
            w="100%"
            h="300px"
            objectFit="cover"
            src={item.image}
            borderRadius="xl"
          />
          <Stack
            width={"100%"}
            justifyContent={"space-bewteen"}
            direction={"row"}
          >
            <Box flex={1}>
              <Stack mt="6" spacing="0">
                <Text size="xs" color="gray.500">
                  {item.mealType}
                </Text>
                <Heading paddingBottom="1" size="md">
                  {item.label}
                </Heading>
                <Text paddingBottom="-5" size="xs">
                  Total cooking time: {item.totalTime} Minutes
                </Text>
                <Text paddingTop="-5" size="xs">
                  Servings: {item.yield}
                </Text>
                <Text paddingTop="2" size="xs" fontWeight="bold">
                  Ingredients:
                </Text>
                <List gap={1} paddingBottom={2}>
                  {item.ingredientLines.map((ingredient) => (
                    <ListItem key={ingredient} size="md">
                      {ingredient}
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </Box>
            <Box flex={1}>
              <Stack mt="6" spacing="2">
                <Text size="xs" fontWeight="bold">
                  Health Labels:
                </Text>
                <Flex wrap="wrap" justify="left" gap={2}>
                  {item.healthLabels.map((healthLabel) => (
                    <Tag
                      color="whiteAlpha.900"
                      bgColor="green.900"
                      textAlign="center"
                      fontWeight="light"
                      key={healthLabel}
                    >
                      {healthLabel}
                    </Tag>
                  ))}
                </Flex>
                <Text size="xs" fontWeight="bold">
                  Diet:
                </Text>
                <Flex wrap="wrap" justify="left" gap={2}>
                  {item.dietLabels.map((dietLabel) => (
                    <Tag
                      color="whiteAlpha.900"
                      bgColor="green.600"
                      textAlign="center"
                      fontWeight="light"
                      key={dietLabel}
                    >
                      {dietLabel}
                    </Tag>
                  ))}
                </Flex>
                <Text size="xs" fontWeight="bold">
                  Cautions:
                </Text>
                <Flex wrap="wrap" justify="left" gap={2}>
                  {item.cautions.map((caution) => (
                    <Tag
                      color="whiteAlpha.900"
                      bgColor="red.900"
                      textAlign="center"
                      fontWeight="light"
                      key={caution}
                    >
                      {caution}
                    </Tag>
                  ))}
                </Flex>
                <Text size="xs" fontWeight="bold">
                  Total Nutrients:
                </Text>
                <Flex wrap="wrap" justify="left" gap={1}>
                  <Text color="black" fontWeight="light">
                    CALORIES: {Math.round(item.calories)}
                  </Text>
                  <Text color="black" fontWeight="light">
                    CARBS: {Math.round(item.totalNutrients.CHOCDF.quantity)} g
                  </Text>
                  <Text color="black" fontWeight="light">
                    PROTEIN: {Math.round(item.totalNutrients.PROCNT.quantity)} g
                  </Text>
                  <Text color="black" fontWeight="light">
                    FAT: {Math.round(item.totalNutrients.FAT.quantity)} g
                  </Text>
                  <Text color="black" fontWeight="light">
                    CHOLESTROL: {Math.round(item.totalNutrients.CHOLE.quantity)}{" "}
                    mg
                  </Text>
                  <Text color="black" fontWeight="light">
                    SODIUM: {Math.round(item.totalNutrients.NA.quantity)} mg
                  </Text>
                </Flex>
              </Stack>
            </Box>
          </Stack>
          <Button w="fit-content" onClick={() => clickFn()}>
            Back to overview
          </Button>
        </CardBody>
      </Card>
    </Center>
  );
};
