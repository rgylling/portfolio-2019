import React from 'react'
import JobTitle from './JobTitleOverlay.js'
import MyName from './MyName.js'
import anime from 'animejs/lib/anime.es.js'
const Home = () => {
  React.useEffect(() => {
    anime.set(['.letter-a', '.letter-n', '.letter-i'], { translateX: 70 })
    anime.set('.letter-e', { translateX: -70 })
    anime.set('.cover', { translateX: '100%' })
    anime.set('.header', { scaleY: 1, scaleX: 1 })

    // var div = document.getElementById('job-title')
    // var text = div.textContent.split('')
    // div.innerHTML = ''
    //
    // for (let i = 0; i < text.length; i++) {
    // 	if (text[i] === ' ') text[i] = '<br>'
    // 	div.innerHTML += "<span class='letter'>" + text[i] + "</span>"
    // }

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
          { value: [150, -160], duration: 190, endDelay: 20, easing: 'cubicBezier(0.225, 1, 0.915, 0.980)' },
          { value: 4, duration: 120, easing: 'easeInQuad' },
          { value: 0, duration: 120, easing: 'easeOutQuad' }
        ],
        scaleX: [
          { value: [0.25, 0.85], duration: 190, easing: 'easeOutQuad' },
          { value: 1.08, duration: 120, delay: 85, easing: 'easeInOutSine' },
          { value: 1, duration: 260, delay: 25, easing: 'easeOutQuad' }
        ],
        scaleY: [
          { value: [0.3, 0.8], duration: 120, easing: 'easeOutSine' },
          { value: 0.35, duration: 120, delay: 180, easing: 'easeInOutSine' },
          { value: 0.57, duration: 180, delay: 25, easing: 'easeOutQuad' },
          { value: 1, duration: 190, delay: 15, easing: 'easeOutQuad' }
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
        delay: anime.stagger(40, { from: 2.5 }),
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
          { value: 40, duration: 150, easing: 'easeOutQuart' },
          { value: 0, duration: 800, easing: 'easeOutElastic(1, .5)' }
        ],
        strokeDashoffset: [anime.setDashoffset, 0],
        delay: anime.stagger(60, { from: 'center' })
      }, '-=670')
      .add({
        targets: '.bounced',
        scaleY: [
          { value: 0.9, duration: 150, easing: 'easeOutQuart' },
          { value: 1, duration: 800, easing: 'easeOutElastic(1, .5)' }
        ],
        delay: anime.stagger(60, { from: 'center' })
      }, '-=1090')
      .add({
        targets: '.bounced',
        // scaleY: [
        // 				{value: 0, duration: 150, easing: 'easeOutQuart'}
        // ]
      }, '+=10')
      .add({
        targets: '.cover',
        translateX: [
          { value: '0%', easing: 'easeOutElastic(1, .9)', duration: 500 }
        ],
        opacity: { value: [0.001, 1], duration: 50 },
        easing: 'easeInOutCubic',
        duration: '2000'
        // delay: anime.stagger(75)
      }, '+=300')
      .add({
        targets: '.ml2 .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: function (el, i) {
          return 500 + 30 * i
        }
      }).add({
        targets: '.ml2 .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 1100,
        delay: function (el, i) {
          return 100 + 30 * i
        }
      })
      .add({
        targets: '.cover',
        translateY: [
          { value: '100%', easing: 'easeOutElastic(1, .9)', duration: 300 }
          // {value: '100%', easing: 'easeOutElastic(1, .9)', duration: 500}
        ],
        duration: '3000',
        complete: function () {
          document.querySelector('.cover').style.display = 'none'
        }
      }, '+=200')
    // .add({
    //   targets: '.header',
    //   translateY: [
    //       {value: '-100%', easing: 'easeOutElastic(1, .9)', duration: 800}
    //       // {value: '100%', easing: 'easeOutElastic(1, .9)', duration: 500}
    //   ],
    //   translateX: [
    //       {value: '-100%', easing: 'easeOutElastic(1, .9)', duration: 800}
    //       // {value: '100%', easing: 'easeOutElastic(1, .9)', duration: 500}
    //   ],
    //   scaleX: [
    //     {value: [1, 0.85], duration: 190, easing: 'easeOutQuad'},
    //     {value: 1.08, duration: 120, delay: 85, easing: 'easeInOutSine'},
    //     {value: 1, duration: 260, delay: 25, easing: 'easeOutQuad'}
    //   ],
    //   scaleY: [
    //     {value: [1, 0.8], duration: 120, easing: 'easeOutSine'},
    //     {value: 0.35, duration: 120, delay: 180, easing: 'easeInOutSine'},
    //     {value: 0.57, duration: 180, delay: 25, easing: 'easeOutQuad'},
    //     {value: 1, duration: 190, delay: 15, easing: 'easeOutQuad'}
    //   ],
    //   easing: 'easeInOutCubic',
    //   duration: '2000',
    //   delay: anime.stagger(475)
    // }, '+=100')
  }, [])
  return (
    <React.Fragment>
      <JobTitle />
      <MyName />
      {/* <Blob /> */}
    </React.Fragment>

  )
}

export default Home
