import React from 'react'
import Header from '../Block/Header'
import { Outlet } from 'react-router-dom'

const DetailedPageLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default DetailedPageLayout