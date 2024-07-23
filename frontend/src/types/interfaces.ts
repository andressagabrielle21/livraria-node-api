export interface ListBook {
  titulo: string,
  bookImage: string,
  autor: {
      nome: string,
  },
  editora: string,
  paginas: number
}