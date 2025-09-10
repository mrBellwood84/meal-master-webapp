'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { AsideContainer } from '@/components/ui/containers/AsideContainer';
import {
  capitalize,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SxProps,
} from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { IIngredient } from '@/types/ingredients/IIngredient';
import { ingredientViewStateActions } from '@/store/ingredients/ingredientViewState';
import { AppSearchField } from '@/components/ui/AppSearchField';

interface IProps {
  sx?: SxProps;
}

interface IListItemButtonProps {
  title: string;
  onClick?: () => void;
  sx?: SxProps;
}

const CustomListItemButton = ({ title, onClick }: IListItemButtonProps) => {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClick}>
        <ListItemText primary={capitalize(title)} />
      </ListItemButton>
    </ListItem>
  );
};

export const IngredientViewItemList = ({ sx }: IProps) => {
  const dispatch = useAppDispatch();
  const { setSelectedIngredient } = ingredientViewStateActions;

  const apiLoading = useAppSelector((s) => s.ingredientView.apiLoading);
  const loadingFailed = useAppSelector((s) => s.ingredientView.loadingFailed);
  const data = useAppSelector((s) => s.ingredientView.ingredients);

  const [ingredients, setIngredients] = useState<IIngredient[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const setSelected = (ingredient: IIngredient) => dispatch(setSelectedIngredient(ingredient));

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;

    if (term === '') {
      setSearchTerm('');
      setIngredients(data);
      return;
    }
    const result = [];
    const normalized = term.toLowerCase();

    for (const i of ingredients) {
      if (i.name.toLowerCase().includes(normalized)) result.push(i);
    }

    setIngredients(result);
    setSearchTerm(term);
  };

  const clearSearchTerm = () => {
    setIngredients(data);
    setSearchTerm('');
  };

  useEffect(() => {
    if (ingredients.length === 0) {
      setIngredients(data);
      setSearchTerm('');
    }
  }, [ingredients, data]);

  return (
    <AsideContainer loading={apiLoading} loadingFailed={loadingFailed} sx={{ ...sx }}>
      <List>
        <AppSearchField
          value={searchTerm}
          handleOnChangeAction={handleOnChange}
          handleClearClickAction={clearSearchTerm}
          sx={{ m: 1 }}
        />
        <Divider />
        {ingredients.map((x) => (
          <CustomListItemButton key={x.id} title={x.name} onClick={() => setSelected(x)} />
        ))}
      </List>
    </AsideContainer>
  );
};
