import React from 'react'
import { Link } from 'react-router-dom'

const Copmonet1 = () => {
  return (
    <div id="outer">
        <div id="nav">
            <button id="btnnav"><Link to="/">Home</Link></button>
            <button id="btnnav"><Link to="/create">Create page</Link></button>
        </div>
    </div>
  )
}

export default Copmonet1