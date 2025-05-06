import { Box } from "@mui/material";
import Link from "next/link";
import { Fragment } from "react";

const RecipePage = () => {
  return (
    <Fragment>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          gridTemplateRows: "auto auto",
        }}
      >
        <Box sx={{ gridRow: 1, gridColumn: 2, bgcolor: "salmon" }}>
          Søkefelt
        </Box>
        <Box sx={{ gridRow: "1/3", gridColumn: 1, bgcolor: "lightblue" }}>
          Alternativer for søk
        </Box>
        <Box sx={{ gridRow: 2, gridColumn: 2, bgcolor: "lightyellow" }}>
          Grid for oppskrifter. Cards?
        </Box>
        <Link href="recipe/view">View</Link>
      </Box>
    </Fragment>
  );
};

export default RecipePage;
