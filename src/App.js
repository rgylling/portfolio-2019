import React from 'react'
import './App.css'
import { Reset } from 'styled-reset'
import {TweenMax, TimelineMax, Linear} from 'gsap'
import { connect } from 'react-redux'
import { sampleThing } from './actions/sample'
import { Heading } from './components/Typography.js'
import { Container } from './components/Container.js'
/*eslint-disable */
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
/*eslint-enable */
import ScrollMagic from 'scrollmagic'
function App ({count, sampleThing}) {
  React.useEffect(() => {
    const route = document.getElementById('line-path')

    // const lineLength = route.getTotalLength()
    // var strokeDashoffset = parseInt(route.style.strokeDashoffset)
    // route.style.strokeDasharray = lineLength
    // route.style.strokeDashoffset = strokeDashoffset - 1

    var updateSnake = function () {
      console.log(route.style)
      var strokeDashoffset = parseInt(route.style.strokeDashoffset)
      console.log(strokeDashoffset)
      route.style.strokeDashoffset = strokeDashoffset - 50
    }
    const route_1 = new TimelineMax({
      onUpdate: updateSnake
    })
    route_1
    .to('#line-svg', 1, {
      strokeDashoffset: 0,
      xPercent: -66,
      force3D: true
    }, 0)
      // .add(TweenMax.to(route, 3, {
      //   strokeDashoffset: 0,
      //   ease: Linear.easeNone
      // }))
    const controller = new ScrollMagic.Controller()

    const scene = new ScrollMagic.Scene({
      triggerElement: '#root',
      duration: '800%',
      triggerHook: 0
    })
      .setPin('#trigger-route-1')
      .setTween(route_1)
      .addTo(controller) // assign the scene to the controller
  }, [])
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
        <div className='full-screen add-block' id='trigger-route-1' />
        <div className='draw-line-height'>
          <svg style={{ position: 'absolute', top: '321px', left: '60px', transform: 'rotate(180deg)'}} id='line-svg' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' width='50' height='200'>
            <line style={{strokeDasharray: '3460.65', strokeDashoffset: '3458.92'}} id='line-path' class='left' fill='none' stroke='#Fff' stroke-width='50' x1='0' y1='200' x2='0' y2='-400' />
          </svg>
        </div>
        <div className='full-screen add-block' id='product-serio' />

      </Container>
    </React.Fragment>

  )
}

export default connect(
  state => ({count: state.sampleState}),
  { sampleThing }
)(App)
