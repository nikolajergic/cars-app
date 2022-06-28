import axios from 'axios';

class CarsServices{
    constructor() {
        this.httpClient = axios.create({
            baseURL: 'http://localhost:3000'
        })
    }

    async getAll() {
        try {
            const {data} = await this.httpClient.get(`/api/cars`)

            return data;
        } catch (error) {
            return []
        }
    }
}

export default new CarsServices();