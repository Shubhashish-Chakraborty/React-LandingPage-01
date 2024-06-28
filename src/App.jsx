import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Navbar } from './components/Navbar'
import { Video } from './components/Video'
import { Card } from './components/Card'
import { Footer } from './components/Footer'
import { InfoBanner } from './components/InfoBanner'
import { Table } from './components/Table'

function App() {

  return (
    <>

      <Navbar/>
      <br />
      <br />
      <InfoBanner/>
      <Table/>
      <Video/>



      <h1 className='font-bold'>Upcoming Courses:</h1>
      <Card imgURLleft = {"/photo01.png"} imgURLright = {"/photo02.png"}/>
      <Card imgURLleft = {"/photo03.png"} imgURLright = {"/photo04.png"}/>


      <Footer/>

    </>
  )
}

export default App
