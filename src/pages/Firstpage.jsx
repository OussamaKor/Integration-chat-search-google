import React from 'react'
import WebSocketComponent from '../components/WebSocketComponent/WebSocketComponent'
import Home from './Home'

export default function Firstpage() {
  return (
    <div style={{display:"flex"}} >
      <Home />
      <WebSocketComponent />
    </div>
  )
}
