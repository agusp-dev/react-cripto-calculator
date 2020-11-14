import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`

const useCoin = (initState, coins) => {
  
  //State of our hook
  const [state, updateState] = useState(initState)

  const getCoinsOptions = () => {
    return coins.map( c => <option key={ c.code } value={ c.code }>{ c.name }</option> )
  }

  const selection = () => {
    return (
      <Fragment>
        <Label>Select Coin</Label>
        <Select
          onChange={ e => updateState(e.target.value) }
          value={ state }>
          <option value=''>-- Select --</option>
          { getCoinsOptions() }
        </Select>
      </Fragment>
    )
  }

  //State return
  return [state, selection, updateState]
}

useCoin.propTypes = {
  initState: PropTypes.string.isRequired,
  coins: PropTypes.array.isRequired
}

export { useCoin }