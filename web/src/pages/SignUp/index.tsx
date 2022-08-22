import { LinkSignIn, SignUpContainer, SignUpFormContainer } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { SignIn } from 'phosphor-react'
import { AuthContext } from '../../contexts/Auth'

const searchFormSchema = z.object({
  email: z.string(),
  password: z.string(),
  passwordConfirm: z.string(),
  name: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SignUp() {
  const { fetchSignUp } = useContext(AuthContext)

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSignUpUser(data: SearchFormInputs) {
    const { email, password, passwordConfirm, name } = data
    await fetchSignUp({ email, password, passwordConfirm, name })
  }

  return (
    <SignUpContainer>
      <SignUpFormContainer onSubmit={handleSubmit(handleSignUpUser)}>
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
          <NavLink to="/">
            <SignIn size={14} />
            <span>Entrar</span>
          </NavLink>
        </LinkSignIn>
      </SignUpFormContainer>
    </SignUpContainer>
  )
}
