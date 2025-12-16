import { useState } from 'react'
import Login from './components/Login.jsx'
import UserHome from './pages/user/UserHome.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
        <UserHome/>
  )
}

export default App
