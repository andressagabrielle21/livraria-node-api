import axios from "axios";
// import { ListBook } from "../types/interfaces"
import AuthorCard from './../components/authorCard';
import { useEffect, useState } from "react";

// interface IAuthor {
//   data: ListBook[] | undefined
// }

const ListAuthors = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>();
  
  const getData = async () => {
    const response = await axios.get("http://localhost:3000/autores");
    setData(response.data)
  }
  
  useEffect(() => {
    getData();
  }, []) 

  // console.log(data?.map(item => item.nome))

  return (
  <div className="px-10">
    <h1 className="font-cursive text-yellow-200 text-5xl font-bold mb-10">Autores</h1>

    <div className="flex flex-wrap items-center justify-start gap-5">
        {data?.map((item, key) => (
          <div key={key}>
            <AuthorCard name={item?.nome} image={item?.authorImage} id={item?._id}/>
          </div>
        ))}
      </div>

  </div>
  )
}

export default ListAuthors