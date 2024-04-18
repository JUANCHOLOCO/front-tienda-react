import { Box } from "@mui/material"
import ToButton from "../components/ToButton"
import ToCard from "../components/ToCard"
import ToNavBar from "../components/ToNavBar"
import { useEffect } from "react"

const Home = () => {

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>console.log(json))
    }, [])
    
  return (
    <>
        <ToNavBar/>
        <Box sx={{
            marginTop: 5,
            display: 'flex',
            gap: 2,
        }}>
        <ToCard/>
        </Box>
        
    </>
    
  )
}

export default Home
