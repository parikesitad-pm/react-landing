import './App.css'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact components={Home} />
        </Switch>
      </Router>
    </>
  )
}

export default App
