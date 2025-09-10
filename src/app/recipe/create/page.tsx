import { Fragment } from 'react';
import { Box } from '@mui/material';
import { RecipeAddToolbar } from '@/components/recipe/add/RecipeAddToolbar';
import { RecipeAddDataLoader } from '@/components/recipe/add/_pseudo/RecipeAddDataLoader';

const RecipeAddPage = () => {
  return (
    <Fragment>
      <RecipeAddDataLoader />
      <Box>
        <RecipeAddToolbar />
      </Box>
    </Fragment>
  );
};

export default RecipeAddPage;
