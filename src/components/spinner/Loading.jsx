import React from 'react'
import './Loading.css'
import styled from '@emotion/styled'

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 32px 0;
`

const Loading = () => {
	return (
		<Container>
			<div class="sk-chase">
				<div class="sk-chase-dot"></div>
				<div class="sk-chase-dot"></div>
				<div class="sk-chase-dot"></div>
				<div class="sk-chase-dot"></div>
				<div class="sk-chase-dot"></div>
				<div class="sk-chase-dot"></div>
			</div>
		</Container>
	)
}

export { Loading }