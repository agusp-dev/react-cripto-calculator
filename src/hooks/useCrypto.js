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

const useCrypto = initState => {
  
  //State of our hook
  const [state, updateState] = useState(initState)

  const selectCrypto = () => (
    <Fragment>
      <Label>Select your crypto currency</Label>
      <Select
        onChange={ e => updateState(e.target.value) }
        value={ state }>
        <option value=''>-- Select --</option>
        {/* { getCoinsOptions() } */}
      </Select>
    </Fragment>
  )

  //State return
  return [state, selectCrypto, updateState]
}

useCrypto.propTypes = {
  initState: PropTypes.string.isRequired
}

export { useCrypto }