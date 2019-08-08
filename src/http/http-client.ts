
import * as Constants from '../constants'
import localStorageManager from '../utils/local-storage'
import { HttpMethod, HttpOptions } from './http-client-types'

class HttpClient {
    private static instance: HttpClient

    static get getInstance(): HttpClient {
        return this.instance || (this.instance = new this())
    }

    async get(url: string, options?: HttpOptions): Promise<any> {
        const data = await this.makeRequest('GET', url, null, options)

        return data
    }

    async post(url: string, body: any, options?: HttpOptions): Promise<any> {
        const data = await this.makeRequest('POST', url, body, options)

        return data
    }

    async put(url: string, body: any, options?: HttpOptions): Promise<any> {
        const data = await this.makeRequest('PUT', url, body, options)

        return data
    }

    async patch(url: string, body: any, options?: HttpOptions): Promise<any> {
        const data = await this.makeRequest('PATCH', url, body, options)

        return data
    }

    async delete(url: string, options?: HttpOptions): Promise<any> {
        const data = await this.makeRequest('DELETE', url, null, options)

        return data
    }

    async makeRequest(method: HttpMethod, url: string, body: any | null, options?: HttpOptions): Promise<any> {
        let endpoint = Constants.BASE_URL + url

        const requestData: any = { method, headers: { 'Content-Type': 'application/json' } }

        if (options) {
            if (options.withCredentials) {
                const accessToken = localStorageManager.getAccessToken()
                if (accessToken) {
                    requestData.headers['Authorization'] = `Bearer ${accessToken}`

                }
            }

            requestData.headers = { ...requestData.headers, ...options.headers }

            endpoint = this.appendParams(endpoint, options.params)
        }

        if (body) {
            requestData.body = JSON.stringify(body)
        }

        try {
            const response = await fetch(endpoint, requestData)

            return response.json()
        } catch (error) {
            throw error
        }
    }

    private appendParams(url: string, queryParams: any): string {
        let endpoint = url
        let paramsCount = 0

        for (const key in queryParams) {
            if (queryParams.hasOwnProperty(key)) {
                const value = queryParams[key]

                if (paramsCount++ < 1) {
                    endpoint += `?${key}=${value}`
                } else {
                    endpoint += `&${key}=${value}`
                }
            }
        }

        return endpoint
    }
}

export default HttpClient.getInstance
