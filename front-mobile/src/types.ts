export type Order = {
  id: number,
  address: string,
  latitude: number,
  longitude: number,
  moment: string,
  products: Product[]
  status: string
  total: number
}

export type Product = {
  id: number,
  description: string,
  imageUri: string,
  name: string,
  price: number,
}