import IHttpOptions from "./IHttpOptions";
import * as Constants from '../constants'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

class HttpClient {
    private static instance: HttpClient;

    public static get getInstance(): HttpClient {
        return this.instance || (this.instance = new this())
    }

    public async get(url: string, options?: IHttpOptions) {
        const data = await this.makeRequest({ method: 'GET', url, options })

        return data;
    }

    public async post(url: string, body: any, options?: IHttpOptions) {
        const data = await this.makeRequest({ method: 'POST', url, body, options })

        return data;
    }

    public async put(url: string, body: any, options?: IHttpOptions) {
        const data = await this.makeRequest({ method: 'PUT', url, body, options })

        return data;
    }

    public async patch(url: string, body: any, options?: IHttpOptions) {
        const data = await this.makeRequest({ method: 'PATCH', url, body, options })

        return data;
    }

    public async delete(url: string, options?: IHttpOptions) {
        const data = await this.makeRequest({ method: 'DELETE', url, options })

        return data;
    }

    private async makeRequest(params: { method: HttpMethod, url: string, body?: any, options?: IHttpOptions }) {
        const {method, url, body, options} = params;

        const endpoint = Constants.BASE_URL + url;

        const init: any = {
            method: method,
            headers: {
                "Content-Type": 'application/json',
            },
        };

        if (options) {
            init.headers = options.headers
            init.headers["Content-Type"] = options.contentType
        }

        if (body) {
            init.body = JSON.stringify(body);
        }

        try {
            const response = await fetch(endpoint, init);

            return response.json();
        } catch (error) {
            throw error
        }
    }
}

export default HttpClient.getInstance;