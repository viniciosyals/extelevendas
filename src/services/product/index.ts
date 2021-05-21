import { api } from './../api'
import { productUrl } from './../../config'

interface Product {
    id: number
    category: string
    description: string
    image: string
    price: number
    title: string
    amount: number
}

class ProductService {
    async find() {
        return await api.get<Product[]>(productUrl)
    }

    async create() {
        // not implemented
    }

    async findById() {
        // not implemented
    }

    async delete() {
        // not implemented
    }

    async update() {
        // not implemented
    }
}

export default ProductService