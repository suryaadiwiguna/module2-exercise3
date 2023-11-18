import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import Nav from './components/nav.jsx'
import Heading from './components/Heading.jsx'
import Profile from './components/Profile.jsx'
import Idea from './components/Idea.jsx'
import Capabilities from './components/Capabilities.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Heading />
    <Profile />
    <Idea />
    <Capabilities />
  </React.StrictMode>,
)
