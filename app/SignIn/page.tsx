"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";



const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false)

  const handleRole = (user:any) => {
console.log("user",user);

    if(user.role==='Customer') {
    return    router.push('/AllProduct');
   }
    else if(user.role==="User")
  {   return   router.push('/AddProduct') }

   else if   (user.role==='Admin')
    { return    router.push('/Admin'); }
    else if(!user.role ) {
      return {
        redirect: {
          destination: '/SignUp',
          permanent: false,
        }
      }
    }
  }

  const login = () => {
    axios
      .post("http://localhost:3001/api/user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("login", response.data.decode);

        localStorage.setItem("token", JSON.stringify(response.data.decode));
        console.log("token", response.data.decode);
console.log("response",response);

        handleRole({role:response.data.decode.role}) 
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlLogin = () => {
    login();
  };
const logout =()=>{
  localStorage.removeItem("token")
  setAuth(false)
  router.push("/SignIn")
}
  return (
    <div>
      <Grid container component="main" sx={{ height: "90vh" }}>
        <CssBaseline  />
        <Grid
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'transparent' }}>
              
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handlLogin}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                 
                </Grid>
                <Grid item>
                  <Link href="/SignUp" >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
             
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
