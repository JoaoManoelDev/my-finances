import { Route, Routes } from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { Transactions } from './pages/Transactions'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Transactions />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}
