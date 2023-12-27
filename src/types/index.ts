export type ICategory = {
  id: number
  title: string
  text_color: string
  background_color: string
}

export type IBlog = {
  id: number
  title: string
  description: string
  image: string
  publish_date: string
  categories: ICategory[]
  author: string
  email?: string
}
