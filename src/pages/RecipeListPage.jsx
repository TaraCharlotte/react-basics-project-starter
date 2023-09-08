import { Heading } from "@chakra-ui/react";
import { data } from "../utils/data";
import { Searchbar } from "../components/Searchbar";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const recipesSimple = [];
  for (const items in data.hits) {
    recipesSimple.push(data.hits[items].recipe);
  }


  const matchedRecipes = recipesSimple.filter((recipe) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });


  return (
    <div className="RecipeListPage">
      <Heading p={2} bgColor="green.500" textAlign="center">
        Winc recipe checker
      </Heading>
      <Searchbar
        setSearchField={setSearchField}
        recipes={matchedRecipes}
        clickFn={clickFn}
      />
    </div>
  );
};
