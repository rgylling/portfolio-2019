import React from 'react'
import './App.css'
import { Reset } from 'styled-reset'
import {TweenMax, TimelineMax, Linear} from 'gsap'
import { connect } from 'react-redux'
import { sampleThing } from './actions/sample'
import { Heading } from './components/Typography.js'
import { Container } from './components/Container.js'
import anime from 'animejs/lib/anime.es.js'

/*eslint-disable */
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
/*eslint-enable */
import ScrollMagic from 'scrollmagic'
function App ({count, sampleThing}) {
  React.useEffect(() => {
    anime.set(['.letter-a', '.letter-n', '.letter-i'], {translateX: 70})
    anime.set('.letter-e', {translateX: -70})
    anime.set('.cover', {translateX: '100%'})
    anime.set('.header', {scaleY: 1, scaleX: 1})
    anime.timeline({

      easing: 'easeOutSine'
    })
      .add({
        targets: '.letter-i .line',
        duration: 0,
        begin: function (a) { a.animatables[0].target.removeAttribute('stroke-dasharray') }
      }, 0)
      .add({
        targets: '.bounced',
        transformOrigin: ['50% 100% 0px', '50% 100% 0px'],
        translateY: [
          {value: [150, -160], duration: 190, endDelay: 20, easing: 'cubicBezier(0.225, 1, 0.915, 0.980)'},
          {value: 4, duration: 120, easing: 'easeInQuad'},
          {value: 0, duration: 120, easing: 'easeOutQuad'}
        ],
        scaleX: [
          {value: [0.25, 0.85], duration: 190, easing: 'easeOutQuad'},
          {value: 1.08, duration: 120, delay: 85, easing: 'easeInOutSine'},
          {value: 1, duration: 260, delay: 25, easing: 'easeOutQuad'}
        ],
        scaleY: [
          {value: [0.3, 0.8], duration: 120, easing: 'easeOutSine'},
          {value: 0.35, duration: 120, delay: 180, easing: 'easeInOutSine'},
          {value: 0.57, duration: 180, delay: 25, easing: 'easeOutQuad'},
          {value: 1, duration: 190, delay: 15, easing: 'easeOutQuad'}
        ],
        delay: anime.stagger(80)
      }, 1000)
      .add({
        targets: '.letter-m .line',
        easing: 'easeOutElastic(1, .8)',
        duration: 600,
        d: function (el) { return el.dataset.d2 },
        begin: function (a) { a.animatables[0].target.removeAttribute('stroke-dasharray') }
      }, '-=140')
      .add({
        targets: ['.letter-a', '.letter-n', '.letter-i', '.letter-e'],
        translateX: 0,
        easing: 'easeOutElastic(1, .6)',
        duration: 800,
        delay: anime.stagger(40, {from: 2.5}),
        change: function (a) { a.animatables[2].target.removeAttribute('stroke-dasharray') }
      }, '-=600')
      .add({
        targets: '.letter-m .line',
        d: function (el) { return el.dataset.d3 },
        easing: 'spring(.2, 200, 3, 60)'
      }, '-=680')
      .add({
        targets: '.letter-i .line',
        transformOrigin: ['50% 100% 0', '50% 100% 0'],
        d: function (el) { return el.dataset.d2 },
        easing: 'cubicBezier(0.400, 0.530, 0.070, 1)',
        duration: 80
      }, '-=670')
      .add({
        targets: '.logo-letter',
        translateY: [
          {value: 40, duration: 150, easing: 'easeOutQuart'},
          {value: 0, duration: 800, easing: 'easeOutElastic(1, .5)'}
        ],
        strokeDashoffset: [anime.setDashoffset, 0],
        delay: anime.stagger(60, {from: 'center'})
      }, '-=670')
      .add({
        targets: '.bounced',
        scaleY: [
          {value: 0.9, duration: 150, easing: 'easeOutQuart'},
          {value: 1, duration: 800, easing: 'easeOutElastic(1, .5)'}
        ],
        delay: anime.stagger(60, {from: 'center'})
      }, '-=1090')
			.add({
  targets: '.cover',
  translateX: [
			{value: '0%', easing: 'easeOutElastic(1, .9)', duration: 800}
			// {value: '100%', easing: 'easeOutElastic(1, .9)', duration: 500}
  ],
  opacity: {value: [0.001, 1], duration: 50},
  easing: 'easeInOutCubic',
  duration: '2000',
  delay: anime.stagger(75)
})
.add({
  targets: '.cover',
  translateY: [
      {value: '100%', easing: 'easeOutElastic(1, .9)', duration: 300}
      // {value: '100%', easing: 'easeOutElastic(1, .9)', duration: 500}
  ],
  duration: '3000'
}, '+=3000')
.add({
  targets: '.header',
  translateY: [
      {value: '-100%', easing: 'easeOutElastic(1, .9)', duration: 800}
      // {value: '100%', easing: 'easeOutElastic(1, .9)', duration: 500}
  ],
  translateX: [
      {value: '-100%', easing: 'easeOutElastic(1, .9)', duration: 800}
      // {value: '100%', easing: 'easeOutElastic(1, .9)', duration: 500}
  ],
  scaleX: [
    {value: [1, 0.85], duration: 190, easing: 'easeOutQuad'},
    {value: 1.08, duration: 120, delay: 85, easing: 'easeInOutSine'},
    {value: 1, duration: 260, delay: 25, easing: 'easeOutQuad'}
  ],
  scaleY: [
    {value: [1, 0.8], duration: 120, easing: 'easeOutSine'},
    {value: 0.35, duration: 120, delay: 180, easing: 'easeInOutSine'},
    {value: 0.57, duration: 180, delay: 25, easing: 'easeOutQuad'},
    {value: 1, duration: 190, delay: 15, easing: 'easeOutQuad'}
  ],
  easing: 'easeInOutCubic',
  duration: '2000',
  delay: anime.stagger(475)
}, '+=100')
  }, [])
  return (
    <React.Fragment>
      <div class='cover'>
        <Heading fontSize='200px' color='white'>
          Front-End Engineer
        </Heading>
      </div>
      <Container minHeight={'100vh'} bg='lightGrey' px={5} py={4} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Reset />
        <header class='header' style={{display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <div>
            <div class='logo-animation-wrapper'>
              <div class='logo-animation'>
                <div class='anime-logo'>
                  <div class='anime-logo-signs'>
                    <div class='logo-letter letter-a'>
                      <svg class='bounced' width='63' height='128.851' viewBox='0 0 63 128.851'><g id='svgGroup' stroke-linecap='round' fill-rule='evenodd' stroke='#fff' stroke-width='0.25mm' fill='none'><path class='line' d='M 0 128.851 L 0 0.001 L 39.6 0.001 Q 46.256 0.001 50.791 2.121 A 16.009 16.009 0 0 1 54.225 4.276 A 19.566 19.566 0 0 1 59.745 11.784 A 26.737 26.737 0 0 1 61.2 16.276 A 59.572 59.572 0 0 1 62.279 22.525 Q 62.685 25.834 62.862 29.684 A 137.503 137.503 0 0 1 63 36.001 A 68.155 68.155 0 0 1 62.722 42.376 Q 62.12 48.765 60.215 52.96 A 20.122 20.122 0 0 1 60.15 53.101 A 15.637 15.637 0 0 1 51.793 61.059 A 21.275 21.275 0 0 1 50.25 61.651 A 14.267 14.267 0 0 1 54.31 63.105 A 11.222 11.222 0 0 1 58.725 67.501 A 17.946 17.946 0 0 1 60.422 71.812 Q 61.35 75.373 61.35 80.101 L 61.05 128.851 L 35.85 128.851 L 35.85 78.451 Q 35.85 73.051 33.75 71.551 Q 32.056 70.341 28.118 70.107 A 34.11 34.11 0 0 0 26.1 70.051 L 26.1 128.851 L 0 128.851 Z M 26.25 47.701 L 32.4 47.701 Q 36.97 47.701 37.672 39.322 A 39.921 39.921 0 0 0 37.8 36.001 Q 37.8 31.834 37.5 29.37 A 19.377 19.377 0 0 0 37.35 28.351 A 10.496 10.496 0 0 0 37.043 27.057 Q 36.614 25.679 35.865 24.971 A 2.907 2.907 0 0 0 35.7 24.826 Q 34.749 24.053 33.139 23.893 A 8.978 8.978 0 0 0 32.25 23.851 L 26.25 23.851 L 26.25 47.701 Z' id='0' /></g></svg>
                    </div>
                    <div class='logo-letter letter-n'>
                      <svg class='bounced' width='68.4' height='128.85' viewBox='0 0 68.4 128.85'><g id='svgGroup' stroke-linecap='round' fill-rule='evenodd' stroke='#fff' stroke-width='0.25mm' fill='none'><path class='line' d='M 25.05 128.85 L 0 128.85 L 12.45 0 L 56.1 0 L 68.4 128.85 L 43.95 128.85 L 42.15 108 L 26.55 108 L 25.05 128.85 Z M 33.3 21.9 L 28.5 87.45 L 40.2 87.45 L 34.5 21.9 L 33.3 21.9 Z' id='0' /></g></svg>
                    </div>
                    <div class='logo-letter letter-i'>
                      <svg class='bounced' width='63.3' height='128.85' viewBox='0 0 63.3 128.85'><g id='svgGroup' stroke-linecap='round' fill-rule='evenodd' stroke='#fff' stroke-width='0.25mm' fill='none'><path class='line' d='M 25.2 128.85 L 0 128.85 L 0 0 L 26.55 0 L 38.4 61.65 L 38.4 0 L 63.3 0 L 63.3 128.85 L 38.1 128.85 L 25.2 64.35 L 25.2 128.85 Z' id='0' /></g></svg>
                    </div>
                    <div class='logo-letter letter-m'>
                      <svg class='bounced' width='63.604' height='128.851' viewBox='0 0 63.604 128.851'><g id='svgGroup' stroke-linecap='round' fill-rule='evenodd' stroke='#fff' stroke-width='0.25mm' fill='none'><path class='line' d='M 0 128.851 L 0 0.001 L 35.55 0.001 A 39.57 39.57 0 0 1 43.501 0.748 Q 48.192 1.711 51.762 3.916 A 20.539 20.539 0 0 1 56.25 7.651 A 24.6 24.6 0 0 1 61.177 16.265 Q 63.219 22.215 63.3 30.301 L 63.6 90.601 A 104.629 104.629 0 0 1 63.603 91.425 Q 63.603 109.86 57 119.251 Q 50.775 128.105 37.023 128.793 A 47.463 47.463 0 0 1 34.65 128.851 L 0 128.851 Z M 25.95 106.051 L 30.45 106.051 Q 36.015 106.051 37.187 101.751 A 9.902 9.902 0 0 0 37.5 99.151 L 37.5 32.701 A 45.033 45.033 0 0 0 37.447 30.426 Q 37.342 28.369 37.033 26.971 A 9.862 9.862 0 0 0 36.825 26.176 Q 36.15 24.001 34.35 23.251 A 7.408 7.408 0 0 0 33.109 22.872 Q 31.809 22.584 29.926 22.519 A 33.106 33.106 0 0 0 28.8 22.501 L 25.95 22.501 L 25.95 106.051 Z' id='0' /></g></svg>
                    </div>
                    <div class='logo-letter letter-e'>
                      <svg class='bounced' width='65.4' height='128.85' viewBox='0 0 65.4 128.85'><g id='svgGroup' stroke-linecap='round' fill-rule='evenodd' stroke='#fff' stroke-width='0.25mm' fill='none'><path class='line' d='M 44.85 128.85 L 20.55 128.85 L 20.55 86.4 L 0 0 L 25.5 0 L 32.7 43.65 L 39.9 0 L 65.4 0 L 44.85 86.4 L 44.85 128.85 Z' id='0' /></g></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class='logo-animation-wrapper'>
              <div class='logo-animation'>
                <div class='anime-logo'>
                  <div class='anime-logo-signs'>
                    <div class='logo-letter letter-a'>
                      <svg class='bounced' width='63.901' height='131.252' viewBox='0 0 63.901 131.252'><g id='svgGroup' stroke-linecap='round' fill-rule='evenodd' font-size='9pt' stroke='#000' stroke-width='0.25mm' fill='none'><path class='line' d='M 0.001 91.651 L 0.001 36.151 A 64.118 64.118 0 0 1 0.739 26.081 Q 1.581 20.797 3.384 16.564 A 27.836 27.836 0 0 1 7.951 9.151 Q 15.901 0.001 31.651 0.001 A 51.653 51.653 0 0 1 39.063 0.499 Q 43.01 1.072 46.219 2.306 A 22.892 22.892 0 0 1 51.451 5.101 Q 58.501 10.201 61.201 19.951 A 64.259 64.259 0 0 1 62.82 27.859 Q 63.901 35.319 63.901 45.001 L 38.701 45.001 L 38.701 33.451 Q 38.701 28.801 37.426 26.251 A 4.336 4.336 0 0 0 34.331 23.85 A 6.891 6.891 0 0 0 32.851 23.701 A 7.893 7.893 0 0 0 29.507 24.358 Q 26.159 25.908 25.609 31.114 A 20.858 20.858 0 0 0 25.501 33.301 L 25.501 95.701 A 36.931 36.931 0 0 0 25.62 98.766 Q 25.923 102.394 27.001 104.551 A 5.187 5.187 0 0 0 28.982 106.753 Q 30.317 107.551 32.251 107.551 A 7.249 7.249 0 0 0 34.327 107.272 A 5.056 5.056 0 0 0 37.501 104.551 Q 38.859 101.834 38.988 96.781 A 42.557 42.557 0 0 0 39.001 95.701 L 39.001 77.251 L 32.101 77.251 L 32.101 55.051 L 63.601 55.051 L 63.601 130.051 L 53.251 130.051 L 48.901 119.251 A 24.13 24.13 0 0 1 41.901 127.131 Q 37.161 130.462 30.737 131.1 A 31.743 31.743 0 0 1 27.601 131.251 A 31.297 31.297 0 0 1 19.213 130.193 A 21.705 21.705 0 0 1 6.826 121.426 Q 0.283 112.006 0.013 93.281 A 113.012 113.012 0 0 1 0.001 91.651 Z' id='0' vector-effect='non-scaling-stroke' /></g></svg>
                    </div>
                    <div class='logo-letter letter-n'>
                      <svg class='bounced' width='65.4' height='128.85' viewBox='0 0 65.4 128.85'><g id='svgGroup' stroke-linecap='round' fill-rule='evenodd' font-size='9pt' stroke='#000' stroke-width='0.25mm' fill='none'><path class='line' d='M 44.85 128.85 L 20.55 128.85 L 20.55 86.4 L 0 0 L 25.5 0 L 32.7 43.65 L 39.9 0 L 65.4 0 L 44.85 86.4 L 44.85 128.85 Z' id='0' vector-effect='non-scaling-stroke' /></g></svg>
                    </div>
                    <div class='logo-letter letter-i'>
                      <svg class='bounced' width='52.35' height='128.85' viewBox='0 0 52.35 128.85'><g id='svgGroup' stroke-linecap='round' fill-rule='evenodd' font-size='9pt' stroke='#000' stroke-width='0.25mm' fill='none'><path class='line' d='M 52.35 128.85 L 0 128.85 L 0 0 L 25.8 0 L 25.8 106.95 L 52.35 106.95 L 52.35 128.85 Z' id='0' vector-effect='non-scaling-stroke' /></g></svg>
                    </div>
                    <div class='logo-letter letter-i'>
                      <svg class='bounced' width='52.35' height='128.85' viewBox='0 0 52.35 128.85'><g id='svgGroup' stroke-linecap='round' fill-rule='evenodd' font-size='9pt' stroke='#000' stroke-width='0.25mm' fill='none'><path class='line' d='M 52.35 128.85 L 0 128.85 L 0 0 L 25.8 0 L 25.8 106.95 L 52.35 106.95 L 52.35 128.85 Z' id='0' vector-effect='non-scaling-stroke' /></g></svg>
                    </div>
                    <div class='logo-letter letter-i'>
                      <svg class='bounced' width='24.9' height='128.85' viewBox='0 0 24.9 128.85'><g id='svgGroup' stroke-linecap='round' fill-rule='evenodd' font-size='9pt' stroke='#000' stroke-width='0.25mm' fill='none'><path class='line' d='M 24.9 128.85 L 0 128.85 L 0 0 L 24.9 0 L 24.9 128.85 Z' id='0' vector-effect='non-scaling-stroke' /></g></svg>
                    </div>
                    <div class='logo-letter letter-m'>
                      <svg class='bounced' width='63.3' height='128.85' viewBox='0 0 63.3 128.85'><g id='svgGroup' stroke-linecap='round' fill-rule='evenodd' font-size='9pt' stroke='#000' stroke-width='0.25mm' fill='none'><path class='line' d='M 25.2 128.85 L 0 128.85 L 0 0 L 26.55 0 L 38.4 61.65 L 38.4 0 L 63.3 0 L 63.3 128.85 L 38.1 128.85 L 25.2 64.35 L 25.2 128.85 Z' id='0' vector-effect='non-scaling-stroke' /></g></svg>
                    </div>
                    <div class='logo-letter letter-e'>
                      <svg class='bounced' width='63.901' height='131.252' viewBox='0 0 63.901 131.252'><g id='svgGroup' stroke-linecap='round' fill-rule='evenodd' font-size='9pt' stroke='#000' stroke-width='0.25mm' fill='none'><path class='line' d='M 0.001 91.651 L 0.001 36.151 A 64.118 64.118 0 0 1 0.739 26.081 Q 1.581 20.797 3.384 16.564 A 27.836 27.836 0 0 1 7.951 9.151 Q 15.901 0.001 31.651 0.001 A 51.653 51.653 0 0 1 39.063 0.499 Q 43.01 1.072 46.219 2.306 A 22.892 22.892 0 0 1 51.451 5.101 Q 58.501 10.201 61.201 19.951 A 64.259 64.259 0 0 1 62.82 27.859 Q 63.901 35.319 63.901 45.001 L 38.701 45.001 L 38.701 33.451 Q 38.701 28.801 37.426 26.251 A 4.336 4.336 0 0 0 34.331 23.85 A 6.891 6.891 0 0 0 32.851 23.701 A 7.893 7.893 0 0 0 29.507 24.358 Q 26.159 25.908 25.609 31.114 A 20.858 20.858 0 0 0 25.501 33.301 L 25.501 95.701 A 36.931 36.931 0 0 0 25.62 98.766 Q 25.923 102.394 27.001 104.551 A 5.187 5.187 0 0 0 28.982 106.753 Q 30.317 107.551 32.251 107.551 A 7.249 7.249 0 0 0 34.327 107.272 A 5.056 5.056 0 0 0 37.501 104.551 Q 38.859 101.834 38.988 96.781 A 42.557 42.557 0 0 0 39.001 95.701 L 39.001 77.251 L 32.101 77.251 L 32.101 55.051 L 63.601 55.051 L 63.601 130.051 L 53.251 130.051 L 48.901 119.251 A 24.13 24.13 0 0 1 41.901 127.131 Q 37.161 130.462 30.737 131.1 A 31.743 31.743 0 0 1 27.601 131.251 A 31.297 31.297 0 0 1 19.213 130.193 A 21.705 21.705 0 0 1 6.826 121.426 Q 0.283 112.006 0.013 93.281 A 113.012 113.012 0 0 1 0.001 91.651 Z' id='0' vector-effect='non-scaling-stroke' /></g></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Container>
    </React.Fragment>

  )
}

export default connect(
  state => ({count: state.sampleState}),
  { sampleThing }
)(App)
