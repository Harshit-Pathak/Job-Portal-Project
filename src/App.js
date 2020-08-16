import React, {Component} from "react"
import './App.css'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyB6aSelPgfg2M4H9mO23FT_uL4DVHxFYis",
  authDomain: "job-portal-website-17b80.firebaseapp.com"
})

class App extends Component{
  state={isSignedIn : false}
  uiconfig={
    signInFlow:"popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }

  }
  componentDidMount=()=>{
        firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn:!!user})
    })
  }
  render()
  {
    return (
      <div className='App'>
        <header className='App-header'>
            
            <h1 className="App-title">Job Portal</h1>
            {this.state.isSignedIn ? (
            <div>Signed In!!
            <div className='message'>
            <button onClick={()=>firebase.auth().signOut()}>Sign Out</button>
            </div>
            </div>
            ):(
              <StyledFirebaseAuth
                uiConfig={this.uiconfig}
                firebaseAuth={firebase.auth()}/>
             )}
        </header>       
      </div>
    )
  }
}
export default App