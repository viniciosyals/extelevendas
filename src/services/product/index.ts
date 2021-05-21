import { AxiosInstance } from 'axios'
import { api } from '../api'
import { productUrl } from '../../config'

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
    api: AxiosInstance = api

    find() {
        return this.api.get<Product[]>(productUrl)
    }

    create(model: Product) {
        return this.api.post<Product>(productUrl, model)
    }

    findById(id: number) {
        return this.api.get<Product>(`${productUrl}/${id}`)
    }

    delete(id: number) {
        return this.api.delete<Product>(`${productUrl}/${id}`)
    }

    update(id: number, model: Product) {
        return this.api.put<Product>(`${productUrl}/${id}`, model)
    }
}

export default ProductService
