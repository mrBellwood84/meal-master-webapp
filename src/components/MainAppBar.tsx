import { Home } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import Link from "next/link";

interface IPageLink {
  title: string;
  key: string;
  url: string;
}

const appbarLinks: IPageLink[] = [
  {
    title: "Oppskrifter",
    key: "recipe",
    url: "/recipe",
  },
  {
    title: "Ingredienser",
    key: "ingredient",
    url: "/ingredient",
  },
  {
    title: "Kalender",
    key: "calendar",
    url: "/calendar",
  },
  {
    title: "Handleliste",
    key: "shopping",
    url: "/shopping",
  },
];

export const MainAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton LinkComponent={Link} href="/" sx={{ color: "white" }}>
            <Home />
          </IconButton>
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
