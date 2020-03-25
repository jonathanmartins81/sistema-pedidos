import React, { PureComponent } from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as MainLogo } from './logo-react-zzaria.svg'

var config = {
  apiKey: 'AIzaSyCFXmX-8s_QOlDC0uAkW1NgjyGpEKsF2KU',
  authDomain: 'react-zzaria-jw.firebaseapp.com',
  databaseURL: 'https://react-zzaria-jw.firebaseio.com',
  projectId: 'react-zzaria-jw',
  storageBucket: 'react-zzaria-jw.appspot.com',
  messagingSenderId: '1077009323103',
  appId: '1:1077009323103:web:eca6d8ee6d5cb5290977ea',
  measurementId: 'G-3HV3MG1L9Z'
}

firebase.initializeApp(config)

class Login extends PureComponent {
  componentDidMount () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('usuário logado', user)
      } else {
        console.log('usuário não está logado', user)
      }
    })
  }

  render () {
    return (
      <Container>
        <Grid container justify='center' spacing={40}>
          <Grid item>
            <Logo />
          </Grid>

          <Grid item xs={12} container justify='center'>
            <GitHubButton onClick={() => {
              const provider = new firebase.auth.GithubAuthProvider()
              firebase.auth().signInWithRedirect(provider)
            }}>
              Entrar com GitHub
            </GitHubButton>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

const Container = styled.div`
  padding: 20px;
`

const Logo = styled(MainLogo)`
  width: 100%;
`

const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: 25px;
    max-width: 480px;
    padding: 15px;
    text-transform: none;
  }
`

export default Login
