import { PageToolbar } from '@/components/ui/PageToolbar';
import { SxProps } from '@mui/material';

interface IProps {
  sx?: SxProps;
}

export const IngredientViewToolbar = ({ sx }: IProps) => {
  return <PageToolbar title="Ingredienser" sx={{ ...sx }} />;
};
