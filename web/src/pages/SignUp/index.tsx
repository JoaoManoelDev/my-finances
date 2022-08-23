import { LinkSignIn, SignUpContainer, SignUpFormContainer } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { SignIn } from 'phosphor-react'
import { AuthContext } from '../../contexts/AuthContext'

const signUpFormSchema = z.object({
  email: z.string(),
  password: z.string(),
  passwordConfirm: z.string(),
  name: z.string(),
})

type SignUpFormInputs = z.infer<typeof signUpFormSchema>

export function SignUp() {
  const { fetchSignUp } = useContext(AuthContext)

  const { register, handleSubmit, reset } = useForm<SignUpFormInputs>({
    resolver: zodResolver(signUpFormSchema),
  })

  async function handleSignUpSubmit(data: SignUpFormInputs) {
    const { email, password, passwordConfirm, name } = data
    await fetchSignUp({ email, password, passwordConfirm, name })
    reset()
  }

  return (
    <SignUpContainer>
      <SignUpFormContainer onSubmit={handleSubmit(handleSignUpSubmit)}>
        <h1>Inscreva-se</h1>

        <input type="text" placeholder="Nome" {...register('name')} />

        <input
          type="text"
          id="password"
          placeholder="Email"
          {...register('email')}
        />

        <input type="password" placeholder="Senha" {...register('password')} />

        <input
          type="password"
          placeholder="Confirme sua senha"
          {...register('passwordConfirm')}
        />

        <button type="submit">Enviar</button>

        <LinkSignIn>
          <span>Já possui um conta?</span>
          <NavLink to="/signin">
            <SignIn size={14} />
            <span>Entrar</span>
          </NavLink>
        </LinkSignIn>
      </SignUpFormContainer>
    </SignUpContainer>
  )
}
