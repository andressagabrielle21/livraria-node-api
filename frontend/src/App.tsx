import Navbar from './components/navbar';
import { Outlet } from "react-router-dom"
import Button from "./components/button";

const App = () => {

  return (
    <div className="bg-[#0F141E] min-h-[100vh] flex text-white px-6 py-10">
      <Navbar />

      <Outlet />

      <div className="fixed right-10 bottom-10">
        <Button />
      </div>

    </div>
  )
}

export default App
