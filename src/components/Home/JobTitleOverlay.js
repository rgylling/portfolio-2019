import React from 'react';

import { Heading } from '../Typography.js'
import anime from 'animejs/lib/anime.es.js'

anime.set('.cover', {translateX: '100%'})

const _wrapLetterWithSpan = (text) => {
	const split = text.split('')
	return split.map((text) => {
		return <span class="letter">{text}</span>
	})
}

const JobTitle = (text) => (
	<div class='cover'>
		<Heading className="ml2" id="job-title" fontSize='200px' color='white'>
			{_wrapLetterWithSpan('Front-End Engineer')}
		</Heading>
	</div>
)

export default JobTitle
