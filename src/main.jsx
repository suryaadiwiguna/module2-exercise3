import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import Navigation from './components/Navigation.jsx'
import Heading from './components/Heading.jsx'
import Profile from './components/Profile.jsx'
import Idea from './components/Idea.jsx'
import Capabilities from './components/Capabilities.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation />
    <Heading />
    <Profile />
    <Idea />
    <Capabilities />
  </React.StrictMode>,
)
