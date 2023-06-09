import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Card from './Cards';
import { noticias } from '../../../data/NoticiasData';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Noticias() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} sx={{mt:3}}>
         {
            noticias.map (noticias =>(

                <Grid sx={12} sm ={6} md ={4} lg={3}>
                    <Item>
                        <Card key={Card.id} noticias={noticias}/>
                    </Item>
                </Grid>
                
            ))
         }
      </Grid>
    </Box>
  );
}