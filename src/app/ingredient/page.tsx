'use client';

import { Box } from '@mui/material';
import { Fragment } from 'react';
import { IngredientViewDataLoader } from '@/components/ingredients/_pseudo/IngredientViewDataLoader';
import { IngredientViewToolbar } from '@/components/ingredients/IngredientViewToolbar';
import { IngredientViewItemList } from '@/components/ingredients/IngredientViewItemList';
import { IngredientViewContent } from '@/components/ingredients/IngredientViewContent';

const IngredientPage = () => {
  return (
    <Fragment>
      <IngredientViewDataLoader />
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gridTemplateRows: 'auto auto' }}>
        <Box sx={{ gridRow: 1, gridColumn: '1/3' }}>
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
