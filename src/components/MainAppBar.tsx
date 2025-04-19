import { appbarLinks } from "@/lib/links/links";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import Link from "next/link";

export const MainAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {appbarLinks.map((x) => (
            <Button
              variant="text"
              key={`appbar-link-${x.key}`}
              LinkComponent={Link}
              href={x.url}
              sx={{
                color: "white",
              }}
            >
              {x.title}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
