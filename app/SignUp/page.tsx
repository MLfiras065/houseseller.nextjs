"use client"

import React, { useState ,useEffect} from 'react'
import axios from "axios"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Admin from '../Admin/page';
import AllProduct from '../AllProduct/page';

const SignUp=()=>{
  
  const [image,setImage]=useState('')
  const[firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState('')
  const [email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[role,setRole]=useState("")
 
const [up,setUp]=useState(false)

const getEmail=()=>{
  axios.get(`http://localhost:3001/api/user/get/${email}`).then((response)=>{
    setRole(response.data)
    localStorage.setItem("token",response.data.token)
    console.log("token",response.data.token);
   
  }).catch((err)=>console.log(err)
  )
  
}


  const signUp=()=>{
    axios.post('http://localhost:3001/api/user/rejister',{
      image:image,
    firstName:firstName,
    lastName: lastName,
    email: email,
    password: password,
    role:role

  }).then((response)=>{
      setUp(response.data)
      
    }).catch((err)=>console.log(err))
  }
  const handlSign=()=>{
    signUp()
  }

  return (
    <div>
      
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
           
                  <TextField
                margin="normal"
                required
                fullWidth
                id="firstname"
                label="first name"
                name="name"
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                autoComplete="name"
                autoFocus
              />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastname"
                label="last name"
                name="last name"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                autoComplete="name"
                autoFocus
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="name"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                autoComplete="name"
                autoFocus
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                id="password"
                autoComplete="current-password"
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="role"
                label="role"
                name="name"
                value={role}
                onChange={(e)=>setRole(e.target.value)}
                autoComplete="name"
                autoFocus
              />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Link   href="/ SignIn"></Link>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={()=>handlSign()}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/SignIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
        </div>
  )
}

export default SignUp