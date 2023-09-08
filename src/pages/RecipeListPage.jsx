import { Heading } from "@chakra-ui/react";
import { data } from "../utils/data";
import { Searchbar } from "../components/Searchbar";
import { useState } from "react";
//import { RecipeList } from "../components/RecipeList";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  // console.log(data.hits[1].recipe.label);

  const recipesSimple = [];
  for (const items in data.hits) {
    recipesSimple.push(data.hits[items].recipe);
  }

  // console.log("recipes simple searchbar");
  // console.log(recipesSimple);

  const matchedRecipes = recipesSimple.filter((recipe) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  // console.log(matchedRecipes);

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
