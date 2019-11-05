import './App.css'
import Index from './pages/Index'
import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import QAndA from './pages/QAndA'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={'/:id'} children={<QAndA />} />
          <Route path={'/'} children={<Index />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
