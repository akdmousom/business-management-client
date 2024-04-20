import { Outlet } from "react-router";

const DashBoard = () => {
    return (
        <div>
            <h1>DashBoard</h1>
            <Outlet/>
        </div>
    );
};

export default DashBoard;