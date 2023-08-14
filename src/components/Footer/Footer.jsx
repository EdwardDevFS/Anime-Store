import { Link } from "react-router-dom";
import "./Footer.scss"
import { Box, Heading,Button } from '@chakra-ui/react'
function Footer(){
    return (
        <footer>
            <Box className="Footer_content">
                <div className="d-flex flex-column gap-2">
                    <h4 className="footer-text"><span>ANIME LEVELS</span> STORE</h4>
                    <h5>Developed by Edward Josue</h5>
                </div>                
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