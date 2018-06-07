import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';

//COMPONENTS
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profiles';
import PostItem from './components/post_item';
import Life from './components/lifecycle';
import Conditional from './components/conditional';
const App = () => {
  return (<BrowserRouter>
    <div>
      <header>
        <NavLink to="/">Home</NavLink><br/>
        <NavLink
        to="/posts"
        activeStyle={{color:'red'}}
        activeClassName="selected"
        >Posts</NavLink><br/>
        <NavLink to={{
          pathname:'/profile',
          hash:'#francis',
          search:'?profile=true',
        }}>Profile</NavLink><br/>
        <NavLink to="/life">Life</NavLink><br/>
        <NavLink to="/conditional">  Conditional</NavLink>

        <hr/>
      </header>
      <Switch>
      <Route path="/posts/:id" component={PostItem}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/posts"  component={Posts}/>
      <Route path="/life"  component={Life}/>
      <Route path="/conditional"  component={Conditional}/>
      <Route path="/" exact component={Home}/>
      <Route render={()=><h3>oops 404</h3>}/>
      </Switch>
    </div>
  </BrowserRouter>)
}

ReactDOM.render(<App/>, document.querySelector('#root'))
