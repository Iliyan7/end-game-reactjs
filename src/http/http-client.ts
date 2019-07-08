
import * as Constants from '../constants'
import { HttpMethod, HttpOptions } from './http-client-types'

class HttpClient {
    private static instance: HttpClient

    static get getInstance(): HttpClient {
        return this.instance || (this.instance = new this())
    }

    async get(url: string, options?: HttpOptions) {
        const data = await this.makeRequest({ method: 'GET', url, options })

        return data
    }

    async post(url: string, body: any, options?: HttpOptions) {
        const data = await this.makeRequest({ method: 'POST', url, body, options })

        return data
    }

    async put(url: string, body: any, options?: HttpOptions) {
        const data = await this.makeRequest({ method: 'PUT', url, body, options })

        return data
    }

    async patch(url: string, body: any, options?: HttpOptions) {
        const data = await this.makeRequest({ method: 'PATCH', url, body, options })

        return data
    }

    async delete(url: string, options?: HttpOptions) {
        const data = await this.makeRequest({ method: 'DELETE', url, options })

        return data
    }

    async makeRequest(params: { method: HttpMethod, url: string, body?: any, options?: HttpOptions }) {
        const {method, url, body, options} = params

        const endpoint = Constants.BASE_URL + url

        const init: any = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
        }

        if (options) {
            init.headers = options.headers
            init.headers['Content-Type'] = options.contentType
        }

        if (body) {
            init.body = JSON.stringify(body)
        }

        try {
            const response = await fetch(endpoint, init)

            return response.json()
        } catch (error) {
            throw error
        }
    }
}

export default HttpClient.getInstance
