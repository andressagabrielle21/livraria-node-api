import { ListBook } from "../types/interfaces"

interface IAuthor {
  data: ListBook[] | undefined
}

const ListAuthors = ({data} : IAuthor) => {
  return (
  <div className="px-10">
    <h1 className="font-cursive text-yellow-200 text-5xl font-bold mb-10">Autores</h1>

    <div className="flex flex-wrap items-center justify-center gap-5">
        {data?.map((item, key) => (
          <div key={key}>
            {item.autor?.nome}
            <img src={item.autor?.authorImage} alt={item.autor?.nome} />
            {item.autor?.nacionalidade}
          </div>
        ))}
      </div>

  </div>
  )
}

export default ListAuthors