import {
  capitalize,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

interface IProps {
  label: string;
  onClick?: () => void;
}

export const AsideListItemButton = ({ label, onClick }: IProps) => {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClick}>
        <ListItemText>{capitalize(label)}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
