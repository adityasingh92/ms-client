// local imports
import authInstance from '../URLs/auth.http'
import { LOGIN_URL, SIGNUP_URL } from '../URLs/auth.url'

export const loginApi = (payload: {email: string, password: string}) => authInstance.post(LOGIN_URL, payload)

export const signUpApi = (payload: {username:string, email:string, password:string}) => authInstance.post(SIGNUP_URL, payload)
