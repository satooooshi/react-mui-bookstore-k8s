import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Chip, Paper, Typography } from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray({chipPoolData, setChipPoolData, chipData, setChipData}) {


  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    setChipPoolData([...chipPoolData, chipToDelete]);
  };

  return (
    <div>
    <Typography>選んだカテゴリ</Typography>
    <Paper
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
      {chipData.map((data) => {

        return (
          <ListItem key={data.key}>
            <Chip
              label={data.label}
              onDelete={handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
    </div>  
  );
}