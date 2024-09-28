import React, { useContext } from 'react'
import {Context} from "../index"

const Row = () => {
const data = useContext(Context)


    return(
        <>
        {data}
        </>
    )
}

const Home = () => {
  return (
    <div>
      <Row />
    </div>
  )
}

export default Home
