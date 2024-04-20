import { Outlet } from "react-router"
import MainLayout from "./Layouts/MainLayout/MainLayout"

function App() {


  return (
    /* I create a MainLayout & i wrap the react-router dom outlet with it you can find this
     MainLayout file in layout folder */

    <MainLayout>
      <Outlet/>
    </MainLayout>
  )
}

export default App
