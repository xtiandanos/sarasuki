import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/login" render={(props) => <Login />} />
            <Route exact path="/register" render={(props) => <Register />} />
            <Route exact path="/404" render={(props) => <Page404 />} />
            <Route exact path="/500" render={(props) => <Page500 />} />
            <Route path="/" render={(props) => <DefaultLayout />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    )
  }
}

export default App
