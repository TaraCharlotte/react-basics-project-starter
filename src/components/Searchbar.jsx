//import { useState } from "react";
//import { data } from "../utils/data";
//import { RecipeListPage } from "../pages/RecipeListPage";
import { RecipeList } from "./RecipeList";
import { SimpleGrid, Input } from "@chakra-ui/react";

export const Searchbar = ({ clickFn, recipes, setSearchField }) => {
  const onChange = (event) => {
    setSearchField(event.target.value);
  };

  // console.log(recipes);

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

//   const LabelArray = [];

//   for (let i in RecipeArray) {
//     LabelArray.push(RecipeArray[i].label);
//     console.log(RecipeArray[i].label);
//   }

//   console.log(LabelArray);

//   const matchedRecipes = RecipeArray.filter((recipe) => {
//     return RecipeArray[recipe].label
//       .toLowerCase()
//       .includes(searchField.toLowerCase());
//   });

//   const matchedRecipes = data.hits[0].recipe.filter((name) => {
//     return name.label.toLowerCase().includes(searchField.toLowerCase());
//   });

//   const handleChange = (event) => {
//     setSearchField(event.target.value);
//   };
//   return (
//     <>
//       <label>Search for a recipe:</label>
//       <TextInput changeFn={setSearchField} />
//       <RecipeListPage clickFn={clickFn} item={matchedRecipes} />
//     </>
//   );
// };
