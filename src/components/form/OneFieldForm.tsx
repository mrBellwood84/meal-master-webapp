import { Cancel, Edit, Save } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

interface IProps {
  label?: string;
  value?: string;
  loading?: boolean;
  handleSave?: (value: string) => void;
}

export const OneFieldForm = ({
  label,
  value,
  loading = false,
  handleSave,
}: IProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [fieldValue, setFieldValue] = useState<string>();

  const handleSetEditMode = () => {
    setFieldValue(value ?? "");
    setEditMode(true);
  };

  const handleTextfieldOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFieldValue(value);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    if (handleSave) handleSave(fieldValue ?? "");
  };

  const handleTextfieldCancel = () => {
    setEditMode(false);
    setFieldValue(value ?? "");
  };

  if (loading)
    return (
      <Box
        sx={{ display: "flex", alignItems: "center", mt: 1, mb: 1, height: 55 }}
      >
        <Skeleton variant="circular" width={35} height={35} />
        <Skeleton
          variant="rectangular"
          height={45}
          width={250}
          sx={{ ml: 2 }}
        />
      </Box>
    );

  if (editMode)
    return (
      <Box
        sx={{
          mt: 1,
          mb: 1,
          display: "flex",
          alignItems: "center",
          height: 55,
        }}
      >
        <IconButton color="error" onClick={handleTextfieldCancel}>
          <Cancel />
        </IconButton>
        <TextField
          variant="standard"
          label={label}
          value={fieldValue}
          onChange={handleTextfieldOnChange}
          sx={{ ml: 2 }}
        />
        <IconButton color="success" onClick={handleSaveClick}>
          <Save />
        </IconButton>
      </Box>
    );

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", mt: 1, mb: 1, height: 55 }}
    >
      <IconButton color="secondary" onClick={handleSetEditMode}>
        <Edit />
      </IconButton>
      <Typography variant="h5" color="primaryText" sx={{ ml: 1 }}>
        <b>{label}:</b> {value}
      </Typography>
    </Box>
  );
};
