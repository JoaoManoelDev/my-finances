import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { LinkSignUp, SignInContainer, SignInFormContainer } from './styles'
import { PencilSimple } from 'phosphor-react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

const signInFormSchema = z.object({
  email: z.string(),
  password: z.string(),
})

type SignInFormInputs = z.infer<typeof signInFormSchema>

export function SignIn() {
  const { fetchSignIn } = useContext(AuthContext)

  const { register, handleSubmit, reset } = useForm<SignInFormInputs>({
    resolver: zodResolver(signInFormSchema),
  })

  async function handleSignInSubmit(data: SignInFormInputs) {
    const { email, password } = data
    await fetchSignIn({ email, password })
    reset()
  }

  return (
    <SignInContainer>
      <SignInFormContainer onSubmit={handleSubmit(handleSignInSubmit)}>
        <h1>Entrar</h1>

        <input
          type="text"
          id="password"
          placeholder="Email"
          {...register('email')}
        />

        <input type="password" placeholder="Senha" {...register('password')} />

        <button type="submit">Enviar</button>

        <LinkSignUp>
          <span>Ainda não possui uma conta?</span>
          <NavLink to="/signup">
            <PencilSimple size={14} />
            <span>Cadastrar</span>
          </NavLink>
        </LinkSignUp>
      </SignInFormContainer>
    </SignInContainer>
  )
}
