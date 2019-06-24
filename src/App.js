import React from 'react'
import './App.css'
import { Reset } from 'styled-reset'
import { connect } from 'react-redux'
import { sampleThing } from './actions/sample'
import { Container } from './components/Container.js'
import Home from './components/Home'
import Nav from './components/Nav'

function App ({count, sampleThing}) {

  return (
    <React.Fragment>
      <Container minHeight={'100vh'} bg='lightGrey' px={5} py={4} position='relative'>
        <Reset />
				<Nav />
				<Home />
      </Container>
    </React.Fragment>

  )
}

export default connect(
  state => ({count: state.sampleState}),
  { sampleThing }
)(App)
