"use client";

import { CalendarToday, Close, Edit } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

export const RecipeOptionButtons = () => {
  const [noFeatureText, setNoFeatureText] = useState<string>();

  const clickEdit = () =>
    setNoFeatureText("Rediger oppskrift ikke lagt til enda");
  const clickAddPlan = () =>
    setNoFeatureText("Legg til plan funksjon ikke lagt til enda ");
  const clickAway = () => setNoFeatureText(undefined);

  return (
    <List
      sx={{
        border: "1px solid lightgray",
        borderRadius: 1,
        mb: 1,
      }}
    >
      <ListItem>
        <ListItemButton onClick={clickEdit}>
          <ListItemIcon>
            <Edit />
          </ListItemIcon>
          <ListItemText>Rediger</ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem>
        <ListItemButton onClick={clickAddPlan}>
          <ListItemIcon>
            <CalendarToday />
          </ListItemIcon>
          <ListItemText>Legg til plan</ListItemText>
        </ListItemButton>
      </ListItem>

      {noFeatureText && (
        <ListItem sx={{ color: "red" }}>
          <ListItemButton onClick={clickAway}>
            <ListItemIcon>
              <Close />
            </ListItemIcon>
            <ListItemText>{noFeatureText}</ListItemText>
          </ListItemButton>
        </ListItem>
      )}
    </List>
  );
};
