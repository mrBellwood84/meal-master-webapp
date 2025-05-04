import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

interface IProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

export const AsideButtonListButton = ({ icon, label, onClick }: IProps) => {
  return (
    <ListItem>
      <ListItemButton onClick={onClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{label}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
