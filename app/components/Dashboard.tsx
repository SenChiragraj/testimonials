import React, { useState } from 'react'
import { CreateSpace } from './CreateSpace'

const Dashboard = () => {


  return (
    <div className='h-full mx-20 mt-20'>
      <div className="flex justify-between p-2">
        <h1>Spaces</h1>
        <CreateSpace/>
      </div>
      <div className="">
        {/* Created Spaces */}
      </div>
    </div>
  )
}

export default Dashboard