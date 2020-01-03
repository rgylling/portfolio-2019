import React, { Component, Fragment } from 'react'
import anime from 'animejs/lib/anime.es.js'

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timeLine: null,
			open: false
		};
	}
	componentDidMount() {
		// const timeLine = anime.timeline({
		// 	autoplay: false,
		// 	easing: 'easeInOutCubic'
		// });

		// anime.set('.nav-overlay', {translateX: '100%'})

		// const timeLine =
		// 	anime({
		// 	  targets: '.nav-overlay',
		// 	  translateX: [
		// 				{value: '0%', easing: 'easeOutElastic(1, .9)', duration: 800},
		// 				// {value: '100%', easing: 'easeOutElastic(1, .9)', duration: 500}
		// 	  ],
		// 	  // opacity: {value: [0.001, 1], duration: 50},
		// 	  easing: 'easeInOutCubic',
		// 	  duration: '2000',
		// 	})

		// this.setState({timeLine})
	}
	handleClick(i) {
		this.setState({ open: !this.state.open });
		if (!this.state.open) {
			console.log('open')
			anime({
				targets: '.nav-overlay',
				translateX: [
					{ value: '0%', easing: 'easeOutElastic(1, .9)', duration: 800 },
					// {value: '100%', easing: 'easeOutElastic(1, .9)', duration: 500}
				],
				opacity: { value: [1], duration: 50 },
				easing: 'easeInOutCubic',
				duration: '2000',
				begin: function () {
					document.querySelector(".nav-overlay").style.display = "block";
				}
			})

		} else {
			console.log('clerse')

			anime({
				targets: '.nav-overlay',
				translateX: [
					{ value: '100%', easing: 'easeOutElastic(1, .9)', duration: 800 },
					// {value: '100%', easing: 'easeOutElastic(1, .9)', duration: 500}
				],
				// opacity: {value: [0.001, 1], duration: 50},
				easing: 'easeInOutCubic',
				duration: '2000',
				opacity: { value: [0], duration: 900 },
				complete: function () {
					document.querySelector(".nav-overlay").style.display = "none";
				}
			})
		}

	}




	render() {

		return (
			<Fragment>
				<div class="hamburger-menu" onClick={() => this.handleClick()} style={{ position: 'absolute', right: 20, top: 20 }}>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</div>
				<div class="nav-overlay" style={{ transform: 'translateX(100%)', display: 'none', opacity: 0 }}>
					hi
				</div>
			</Fragment>
		);
	}
}


export default Nav
