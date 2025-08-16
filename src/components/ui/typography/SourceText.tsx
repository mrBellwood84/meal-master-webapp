import { ISource } from '@/types/misc/ISource';
import { Link as MUILink, Typography } from '@mui/material';
import Link from 'next/link';

interface IProps {
  source: ISource;
}

export const SourceText = ({ source }: IProps) => {
  if (!source.href)
    return (
      <Typography variant="caption" sx={{ fontStyle: 'oblique', opacity: 0.8 }}>
        Kilde: {source.text}
      </Typography>
    );

  return (
    <Typography variant="caption" sx={{ fontStyle: 'oblique', opacity: 0.8 }}>
      Kilde:{' '}
      <MUILink component={Link} href={source.href} target="_blank">
        {source.text}
      </MUILink>
    </Typography>
  );
};
