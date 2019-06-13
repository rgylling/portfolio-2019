import React from 'react'
import './App.css'
import styled from 'styled-components/macro'
import { connect } from 'react-redux'
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`
const Button = styled.button`
  font-size: 1em;
  text-align: center;
  background-color: #ddd;
  border: none;
`
function App ({count, clicky}) {
  return (
    <div className='App'>
      <header className='App-header'>
        <Title>styled</Title>
        <Button onClick={() => clicky({type: 'SAMPLE_ACTION', count: count.count + 1})}>hi</Button>
        {count.count}
      </header>
    </div>
  )
}

const mapStateToProps = state => ({
  count: state.sampleState
})

const mapDispatchToProps = dispatch => ({
  clicky: id => dispatch(id)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
