"use client";

import { IFilterMenuItem } from "@/lib/models/shared/IFilterMenuItem";
import { Close, FilterList } from "@mui/icons-material";
import {
  Box,
  Button,
  capitalize,
  Checkbox,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Menu,
} from "@mui/material";
import { MouseEvent, useState } from "react";

interface IProps {
  items: IFilterMenuItem[];
  filterSelectAction: (item: IFilterMenuItem) => void;
  filterRemoveAll: () => void;
}

export const FilterMenu = ({
  items,
  filterSelectAction,
  filterRemoveAll,
}: IProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const menuOpen = Boolean(anchorEl);
  const filterRemoveAllDisabled = items
    ? !(items.filter((x) => x.checked === true).length > 0)
    : false;

  const handleMenuOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ ml: 2 }}>
      <Button
        size="small"
        variant="outlined"
        startIcon={<FilterList />}
        onClick={handleMenuOpen}
      >
        Kategorier
      </Button>
      <Menu open={menuOpen} onClose={handleMenuClose} anchorEl={anchorEl}>
        <List dense disablePadding>
          <ListItemButton
            disabled={filterRemoveAllDisabled}
            onClick={filterRemoveAll}
          >
            <Close sx={{ ml: 1 }} />
            <ListItemText sx={{ ml: 2 }}>Fjern alle</ListItemText>
          </ListItemButton>
          <Divider />
          {items &&
            items.map((x) => (
              <ListItemButton
                onClick={() => filterSelectAction(x)}
                key={x.name}
              >
                <Checkbox checked={x.checked} />
                <ListItemText sx={{ ml: 1, mr: 2 }}>
                  {capitalize(x.name)} ({x.count})
                </ListItemText>
              </ListItemButton>
            ))}
        </List>
      </Menu>
    </Box>
  );
};
