import React from 'react'
import CarListSideBar from '../components/CarListSideBar'
import { cars } from '../constants'

const car = () => {
  return (
    <div>
              <CarListSideBar cars={cars}/> 

    </div>
  )
}

export default car