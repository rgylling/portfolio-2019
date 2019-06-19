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
    // const route = document.getElementById('line-path')

    // const lineLength = route.getTotalLength()
    // var strokeDashoffset = parseInt(route.style.strokeDashoffset)
    // route.style.strokeDasharray = lineLength
    // route.style.strokeDashoffset = strokeDashoffset - 1

    // var updateSnake = function () {
		// 	console.log('should?')
    //   var strokeDashoffset = parseInt(route.style.strokeDashoffset)
    //   route.style.strokeDashoffset = strokeDashoffset - 1
    // }
    // const route_1 = new TimelineMax({
    //   onUpdate: updateSnake
    // })
    // route_1
    // .to('#line-svg', 1, {
    //   strokeDashoffset: 0,
    //   xPercent: -106,
    //   force3D: true
    // }, 0)
      // .add(TweenMax.to(route, 3, {
      //   strokeDashoffset: 0,
      //   ease: Linear.easeNone
      // }))
			const controller = new ScrollMagic.Controller({
				globalSceneOptions: {
						triggerHook: 0,
						tweenChanges: true,
						duration: '1'
				}
			})

			const pathPrepare = (el) => {
	        let lineLength = el.getTotalLength();
					el.style.strokeDasharray = lineLength
					el.style.strokeDashoffset = lineLength
	    }
			const route = document.getElementById('line-path')
			const route2 = document.getElementById('line-path2')

			pathPrepare(route)
			pathPrepare(route2)
			const s5Tween = new TimelineMax({ paused:false, repeat: 0, delay: 0 });
			s5Tween.to(route, .5, {strokeDashoffset: 0, ease:Linear.easeNone})
							.to(route2, .5, {strokeDashoffset: 0, ease:Linear.easeNone})
        		// change color during the whole thing

    // const scene = new ScrollMagic.Scene({
    //   triggerElement: '#trigger-route-1',
    // })
    //   .setTween(s5Tween)
    //   .addTo(controller)
  }, [])
  return (
    <React.Fragment>
      <Container minHeight={'100vh'} bg='lightGrey' px={5} py={4}>
        <Reset />
        <header style={{position: 'absolute'}}>
          <Heading fontSize='150px' color='white'>
          Randy
        </Heading>
          <Heading fontSize='150px' color='white'>
          Gylling
        </Heading>
        </header>
        <div className='full-screen add-block' id='trigger-route-1' />
        <div className='draw-line-height'>
          <svg style={{ position: 'absolute', top: '318px', left: '60px', transform: 'rotate(180deg)', display: 'none'}} id='line-svg' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' width='50' height='150' viewBox="0 0 50 150" fill="none">
						<path id='line-path' d="M1.5 266.625V2" stroke="#000" stroke-linejoin="round" stroke-width="47" stroke-linecap="round"></path>
          </svg>
					<svg style={{ position: 'absolute', top: '333px', left: '219px', transform: 'rotate(90deg)'}} id='line-svg2' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' width='50' height='269' viewBox="0 0 50 269" fill="none">
						<path id='line-path2' d="M1.5 266.625V2" stroke="#000000" stroke-linejoin="round" stroke-width="47" stroke-linecap="round"></path>
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
