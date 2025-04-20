"use client";

import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import { Fragment, useState } from "react";

interface IIngredients {
  name: string;
  amount: number;
  messure: string;
}

const ingredients: IIngredients[] = [
  {
    name: "melk",
    amount: 2.5,
    messure: "dl",
  },
  {
    name: "smør",
    amount: 2,
    messure: "ss",
  },
  {
    name: "mel",
    amount: 450,
    messure: "g",
  },
];

export const RecipeIngredientList = () => {
  const [portion, setPortion] = useState<number>(5);

  const handleSetPortion = (n: number) => {
    if (portion <= 1 && n < 1) {
      setPortion(1);
      return;
    }
    setPortion(portion + n);
  };

  return (
    <Box sx={{ border: "1px solid lightgray", borderRadius: 1, mt: 1, mb: 1 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pt: 2,
        }}
      >
        <Typography variant="h5" component="div">
          Ingredienser
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton onClick={() => handleSetPortion(-1)}>
            <RemoveCircle />
          </IconButton>
          <Typography variant="h6" component="div" textAlign="center">
            {portion}
          </Typography>
          <IconButton onClick={() => handleSetPortion(+1)}>
            <AddCircle />
          </IconButton>
        </Box>

        <Typography>porsjoner</Typography>
      </Box>

      <Divider sx={{ m: 2 }} />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          gridAutoRows: "auto",
          justifyContent: "center",
        }}
      >
        {ingredients.map((x) => (
          <Fragment key={x.name}>
            <Typography
              sx={{ textAlign: "right", mr: 1, mb: 1 }}
              variant="subtitle1"
            >
              {x.amount} {x.messure}
            </Typography>
            <Typography variant="subtitle1">{x.name}</Typography>
          </Fragment>
        ))}
      </Box>
    </Box>
  );
};
