/* eslint-disable prefer-const */
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
function Cards() {
  const array22 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  let cardArray: JSX.Element[] = [];
  function setCard(array: number[]) {
    for (let i = 0; i < array.length; i++) {
      cardArray.push(
        <div className="pcard" key={i.toString()}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia component="img" height="140" image="/icon-category-cases-protection.png" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {array[i]}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  this is {array[i]} photo
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>,
      );
    }
    return cardArray;
  }

  return (
    <div>
      <div id="cardcontainer" className="cardcontainer">
        {setCard(array22)}
      </div>
    </div>
  );
}

export default Cards;
