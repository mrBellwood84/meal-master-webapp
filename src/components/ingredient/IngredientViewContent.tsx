"use client";

import { useAppSelector } from "@/lib/state/hooks";
import { MainContainer } from "../_shared/containers/MainContainer";
import { Box, capitalize, Chip } from "@mui/material";
import { SourceText } from "../_shared/text/SourceText";
import { IngredientMessureTable } from "./_components/IngredientMessureTable";
import { ContentHeader } from "../_shared/text/ContentHeader";
import { NutrientTable } from "../_shared/nutrient/NutrientTable";

export const IngredientViewContent = () => {
  const selected = useAppSelector((x) => x.ingredientView.selected);

  if (!selected)
    return (
      <MainContainer>
        <ContentHeader title="Velg ingrediens..." />
      </MainContainer>
    );
  return (
    <MainContainer>
      <ContentHeader title={selected!.name} secondary={selected!.namePlural} />

      <Box>
        {selected.categories.map((x) => (
          <Chip
            key={x.id}
            label={capitalize(x.name)}
            sx={{ m: 1 }}
            color="info"
          />
        ))}
      </Box>

      <IngredientMessureTable messures={selected.messures} />

      <NutrientTable nutrients={selected.nutrients} />

      <div>
        <SourceText
          text={selected.nutrientSource.text}
          type={selected.nutrientSource.type}
        />
      </div>
    </MainContainer>
  );
};
