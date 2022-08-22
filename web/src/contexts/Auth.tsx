import { createContext, ReactNode } from 'react'
import { api } from '../lib/axios'

interface IfetchSignUp {
  email: string
  password: string
  passwordConfirm: string
  name: string
}

interface IAuthContext {
  fetchSignUp: ({
    email,
    name,
    password,
    passwordConfirm,
  }: IfetchSignUp) => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as IAuthContext)

export function AuthProvider({ children }: AuthProviderProps) {
  async function fetchSignUp({
    email,
    password,
    passwordConfirm,
    name,
  }: IfetchSignUp) {
    const response = await api.post('users/signup', {
      email,
      password,
      passwordConfirm,
      name,
    })

    console.log(response)
  }

  return (
    <AuthContext.Provider value={{ fetchSignUp }}>
      {children}
    </AuthContext.Provider>
  )
}
