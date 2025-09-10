'use client';

import { AddCircle } from '@mui/icons-material';
import { Box, SxProps } from '@mui/material';
import { PageToolbar } from '@/components/ui/PageToolbar';
import { AppSearchField } from '@/components/ui/AppSearchField';
import { useState } from 'react';
import { AppIconLinkButton } from '@/components/ui/AppIconLinkButton';

interface IProps {
  sx?: SxProps;
}

export const RecipeViewAllToolbar = ({ sx }: IProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <PageToolbar title="Oppskrifter" sx={{ ...sx }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppSearchField
          value={searchTerm}
          handleClearClickAction={() => setSearchTerm('')}
          handleOnChangeAction={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
      <Box>
        <AppIconLinkButton href="/recipe/create">
          <AddCircle color="success" />
        </AppIconLinkButton>
      </Box>
    </PageToolbar>
  );
};
