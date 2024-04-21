/*
Here i create an interface for specify the type of the property children. You have to read the typeScript 
documentation otherwise you can't understand whats going on here !!!
*/

import { Button } from "@mui/material";

interface children {
    children: React.ReactNode,
    
}

const MainLayout = (props:children)=>  {
    return (
        <div>
            <h1>Reat With TypeScript</h1>
            <Button variant="contained">Contained</Button>
            {props.children}
        </div>
    );
};

export default MainLayout;