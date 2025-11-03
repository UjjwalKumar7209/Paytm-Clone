import Appbar from '../components/Appbar'
import { Users } from '../components/Users'
import Balance from '../components/Balance'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Dashboard() {
  const [value, setValue] = useState()
  useEffect(() =>{
    axios.get(
      `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/account/balance`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }
    ).then((res) => {
        setValue(res.data.balance)
    })
  }, [])
  return (
    <div>
      <Appbar />
      <Balance value={value} />
      <div className="m-8">
        <Users />
      </div>
    </div>
  )
}
