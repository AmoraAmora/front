import React from 'react'
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom'
import Auth from '../../pages/auth'
import Main from '../../pages/main'
import ProtectedRoute from '../ProtectedRoute'

function App() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/">
          <Main />
        </ProtectedRoute>
        <Route exact path="/auth">
          <Auth />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
