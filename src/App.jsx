import './App.css'
import { Link, Outlet, useNavigate } from 'react-router'
import { createContext, useEffect, useState } from 'react'

export let usersStorage = createContext()
export let operatorStorage = createContext()
export let currentStorage = createContext()

function App() {
  let savedUsers
  let [users, setUsers] = useState(() => {
    savedUsers = localStorage.getItem('users')
    return savedUsers ? JSON.parse(savedUsers) : [{ email: "user@example.com", password: "user123" }]
  })
  let operatorUser = { email: "operator@example.com", password: "operator123" }
  let [currentUser, setCurrentUser] = useState(() => {
    let savedState = localStorage.getItem('currentUser')
    return savedState ? JSON.parse(savedState) : null
  })
  let navigate = useNavigate()

  let headerButton = (
    currentUser ? (
      <div className="account-logo">
        <Link to={currentUser.email === "operator@example.com" ? "/admin/requests" : "/requests"} className="account-text">{currentUser.email}</Link>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="acc-logo" width="40" height="40"></img>
      </div>
    ) : (
      <Link to="/login" className="Header-button">Увійти</Link>
    )
  )
  let footerButton = (
    currentUser ? (
      <button onClick={() => {localStorage.removeItem('currentUser'), navigate("/"), setCurrentUser(null)}} className='Footer-button'> Вийти з акаунту </button>
    ) : (
      <div></div>
    )
  )
  
  const y = 0
  useEffect(() => {
    savedUsers = localStorage.getItem('users')
    if (savedUsers == null) {
      localStorage.setItem('users', JSON.stringify(users))
      localStorage.setItem('operatorUser', JSON.stringify(operatorUser))
    }
    else {
      localStorage.setItem('operatorUser', JSON.stringify(operatorUser))
    }
  }, [y])

  return (
    <>
    <usersStorage.Provider value = {users}>
      <operatorStorage.Provider value = {operatorUser}>
        <currentStorage.Provider value = {{currentUser, setCurrentUser}}>
          <div className="Header">
            <Link to="/" className="Header-title">◻brum</Link>
            {headerButton}
          </div>

          <Outlet />

          <div className="Footer">
            <h1 className="Footer-title">◻brum</h1>
            <p className="Footer-text">© 2026 Brum. Всі права захищені.</p>
            {footerButton}
          </div>
        </currentStorage.Provider>
      </operatorStorage.Provider>
    </usersStorage.Provider>
    </>
  )
}

export default App
