export interface ListBook {
  id: string,
  titulo: string,
  bookImage: string,
  autor: {
      _id: string,
      nome: string,
      authorImage: string,
      nacionalidade: string,
  },
  editora: string,
  paginas: number
}