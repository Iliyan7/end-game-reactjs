export interface LoginModel {
  email: string
  password: string
}

export interface RegisterModel {
  firstName: string
  lastName: string
  email: string
  password: string
  retypePassword: string
}

export interface SubscribeModel {
  email: string
}

export interface TokenModel {
  id: number
  firstName: string
  lastName: string
  email: string
  roles: string[]
}