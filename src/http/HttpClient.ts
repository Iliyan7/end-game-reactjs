import IHttpOptions from "./IHttpOptions";
import * as Constants from '../constants'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

class HttpClient {
    private static instance: HttpClient;

    public static get getInstance(): HttpClient {
        return this.instance || (this.instance = new this())
    }

    public async get(url: string, options?: IHttpOptions) {
        const data = await this.makeRequest('GET', url, options)

        return data;
    }

    public async post(url: string, body:any, options?: IHttpOptions) {
        const data = await this.makeRequest('POST', url, body, options)

        return data;
    }

    public put(url: string, body: any, options?: IHttpOptions) {

    }

    public patch(url: string, body: any, options?: IHttpOptions) {

    }

    public delete(url: string, body: any, options?: IHttpOptions) {

    }

    private async makeRequest(httpMethod: HttpMethod, url: string, body: any, options?: IHttpOptions) {
        const endpoint = Constants.BASE_URL + url;

        const init = {
            method: httpMethod,
            headers: {
                "Content-Type": options!.contentType || 'application/json',
                ...options!.headers
            },
        };

        try {
            const response = await fetch(endpoint, init);
            return response.json();
        } catch (error) {
            return error;
        }
    }
}

export default HttpClient.getInstance;