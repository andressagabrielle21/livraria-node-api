import { useEffect, useState } from "react"
import axios from "axios";
import Navbar from './components/navbar';
import ListBooks from "./pages/listBooks";
import Button from "./components/button";

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>();

  const getData = async () => {
    const response = await axios.get("http://localhost:3000/livros");
    setData(response.data)
  }

  useEffect(() => {
    getData();
  }, [])

  console.log(data?.map(item => item.titulo))

  return (
    <div className="bg-[#0F141E] flex text-white px-6 py-10">
      <Navbar />

      <ListBooks data={data}/>

      <Button />

    </div>
  )
}

export default App
