import { useEffect, useState } from "react"
import axios from "axios";

const App = () => {
  const [data, setData] = useState();

  const getData = async () => {
    const response = await axios.get("http://localhost:3000/livros");
    setData(response.data)
  }

  useEffect(() => {
    getData();
  }, [])

  console.log(data)

  return (
    <div>
      <h1 className="text-3xl">Data from Backend:</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  )
}

export default App
