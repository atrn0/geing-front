import './App.css'
import Index from './pages/Index'
import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import QAndA from './pages/QAndA'
import AppBar from './components/AppBar'
import AllQ from './pages/AllQ'

function App() {
  return (
    <div className="App">
      <AppBar />
      <BrowserRouter>
        <Switch>
          <Route path={'/all-q'} children={<AllQ />} />
          <Route path={'/:id'} children={<QAndA />} />
          <Route path={'/'} children={<Index />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
