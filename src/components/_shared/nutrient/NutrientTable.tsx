import { IIngredientNutrient } from "@/lib/models/Ingredients/IIngredientNutrient";
import {
  Box,
  capitalize,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tabs,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { ContentSubHeader } from "../text/ContentSubHeader";

interface IRowProps {
  nutrient: IIngredientNutrient;
}

interface ITableProps {
  nutrients: IIngredientNutrient[];
}

const nutrientKeys = [
  "kategori",
  "karbohydrater",
  "fettsyrer",
  "vitaminer",
  "mineraler",
];

const NutrientRow = ({ nutrient }: IRowProps) => {
  return (
    <TableRow hover>
      <TableCell>{nutrient.name}</TableCell>
      <TableCell align="right">
        {nutrient.value} {nutrient.messure}
      </TableCell>
    </TableRow>
  );
};

const filterNutrient = (nutrients: IIngredientNutrient[]) => {
  const result = [];
  for (let i = 0; i < nutrientKeys.length; i++) {
    const key = nutrientKeys[i];
    const data = nutrients.filter((x) => x.type === key);
    result.push(data);
  }
  return result;
};

export const NutrientTable = ({ nutrients }: ITableProps) => {
  const [nutrientKey, setNutrientKey] = useState<string>("kategori");

  const handleChange = (_: SyntheticEvent, value: string) => {
    setNutrientKey(value);
  };

  const dataFiltered = filterNutrient(nutrients);

  for (let i = 0; i < dataFiltered.length; i++) {
    if (dataFiltered[i].length === 0) {
      if (nutrientKeys[i] === nutrientKey) {
        setNutrientKey("kategori");
        break;
      }
    }
  }

  return (
    <Box sx={{ mt: 3, mb: 2 }}>
      <ContentSubHeader title="Næringsinnhold per 100g" />
      <Tabs value={nutrientKey} onChange={handleChange} centered>
        {nutrientKeys.map((n, i) => (
          <Tab
            key={n}
            label={capitalize(n)}
            value={n}
            disabled={dataFiltered[i].length === 0}
          />
        ))}
      </Tabs>
      <TableContainer>
        <Table size="small">
          <TableBody>
            {nutrientKey === nutrientKeys[0] &&
              dataFiltered[0].map((x) => (
                <NutrientRow key={x.id} nutrient={x} />
              ))}
            {nutrientKey === nutrientKeys[1] &&
              dataFiltered[1].map((x) => (
                <NutrientRow key={x.id} nutrient={x} />
              ))}
            {nutrientKey === nutrientKeys[2] &&
              dataFiltered[2].map((x) => (
                <NutrientRow key={x.id} nutrient={x} />
              ))}
            {nutrientKey === nutrientKeys[3] &&
              dataFiltered[3].map((x) => (
                <NutrientRow key={x.id} nutrient={x} />
              ))}
            {nutrientKey === nutrientKeys[4] &&
              dataFiltered[4].map((x) => (
                <NutrientRow key={x.id} nutrient={x} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
