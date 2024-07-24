interface IBookCard {
  image: string,
  title: string,
  author?: string
}

const BookCard = ({image, title, author}: IBookCard) => {
  return (
    <div className="max-w-[200px] font-poppins flex flex-col rounded-lg transition ease-in-out delay-150 hover:scale-105 hover:-translate-y-1 duration-300">
      <a href=""></a>
      <img src={image} alt={title} className="w-[200px] h-[250]  rounded-lg hover:border-2 hover:border-white hover:border-solid"/>

      <div className="mt-4">
        <h1 className="text-xl text-yellow-100 font-semibold">{title}</h1>

        <span>{author || "qualquer coisa"}</span>
      </div>

    </div>
  )
}

export default BookCard