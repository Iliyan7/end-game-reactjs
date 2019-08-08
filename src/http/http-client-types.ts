export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type HttpOptions = {
  headers?: {
    [header: string]: string
  }
  params?: {
    [header: string]: string
  }
  withCredentials?: boolean
}