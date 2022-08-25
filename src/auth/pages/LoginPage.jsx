import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';


export const LoginPage = () => {

  const navigate = useNavigate();

  const onSingIn = ( ) =>{
    navigate('/home', {
      replace: true
    })
    console.log(navigate);
  }
  return (
    <AuthLayout title="Login">
      <form>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Alias" 
                type="alias" 
                placeholder='Alias...' 
                fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña...' 
                fullWidth
              />
            </Grid>
            
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              
                <Button 
                variant='contained' 
                fullWidth
                onClick={onSingIn}
                >
                  Ingresar
                </Button>
              
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}
