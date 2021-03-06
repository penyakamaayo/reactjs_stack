import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Posts from './Posts/Posts'
import Post from './Post/Post'
import Styles from './Styles.css'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Posts}/>
      <Route exact path="/posts/:id" component={Post}/>
    </Switch>
  )
}

export default App 