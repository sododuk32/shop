import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';
import Grid from '@mui/material/Grid';

function CardRows(e: number) {
  return (
    <Grid item sm={'auto'} md={'auto'} key={e}>
      <Link key={e * 771 - 1} href={`/goods/${e}`}>
        <Card sx={{ maxWidth: 200, maxHeight: 200 }}>
          <CardActionArea>
            <CardMedia component="img" height="100" image="/icon-category-cases-protection.png" alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {e}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                this is {e} photo
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}

export default CardRows;
