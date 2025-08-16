import { ContentContainer } from '@/components/ui/containers/ContentContainer';
import { useAppSelector } from '@/store/hooks';
import { PageSubtitle } from '@/components/ui/typography/PageSubtitle';
import { Box, capitalize, Chip, Divider } from '@mui/material';
import { SourceText } from '@/components/ui/typography/SourceText';
import { IngredientMeasureTable } from '@/components/ingredients/IngredientMeasuresTable';
import { IngredientNutrientTable } from '@/components/ingredients/IngredientNutrientTable';

export const IngredientViewContent = () => {
  const selected = useAppSelector((s) => s.ingredientView.selected);

  if (!selected)
    return (
      <ContentContainer>
        <div>Ingen ingredient valgt...</div>
      </ContentContainer>
    );

  return (
    <ContentContainer>
      <Box sx={{ display: 'flex', mt: 1, mb: 1 }}>
        <PageSubtitle title={capitalize(selected.name)} sx={{ flexGrow: 1 }} />
        {selected.categories.map((c) => (
          <Chip key={c.id} label={capitalize(c.name)} sx={{ mr: 1 }} />
        ))}
      </Box>
      <Divider />

      <IngredientMeasureTable measures={selected.measures} />

      <IngredientNutrientTable nutrients={selected.nutrients} />

      <SourceText source={selected.nutrientSource} />
    </ContentContainer>
  );
};
