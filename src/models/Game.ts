class Pratos {
  id: number
  category: string
  description: string
  title: string
  system: string
  infos: string[]
  image: string
  imageN: string

  constructor(
    category: string,
    description: string,
    image: string,
    imageN: string,
    system: string,
    title: string,
    infos: [string, string],
    id: number
  ) {
    this.category = category
    this.description = description
    this.image = image
    this.imageN = imageN
    this.system = system
    this.title = title
    this.infos = infos
    this.id = id
  }
}

export default Pratos
