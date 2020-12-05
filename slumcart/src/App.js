import React, { Component } from 'react';
import './App.css';
import Homepage from './Pages/Homepage/homepage';
import Shop from './Components/Shop/Shop'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './Components/Header/Header';
import SigninSignUp from './Pages/Sign-Signup/SigninSignUp';
import { connect } from 'react-redux'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.action'

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/signin' render={() => this.props.currentuser ? (<Redirect to="/" />) : (<SigninSignUp />)} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  currentuser: user.currentuser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
