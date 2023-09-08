import { RecipeList } from "./RecipeList";
import { SimpleGrid, Input } from "@chakra-ui/react";

export const Searchbar = ({ clickFn, recipes, setSearchField }) => {
  const onChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <Input
        type="text"
        placeholder="Search for recipes:"
        onChange={onChange}
        bgColor="green.200"
        borderRadius={0}
        borderColor="green.500"
        cursor="pointer"
        _hover={{ transform: "scale(1.01)" }}
      />
      <SimpleGrid
        columns={[1, null, 4]}
        spacing={4}
        bgColor="green.500"
        justifyContent={"center"}
        alignContent={"center"}
        display={"flex"}
        flexWrap={"wrap"}
        paddingTop={4}
        paddingBottom={4}
      >
        <RecipeList clickFn={clickFn} recipes={recipes} />
      </SimpleGrid>
    </>
  );
};
