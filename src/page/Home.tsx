import { Box, Container, Grid } from "@mui/material"
import ToCard from "../components/ToCard"
import ToNavBar from "../components/ToNavBar"
import useApi from "./hook/useApi"
import { Product } from "../types/Product"

interface Props {
  id?: number
  url: string
}

const Home = () => {

 const {data, loading} = useApi('https://fakestoreapi.com/products')
  return (
    <>
        <ToNavBar/>
        <Container maxWidth="lg">
        <Box sx={{
              marginTop: 5,
              display: 'flex',
              gap: 2,
          }}>
            {loading ? (
              <p>Loading.....</p>

            ) :
        (<Grid container spacing={2}>
          {data.map(
            (item: Product) => (
              <Grid item key={item.id} xs={12} sm={6} md={4} lg={3} > 
                <ToCard item = {item} />
              </Grid>
            )
          )}
            </Grid>
        )}
          </Box>
        </Container>
        
        
    </>
    
  )
}

export default Home
