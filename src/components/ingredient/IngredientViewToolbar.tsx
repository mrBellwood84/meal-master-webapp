"use client";

import { useAppDispatch, useAppSelector } from "@/lib/state/hooks";
import { ToolbarContainer } from "../_shared/containers/ToolbarContainer";
import { FilterMenu } from "../_shared/inputs/FilterMenu";
import { IFilterMenuItem } from "@/lib/models/_shared/IFilterMenuItem";
import { Add, Edit } from "@mui/icons-material";
import { ToolbarLinkButton } from "../_shared/buttons/ToolbarLinkButton";
import { ingredientReadStateActions } from "@/lib/state/ingredients/read/slice";

export const IngredientViewToolbar = () => {
  const dispatch = useAppDispatch();

  const categories = useAppSelector(
    (s) => s.ingredientRead.categoryFilterItems
  );
  const selected = useAppSelector((s) => s.ingredientRead.selected);
  const { handleCategoryFilter, setLoading } = ingredientReadStateActions;

  const filterCategoryAction = (item: IFilterMenuItem) => {
    const result = categories.map((x) => {
      if (x !== item) return x;
      return { ...x, checked: !item.checked };
    });
    dispatch(handleCategoryFilter(result));
  };

  const filterCategoryClear = () => {
    const result = categories.map((x) => {
      return { ...x, checked: false };
    });
    dispatch(handleCategoryFilter(result));
  };

  const handleLinkButtonClick = () => dispatch(setLoading());

  return (
    <ToolbarContainer>
      <FilterMenu
        items={categories}
        filterSelectAction={filterCategoryAction}
        filterRemoveAll={filterCategoryClear}
        sx={{ flexGrow: 1 }}
      />
      <ToolbarLinkButton
        title="Rediger"
        href={`ingredient/update/${
          selected?.id ?? "00000000-0000-0000-0000-000000000000"
        }`}
        onClick={handleLinkButtonClick}
        endIcon={<Edit />}
        disabled={!Boolean(selected)}
        sx={{ mr: 2 }}
      />
      <ToolbarLinkButton
        title="Opprett"
        href={"ingredient/create"}
        endIcon={<Add />}
        variant="outlined"
        color="success"
      />
    </ToolbarContainer>
  );
};
