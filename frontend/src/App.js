import './App.css';
import { Route } from "wouter";
import LoginPage from './pages/auth/LoginPage';
import ProfilePage from './pages/common/ProfilePage'
import StaffPage from './pages/staff/StaffPage';

import { useEffect, useState } from 'react';
import { status } from './services/AuthServices';
import Loading from './components/common/Loading';



// const isAuthorized = () => {
//   return true
// }

function App() {
  const [authtenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    status().then((resp, err) => {
      setTimeout(() => {
        if (resp.status === 200) {
          setAuthenticated(true)
        }
      })
    }, 5000)
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <Loading />
    )
  }

  if (!authtenticated) {
    return (
      <>
        <LoginPage setAuthenticated={setAuthenticated} />
      </>
    )
  }
  if (localStorage.getItem("UserRole") === "staff") {
    return (
      <div>
        <Route path="/participants/:id" component={ProfilePage}></Route>
        <Route path='/' component={StaffPage}></Route>
      </div>
    )
  }
  else {
    return (
      <div>
        <Route path='/' component={ProfilePage}></Route>
      </div >
    )
  }
}

export default App;
