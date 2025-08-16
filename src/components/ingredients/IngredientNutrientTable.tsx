import { IIngredientNutrient } from '@/types/ingredients/IIngredientNutrient';
import {
  Box,
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import { display } from '@mui/system';

type TableSizeTypes = 'small' | 'medium';
type DetailLevelTypes = 'minimal' | 'extended' | 'full';

interface INutrientTableProps {
  nutrients: IIngredientNutrient[];
  toggleEnabled?: boolean;
  details?: DetailLevelTypes;
  size?: TableSizeTypes;
}

interface IRowProps {
  nutrient: IIngredientNutrient;
}

const filterMinimal = (nutrients: IIngredientNutrient[]) => {
  return nutrients.filter((x) => {
    if (x.nutrient.type.type === 'kategori') {
      if (!['vann', 'kostfiber'].includes(x.nutrient.name)) return x;
    }
  });
};

const filterExtended = (nutrients: IIngredientNutrient[]) => {
  return nutrients.filter((x) => {
    if (x.nutrient.type.type === 'kategori') {
      if (!['vann', 'kostfiber'].includes(x.nutrient.name)) return x;
    }
    if (['fettsyrer', 'karbohydrater'].includes(x.nutrient.type.type)) {
      if (!(x.nutrient.name[1] === '-')) return x;
    }
    if (['vitaminer', 'mineraler'].includes(x.nutrient.type.type)) {
      if (!(x.nutrient.name[0] === '-')) return x;
    }
  });
};

const CustomRow = ({ nutrient }: IRowProps) => {
  return (
    <TableRow hover>
      <TableCell>{nutrient.nutrient.name}</TableCell>
      <TableCell align="right">
        {nutrient.value} {nutrient.nutrient.measure.unit}
      </TableCell>
      {/*<TableCell>{nutrient.nutrient.measure.unit}</TableCell>*/}
    </TableRow>
  );
};

export const IngredientNutrientTable = ({
  nutrients,
  toggleEnabled = true,
  details = 'minimal',
  size = 'small',
}: INutrientTableProps) => {
  const [data, setData] = useState<IIngredientNutrient[]>([]);
  const [detailLevel, setDetailLevel] = useState<DetailLevelTypes>(details);

  const handleSetDetailLevel = (level: DetailLevelTypes) => {
    if (level === detailLevel) return;
    if (level === 'minimal') setData(filterMinimal(nutrients));
    if (level === 'extended') setData(filterExtended(nutrients));
    if (level === 'full') setData(nutrients);
    setDetailLevel(level);
  };
  console.log('rerender');

  useEffect(() => {
    if (detailLevel === 'minimal') setData(filterMinimal(nutrients));
    if (detailLevel === 'extended') setData(filterExtended(nutrients));
    if (detailLevel === 'full') setData(nutrients);
  }, [detailLevel, nutrients]);

  return (
    <Box sx={{ mt: 1, mb: 1 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'right',
        }}
      >
        <ButtonGroup variant="text" size={size} sx={{ display: toggleEnabled ? 'block' : 'none' }}>
          <Button
            color={detailLevel === 'minimal' ? 'secondary' : 'primary'}
            onClick={() => handleSetDetailLevel('minimal')}
          >
            Minimal
          </Button>

          <Button
            color={detailLevel === 'extended' ? 'secondary' : 'primary'}
            onClick={() => handleSetDetailLevel('extended')}
          >
            Utvidet
          </Button>
          <Button
            color={detailLevel === 'full' ? 'secondary' : 'primary'}
            onClick={() => handleSetDetailLevel('full')}
          >
            Full
          </Button>
        </ButtonGroup>
      </Box>
      <Table size={size}>
        <TableHead>
          <TableRow>
            <TableCell>Næringsstoff</TableCell>
            <TableCell align="right">Per 100g</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((n) => (
            <CustomRow key={n.id} nutrient={n} />
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
