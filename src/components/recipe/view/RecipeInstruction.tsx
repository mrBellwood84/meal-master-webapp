import { Box, Typography } from "@mui/material";
import { Fragment } from "react";

interface IInstruction {
  index: number;
  text: string;
}

const instructions: IInstruction[] = [
  {
    index: 1,
    text: "Dette er først delen av instruksjoner for denne oppskriften.",
  },
  {
    index: 2,
    text: "Dette er andre punkt i oppskriftten. Her kommer enda mer å gjøre",
  },
  {
    index: 3,
    text: "Siste og tredje steg i oppskriften er kanskje den lengste. Men når dette er gjort er maten klar for servering. Bon apetitt",
  },
];

export const RecipeInstruction = () => {
  return (
    <Box
      sx={{
        p: 2,
        ml: 2,
        display: "grid",
        gridTemplateColumns: "fit-content  auto",
        gridAutoRows: "auto",
        alignItems: "top",
      }}
    >
      {instructions.map((x) => (
        <Fragment key={x.index}>
          <Box sx={{ gridColumn: 1, mr: 1, mb: 1 }}>
            <Typography>{x.index}.</Typography>
          </Box>
          <Box sx={{ gridColumn: 2, mb: 1 }}>
            <Typography>{x.text}</Typography>
          </Box>
        </Fragment>
      ))}
    </Box>
  );
};
