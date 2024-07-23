import BookCard from "../components/bookCard"
import { ListBook } from "../types/interfaces"

interface IListBooks {
  data: ListBook[] | undefined
}

const ListBooks = ({data} : IListBooks) => {
  return (
    <div className="px-10">
      <h1 className="font-cursive text-yellow-200 text-5xl font-bold mb-10">Sua biblioteca</h1>

      <div className="flex flex-wrap items-center justify-center gap-5">
        {data?.map((item, key) => (
          <div key={key}>
            <BookCard image={item.bookImage} title={item.titulo} author={item.autor.nome}/>
          </div>
        ))}
      </div>

    </div>
  )
}

export default ListBooks