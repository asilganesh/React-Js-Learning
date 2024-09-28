import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const User = () => {
const navigate = useNavigate()
    const params =useParams()
    console.log(params.id)

  return (
    <div className='user'>
      <button
        onClick={()=>navigate("/about")}
      >Clcik Me</button>
    </div>
  )
}

export default User
