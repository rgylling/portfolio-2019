import React from 'react'
import './App.css'
import { Reset } from 'styled-reset'

import { connect } from 'react-redux'
import { sampleThing } from './actions/sample'
import { Heading } from './components/Typography.js'
import { Container } from './components/Container.js'

function App ({count, sampleThing}) {
  return (
    <React.Fragment>
      <Container minHeight={'100vh'} bg='lightGrey' px={5} py={4}>
        <Reset />
        <header>
          <Heading fontSize='150px' color='white'>
          hey
        </Heading>
          <Heading fontSize='150px' color='white'>
          yo
        </Heading>
        </header>
      </Container>
    </React.Fragment>

  )
}

export default connect(
  state => ({count: state.sampleState}),
  { sampleThing }
)(App)
