import { Outlet } from "react-router"
import MainLayout from "./Layouts/MainLayout/MainLayout"

function App() {


  return (
    <MainLayout>
      <Outlet/>
    </MainLayout>
  )
}

export default App
