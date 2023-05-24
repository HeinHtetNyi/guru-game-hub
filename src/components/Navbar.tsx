import { HStack, Image } from "@chakra-ui/react";
import logo from '../assets/logo.png'
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {

    return (  
        <HStack p={2} spacing={5} justifyContent={'space-between'}>
            <Image src={logo} boxSize="50px" />
            <ColorModeSwitch />
        </HStack>
    );
}
 
export default Navbar;