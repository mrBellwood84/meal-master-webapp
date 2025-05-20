import { capitalize, Checkbox, FormControlLabel } from "@mui/material";
import { InlineLoader } from "../loader/InlineLoader";
import { CheckCircle, RadioButtonUncheckedRounded } from "@mui/icons-material";

interface IProps {
  label: string;
  checked?: boolean;
  loading?: boolean;
  onChange?: () => void;
}

export const AppCheckbox = ({ label, checked, loading, onChange }: IProps) => {
  return (
    <FormControlLabel
      label={capitalize(label)}
      checked={checked}
      control={
        <Checkbox
          icon={<RadioButtonUncheckedRounded />}
          checkedIcon={<CheckCircle />}
          indeterminateIcon={
            <InlineLoader size={16} thickness={12} sx={{ ml: 0.3, mr: 0.6 }} />
          }
          indeterminate={loading}
          checked={checked}
          onChange={onChange}
        />
      }
    />
  );
};
