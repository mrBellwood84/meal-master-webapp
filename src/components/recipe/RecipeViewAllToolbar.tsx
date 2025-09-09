import { SxProps } from '@mui/material';
import { PageToolbar } from '@/components/ui/PageToolbar';

interface IProps {
  sx?: SxProps;
}

export const RecipeViewAllToolbar = ({ sx }: IProps) => {
  return <PageToolbar title="Oppskrifter" sx={{ ...sx }} />;
};
