interface IAuthorCard {
  id: string,
  image: string,
  name: string,
}

const AuthorCard = ({image, name, id} : IAuthorCard) => {
  return (
    <div className="max-w-[300px] font-poppins flex flex-col rounded-lg ">
      <a href={id}></a>
      <img src={image} alt={name} className="w-[200px] h-[200px] transition ease-in-out delay-150 hover:scale-105 hover:-translate-y-1 duration-300 rounded-[100%] hover:border-2 hover:border-white hover:border-solid"/>

      <div className="mt-4">
        <h1 className="text-xl text-yellow-100 font-semibold">{name}</h1>

        {/* <span>{name || "qualquer coisa"}</span> */}
      </div>

    </div>
  )
}

export default AuthorCard