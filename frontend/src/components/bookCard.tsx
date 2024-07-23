interface IBookCard {
  image: string,
  title: string,
  author: string
}

const BookCard = ({image, title, author}: IBookCard) => {
  return (
    <div className="flex flex-col rounded-lg">
      <img src={image} alt={title} className="w-[200px] h-[250] rounded-lg"/>

      <div className="">
        <h1>{title}</h1>

        <span>{author}</span>
      </div>

    </div>
  )
}

export default BookCard