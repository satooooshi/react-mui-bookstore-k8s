import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Chip, Paper, Typography } from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray({chipPoolData, setChipPoolData, chipData, setChipData}) {


  const handleDelete = (chipToDelete) => () => {
    setChipPoolData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    setChipData([...chipData, chipToDelete]);
  };

  return (
    <div>
    <Typography>カテゴリ別に見る</Typography>
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
        '& .MuiChip-root': {
          borderRadius: '1px',
          color:'rgb(255 255 255 / 87%)',
          backgroundColor: 'rgb(12 0 85 / 71%)',
        }
      }}
      component="ul"
    >
       
      {chipPoolData.map((data) => {
        return (
          <ListItem key={data.key}>
            <Chip
              label={data.label}
              onClick={handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
    </div>
  );
}