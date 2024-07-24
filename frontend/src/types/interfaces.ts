export interface ListBook {
  id: string,
  titulo: string,
  bookImage: string,
  autor: {
      nome: string,
      authorImage: string,
      nacionalidade: string,
  },
  editora: string,
  paginas: number
}