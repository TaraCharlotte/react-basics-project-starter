import {
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Tag } from "./ui/RecipePage";

export const RecipeItemCard = ({ item, clickFn }) => {
  return (
    <Card
      borderRadius={["0", "xl"]}
      bgColor="whiteAlpha.700"
      w={["500px", "350px", "300px", "250px"]}
      h="32rem"
      onClick={() => clickFn(item)}
      cursor="pointer"
      _hover={{ transform: "scale(1.01)" }}
    >
      <CardBody>
        <Image
          borderRadius="xl"
          h="200px"
          objectFit="cover"
          w="100%"
          src={item.image}
        />
        <Stack mt="1" spacing="1">
          <Text textAlign="center" size="xs" color="gray.500">
            {item.mealType}
          </Text>
          <Heading textAlign="center" size="md">
            {item.label}
          </Heading>
          <Flex wrap="wrap" justify="center" gap={2}>
            {item.healthLabels.map((healthLabel) => {
              if (healthLabel === "Vegetarian")
                return (
                  <Tag bgColor="green.600" key="vegetarian">
                    Vegetarian
                  </Tag>
                );
              else if (healthLabel === "Vegan")
                return (
                  <Tag bgColor="green.600" key="vegan">
                    Vegan
                  </Tag>
                );
            })}
          </Flex>
          <Flex wrap="wrap" justify="center" gap={2}>
            {item.dietLabels.map((dietLabel) => (
              <Tag bgColor="green.900" textAlign="center" key={dietLabel}>
                {dietLabel}
              </Tag>
            ))}
          </Flex>
          <Text textAlign="center" size="xs" color="gray.700">
            Dish: {item.dishType}
          </Text>
          {item.cautions.length > 0 && (
            <Text textAlign="center" size="xs" color="gray.700">
              Cautions:
            </Text>
          )}
          <Flex wrap="wrap" justify="center" gap={2}>
            {item.cautions.map((caution) => (
              <Tag bgColor="red.900" textAlign="center" key={caution}>
                {caution}
              </Tag>
            ))}
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
