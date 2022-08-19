import { Route, Routes } from 'react-router-dom'
import { Transactions } from './pages/Transactions'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Transactions />} />
    </Routes>
  )
}
