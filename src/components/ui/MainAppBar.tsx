import { AccountCircle, Home } from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import Link from 'next/link';

interface IPageLink {
  text: string;
  key: string;
  url: string;
  active: boolean;
}

const links: IPageLink[] = [
  {
    text: 'Oppskrifter',
    key: 'recipe',
    url: '/recipe',
    active: false,
  },
  {
    text: 'Ingredienser',
    key: 'ingredient',
    url: '/ingredient',
    active: true,
  },
  {
    text: 'Planlegger',
    key: 'planner',
    url: '/calendar',
    active: false,
  },
  {
    text: 'Handleliste',
    key: 'shopping',
    url: '/shopping',
    active: false,
  },
];

export const MainAppBar = () => {
  return (
    <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <IconButton LinkComponent={Link} href="/" color="primary">
            <Home />
          </IconButton>
        </Box>
        <Box>
          {links.map((item) => (
            <Button
              variant="text"
              key={`appbar-link-${item.key}`}
              LinkComponent={Link}
              href={item.url}
              disabled={!item.active}
            >
              {item.text}
            </Button>
          ))}
        </Box>
        <Box>
          <IconButton disabled color="primary">
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
