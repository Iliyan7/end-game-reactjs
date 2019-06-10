interface IHttpOptions {
  headers?: {
    [header: string]: string | string[];
  }
  params?: {
    [header: string]: string | string[];
  }
  contentType?: string,
}

export default IHttpOptions