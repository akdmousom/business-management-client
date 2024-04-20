interface children {
    children: React.ReactNode
}

const MainLayout = (props:children)=>  {
    return (
        <div>
            <h1>Reat With TypeScript</h1>
            {props.children}
        </div>
    );
};

export default MainLayout;