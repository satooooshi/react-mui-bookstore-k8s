import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Chip, Paper, Typography } from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { ProductionQuantityLimits } from '@mui/icons-material';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray({categoriesa}) {

  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {categoriesa.map((data) => {
        return (
          <ListItem>
            <Chip
              label={data}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}