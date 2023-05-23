import { HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/logo.png'

const Navbar = () => {
    return (  
        <HStack p={2} spacing={5}>
            <Image src={logo} boxSize="50px" />
            <Text>Navbar</Text>
        </HStack>
    );
}
 
export default Navbar;