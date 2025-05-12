import { IngredientList } from "@/components/ingredient/IngredientList";
import { IngredientToolbar } from "@/components/ingredient/IngredientToolbar";
import { IngredientView } from "@/components/ingredient/IngredientView";
import { IngredientDataLoader } from "@/components/ingredient/pseudo/ingredientDataLoader";
import { Box } from "@mui/material";
import { Fragment } from "react";

const IngredientPage = () => {
  return (
    <Fragment>
      <IngredientDataLoader />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          gridTemplateRows: "auto auto",
        }}
      >
        <Box sx={{ gridRow: 1, gridColumn: "1 / 3" }}>
          <IngredientToolbar />
        </Box>
        <Box sx={{ gridRow: 2, gridColumn: 1 }}>
          <IngredientList />
        </Box>
        <Box sx={{ gridRow: 2, gridColumn: 2 }}>
          <IngredientView />
        </Box>
      </Box>
    </Fragment>
  );
};

export default IngredientPage;
