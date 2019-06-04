type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

interface IHttpOptions {
    contentType: string,
    body?: string
}

class Ajax {
    private static instance: Ajax;
    private readonly baseURL = "https://localhost:5001/api/";

    public static get getInstance(): Ajax {
        return this.instance || (this.instance = new this())
    }

    public async get(path: string, httpOptions?: IHttpOptions) {
        const data = await this.makeRequest('GET', path, httpOptions)

        return data;
    }

    public async post(path: string, httpOptions?: IHttpOptions) {
        const data = await this.makeRequest('POST', path, httpOptions)

        return data;
    }

    public put(path: string, httpOptions?: IHttpOptions) {

    }

    public patch(path: string, httpOptions?: IHttpOptions) {

    }

    public delete(path: string, httpOptions?: IHttpOptions) {

    }

    private async makeRequest(httpMethod: HttpMethod, httpPath: string, httpOptions?: IHttpOptions) {
        const url = this.baseURL + httpPath;

        let params = {
            method: httpMethod,
            headers: {
                "Content-Type": httpOptions!.contentType || 'application/json'
            },
        };

        try {
            const response = await fetch(url, params);
            return response.json();
        } catch (error) {
            return error;
        }
    }
}

export default Ajax.getInstance;