import { IngredientViewDataloader } from "@/components/ingredient/_pseudo/IngredientViewDataloader";
import { IngredientViewContent } from "@/components/ingredient/IngredientViewContent";
import { IngredientViewItemList } from "@/components/ingredient/IngredientViewItemList";
import { IngredientViewToolbar } from "@/components/ingredient/IngredientViewToolbar";
import { Box } from "@mui/material";
import { Fragment } from "react";

const IngredientPage = () => {
  return (
    <Fragment>
      <IngredientViewDataloader />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          gridTemplateRows: "auto auto",
        }}
      >
        <Box sx={{ gridRow: 1, gridColumn: "1 / 3" }}>
          <IngredientViewToolbar />
        </Box>
        <Box sx={{ gridRow: 2, gridColumn: 1 }}>
          <IngredientViewItemList />
        </Box>
        <Box sx={{ gridRow: 2, gridColumn: 2 }}>
          <IngredientViewContent />
        </Box>
      </Box>
    </Fragment>
  );
};

export default IngredientPage;
