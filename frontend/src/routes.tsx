import { BrowserRouter, Routes, Route } from "react-router-dom"
import ListBooks from "./pages/listBooks"
import App from "./App"
import BookDetail from "./pages/bookDetail"
import { useEffect, useState } from "react"
import axios from "axios"
import ListAuthors from "./pages/listAuthors"

const Router = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>();

  const getData = async () => {
    const response = await axios.get("http://localhost:3000/livros");
    setData(response.data)
  }

  useEffect(() => {
    getData();
  }, []) 
  // console.log(data?.map(item => item.titulo))
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> 
          <Route index element={<ListBooks data={data}/>}/>
          <Route path="/authors" element={<ListAuthors/>}/>
          <Route path="/book/:id" element={<BookDetail />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router