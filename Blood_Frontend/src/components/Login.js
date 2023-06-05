import React, { useEffect,useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './SignUp.css'

import { useForm } from 'react-hook-form';

import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const theme = createTheme();

const Login = () => {
  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()
  const [authenticated, setauthenticated] = useState(null)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem("authenticated");
    setauthenticated(loggedInUser)
},[])

  const handleLogin = (data) => {
    axios.post('http://localhost:6901/login',data).then((response)=>{
      console.log(response.data.user.isAdmin)
      localStorage.setItem("authenticated", true);
      localStorage.setItem("token",response.data.token)
      if(response.data.user.isAdmin){
        console.log("user is Admin")
        console.log("Authenticated:",authenticated)
        navigate("/adashboard")
      }
      else{
        navigate("/ddashboard");
      }
    })
    .catch(()=>{
      toast.error('Invalid Credentials');
      console.log("something went wrong")
      navigate("/login")
    })
  }
 
 if(!authenticated){ 
  
  return (
    <div className='logi'>
       
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" id='bo'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 16,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'error.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField className='TextField-error'
                margin="normal"
                required
                fullWidth
                id="user"
                label="Email"
                name="userEmail"
                autoComplete="user"
                autoFocus
                {...register("userEmail")}
              />
              <TextField className='TextField-error'
                margin="normal"
                required
                fullWidth
                name="userPassword"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register("userPassword")}
              />
          
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button className='button'
              type="submit"
              fullWidth
              variant="contained"
              color='error'
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit(handleLogin)}
            >
              Log In
            </Button>
            <Toaster/>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link to={'/SignUp'} id='loho'>
                <div id='lol'>   Not Our Visitor? </div> <div id='hol'> Sign Up </div>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  )}
}

export default Login