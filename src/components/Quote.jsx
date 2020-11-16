import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Container = styled.div`
	color: #FFF;
	font-family: Arial, Helvetica, sans-serif;
`

const Result = styled.p`
	font-size: 18px;
	span {
		font-weight: bold;
	}
`

const Price = styled.p`
	font-size: 30px;
	span {
		font-weight: bold;
	}
`

const Quote = ({ quoteResult }) => {
	console.log('quoteResult', quoteResult)
	const { PRICE, HIGHDAY, LOWDAY, CHANGE24HOUR, LASTUPDATE } = quoteResult
	return (
		<Container>
			<Price>Current Price: <span>{ PRICE }</span></Price>
			<Result>Highest Day Price: <span>{ HIGHDAY }</span></Result>
			<Result>Lowest Day Price: <span>{ LOWDAY }</span></Result>
			<Result>Last Day Variation: <span>{ CHANGE24HOUR }</span></Result>
			<Result>Last Update: <span></span>{ LASTUPDATE }</Result>
		</Container>
	)
}

Quote.propTypes = {
	quoteResult: PropTypes.object.isRequired
}

export { Quote }