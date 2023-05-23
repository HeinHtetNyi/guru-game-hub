import { FunctionComponent } from "react";
import { Grid, GridItem, Show } from '@chakra-ui/react'

interface LayoutProps {
    
}
 
const Layout: FunctionComponent<LayoutProps> = () => {
    return (  
        <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "sidebar main"`
          }}
            gap={1}
        >
            <GridItem area={'nav'} bg="yellow.300">
                Nav
            </GridItem>
            <Show above="lg">
                <GridItem area={'sidebar'} bg="green.300">
                    Sidebar
                </GridItem>
            </Show>
            <GridItem area={'main'} bg="orange.300">
                Main
            </GridItem>
        </Grid>
    );
}
 
export default Layout;