import { RecipeItemCard } from "./RecipeItemCard";

export const RecipeList = ({ recipes, clickFn }) => {
  return (
    <>
      {recipes.map((item) => (
        <RecipeItemCard clickFn={clickFn} item={item} key={item.label} />
      ))}
    </>
  );
};
