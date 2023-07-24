"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Update from "./Update";
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
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const AllProduct = () => {
  const router = useRouter();
  const token =JSON.parse(localStorage.getItem("token"))
  const userRole = token?.role;
  const [favorites, setFavorites] = useState([])
  const [data, setData] = useState([]);
  const [item, setItem] = useState(null);
  const [open, setOpen] = useState(false);
  const[image,setImage]=useState('')
  const [expanded, setExpanded] =useState(false);
  const [location, setLocation] = useState("");
  const [numbOfrooms, setNumbOfrooms] = useState("");
  const [numbOfBathroom, setNumbOfBathroom] = useState("");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState("");
  const [update, setUpdate] = useState(false);

  const fetch = () => {
    axios
      .get("http://localhost:3001/api/user/get")
      .then((response?) => {
        console.log("hi", response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const upHome = (id: number) => {
    axios
      .put(`http://localhost:3001/api/user/up/${id}`, {
        id,
        location: location,
        numbOfrooms: numbOfrooms,
        numbOfBathroom: numbOfBathroom,
        area: area,
        price: price,
      })
      .then(() => setOpen(!update))
      .catch((err) => console.log(err));
  };
  const handlUp = (id:any) => {
    upHome(id);
   
  };
  const deleteHome = (id:any) => {
    axios
      .delete(`http://localhost:3001/api/user/del/${id}`)
      .then(() => setUpdate(!update))
      .catch((err) => console.log(err));
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    setImage(file);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "product");
    
    try {
      const response = await axios.post(
      
        "https://api.cloudinary.com/v1_1/dzonlv8oi/image/upload",

        formData
      );

      console.log("Image uploaded successfully:", response.data);
      setImage(response.data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  
  useEffect(() => {
    fetch();
  }, []);
  return (
 
    
    <div >
      <Card sx={{ maxWidth: 345 }} >
      {data.map((el, index) => (
        <div className="div" key={el.id} >
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
        title={el.location}
        subheader="September 03, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        image={el.image}
        alt="Paella dish"
      />
      <CardContent>
      
      </CardContent>
      <CardActions disableSpacing>
  
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
          <Button onClick={handleClickOpen}>Edit</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Home</DialogTitle>
        <DialogContent>
          <div>
           
          </div>
          <div>
          <label  className="form-label"> Image</label>
            <input type="file" className="form-control" name="UrunImage" id="UrunImage"
            onChange={handleImageUpload}/>
          </div>
          <div>
            location:
            <br />
            <input type="text" placeholder="location" value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div>
            Rooms:
            <br />
            <input
              type="text"
              placeholder="numbOfrooms"
              value={numbOfrooms}
              onChange={(e) => setNumbOfrooms(e.target.value)}
            />
          </div>
          <div>
            Bathroom:
            <br />
            <input
              type="text"
              placeholder="numbOfBathroom"
              value={numbOfBathroom}
              onChange={(e) => setNumbOfBathroom(e.target.value)}
            />
          </div>
          <div>
            Area:
            <br />
            <input type="text" placeholder="area" value={area} onChange={(e) => setArea(e.target.value)} />
          </div>
          <div>
            price:
            <br />
            <input type="text" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handlUp(el.id)}>Update</Button>
          
        </DialogActions>
      </Dialog>
      <button onClick={() => deleteHome(el.id)}>delete</button>
          
        </div>
      ))}
      </Card>
        {item&& <Update el={data.find((item) => item.id === item)} />}
    </div>

   
  );
};

export default AllProduct;
