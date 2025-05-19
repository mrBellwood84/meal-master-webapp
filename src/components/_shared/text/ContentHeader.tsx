import { Box, capitalize, Divider, Typography } from "@mui/material";

interface IProps {
  title: string;
  secondary?: string;
}

export const ContentHeader = ({ title, secondary }: IProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        borderBottom: "1px solid black",
        mb: 1,
        pb: 1,
      }}
    >
      <Typography variant="h4" component="div">
        {capitalize(title)}
      </Typography>
      {secondary && (
        <Typography variant="h6" fontStyle="italic" sx={{ pl: 1 }}>
          flertall : {secondary}
        </Typography>
      )}
    </Box>
  );
};
