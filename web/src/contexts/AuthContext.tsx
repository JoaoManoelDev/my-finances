import { createContext, ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/axios'

interface IfetchSignUp {
  email: string
  password: string
  passwordConfirm: string
  name: string
}

interface IfetchSignIn {
  email: string
  password: string
}

interface IAuthContext {
  loading: boolean
  user: {}

  fetchSignUp: ({
    email,
    name,
    password,
    passwordConfirm,
  }: IfetchSignUp) => Promise<void>

  fetchSignIn: ({ email, password }: IfetchSignIn) => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as IAuthContext)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  async function fetchSignUp({
    email,
    password,
    passwordConfirm,
    name,
  }: IfetchSignUp) {
    await api.post('users/signup', {
      email,
      password,
      passwordConfirm,
      name,
    })
  }

  async function fetchSignIn({ email, password }: IfetchSignIn) {
    const response = await api.post('auth', {
      email,
      password,
    })

    console.log(response)

    if (response.status === 200) {
      const { token, user } = response.data

      const loggedUser = {
        id: user.id,
        email: user.email,
      }

      localStorage.setItem('user', JSON.stringify(loggedUser))
      localStorage.setItem('token', token)

      setUser(loggedUser)
      navigate('/')
    }
  }

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user')

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser))
    }

    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{ fetchSignUp, fetchSignIn, user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
