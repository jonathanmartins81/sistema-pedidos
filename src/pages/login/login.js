import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as MainLogo } from './logo-react-zzaria.svg'

const config = {
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

function Login () {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null
  })

  const { isUserLoggedIn, user } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('dados do usuário:', user)
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
    })
  }, [])

  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }, [])

  const logout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      console.log('deslogou!')
      setUserInfo({
        isUserLoggedIn: false,
        user: null
      })
    })
  }, [])

  return (
    <Container>
      <Grid container justify='center' spacing={40}>
        <Grid item>
          <Logo />
        </Grid>

        <Grid item xs={12} container justify='center'>
          {isUserLoggedIn && (
            <>
              <pre>{user.displayName}</pre>
              <Button variant='contained' onClick={logout}>
                Sair
              </Button>
            </>
          )}

          {!isUserLoggedIn && (
            <GitHubButton onClick={login}>
              Entrar com GitHub
            </GitHubButton>
          )}
        </Grid>
      </Grid>
    </Container>
  )
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
