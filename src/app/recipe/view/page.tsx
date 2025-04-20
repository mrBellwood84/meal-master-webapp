import { RecipeIngredientList } from "@/components/recipe/view/RecipeIngredientList";
import { RecipeInstruction } from "@/components/recipe/view/RecipeInstruction";
import { RecipeNutrionList } from "@/components/recipe/view/RecipeNutritionList";
import { RecipeOptionButtons } from "@/components/recipe/view/RecipeOptionButtons";
import { RecipeSourceComment } from "@/components/recipe/view/RecipeSourceComment";
import { RecipeViewTitle } from "@/components/recipe/view/RecipeViewTitle";
import { Box, Divider } from "@mui/material";

const ViewRecipePage = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gridTemplateRows: "auto auto",
      }}
    >
      <Box sx={{ gridRow: 1, gridColumn: "1 / 3" }}>
        <div>bilde eller noe sånnt her...</div>
      </Box>

      <Box sx={{ gridColumn: 1, gridRow: 2, mr: 1 }}>
        <RecipeOptionButtons />
        <RecipeIngredientList />
        <RecipeNutrionList />
      </Box>

      <Box sx={{ gridColumn: 2, gridRow: 2 }}>
        <RecipeViewTitle />
        <Divider sx={{ m: 2 }} />
        <RecipeInstruction />
        <Divider sx={{ m: 2 }} />
        <RecipeSourceComment />
      </Box>
    </Box>
  );
};

export default ViewRecipePage;
