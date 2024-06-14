import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import logo from '/logo.png';
import FormLogin from './FormLogin';

export default function ContainerLogin() {
  return (

    <Box 
    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    height={'100vh'}
                    mx={{ xs: 2, sm: 0 }}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
        sx={{
          height: 150,
        }}
                 
          component="img"
          image={logo}
          alt="login"
          title="login"
          style={{
            width: "50",
            height: "50",
            objectFit: "contain",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Inicio de sesion
          </Typography>
          <FormLogin/>
          

        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    
  );
}