"use client"
import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Update=({el})=>{
    const router = useRouter();
    const [data, setData] = useState([])
    const [open, setOpen] = useState(false);
    const token =JSON.parse( localStorage.getItem("token"))
    const userRole = token?.role;
    const [update, setUpdate] = useState(false);
    const [fav, setFav] = useState("")
    const fetchFav=()=>{
    axios.get ('http://localhost:3001/api/user/get').then((response)=>{
setData(response.data)
    }).catch((err)=>console.log(err) )
   }
      if(userRole!=="Customer"){
        router.push("/404")
      }
     useEffect(()=>fetchFav(),[])
    
  return (
    <div>
  
      {/* {data.filter((ele)=>ele.favorites===fav).map((item,index)=>{
      
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={el.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {el.location}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      {isFavorite(el.id) ? (
                  <IconButton
                    aria-label="remove from favorites"
                    onClick={() => removeFromFavorites(el.id)}
                  >
                    <FavoriteIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    aria-label="add to favorites"
                    onClick={() => addToFavorites(el.id)}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                )}
       
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph></Typography>
          <Typography paragraph>
            {el.numbOfrooms}
          </Typography>
          <Typography paragraph>
          {el.numbOfBathroom}
          </Typography>
          <Typography paragraph>
            {el.area}
          </Typography>
          <Typography>
            {el.price}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
        
      })
  } */}
    </div>
  

      )
}

export default Update 