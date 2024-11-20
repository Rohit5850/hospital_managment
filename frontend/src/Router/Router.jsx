import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Appointment from '../Components/Appointment'
import Doctor from '../Components/Doctor'
import Patient from '../Components/Patient'

const Router = () => {
  return (
    <div>
        
    <Routes>
        <Route path="/" element={<Appointment/>} />
        <Route path="/doctor" element={<Doctor/>} />
        <Route path="/patient" element={<Patient/>} />
    </Routes>

    </div>
  )
}

export default Router