import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'
import { ProtectedRoute, AnonymousRoute } from './components/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/dashboard" />} />
        <Route path='/signup' element={
          <AnonymousRoute>
            <Signup />
          </AnonymousRoute>
        } />
        <Route path='/signin' element={
          <AnonymousRoute>
            <Signin />
          </AnonymousRoute>
        } />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path='/send' element={
          <ProtectedRoute>
            <SendMoney />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
