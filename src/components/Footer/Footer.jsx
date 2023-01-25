import { Link } from "react-router-dom";
import "./Footer.scss"
import { Box, Heading,Button } from '@chakra-ui/react'
function Footer(){
    return (
        <footer>
            <Box className="Footer_content">
                <Box>
                    <Heading>E<span>J</span> Anime<span> Store</span></Heading>
                    <Heading className="mt-1" as='h4' size='md'>
                        Creado por Edward Josue Mamani M. 
                    </Heading>
                </Box>
                <Box className="Icons">
                    <Link to=""><Button colorScheme='linkedin'>Linkedin</Button></Link>
                    <Link to=""><Button colorScheme='facebook'>Facebook</Button></Link>
                    <Link to=""><Button colorScheme='twitter'>Twitter</Button></Link>
                    <Link to=""><Button colorScheme='whatsapp'>Whatsapp</Button></Link>
                    
                </Box>
            </Box>   
        </footer>
    )
}
export default Footer;