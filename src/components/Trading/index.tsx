import {
  Button, MenuItem, Select, TextField,
} from '@mui/material'
import { useEthers } from '@usedapp/core'
import React, { useState } from 'react'
import { GridStyled, HeaderStyled, StackStyled } from './styled'

function Trading() {
  const [tradingState, setTradingState] = useState({
    side: 'BUY', amount: '', token: 'ETH', price: '',
  })
  const { account } = useEthers()

  return (
    <GridStyled container direction="column">
      <HeaderStyled variant="h6" align="left">TRADING</HeaderStyled>
      <StackStyled spacing={1}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={tradingState.side}
          onChange={(e) => { setTradingState({ ...tradingState, side: e.target.value }) }}
        >
          <MenuItem value="BUY">BUY</MenuItem>
          <MenuItem value="SELL">SELL</MenuItem>
        </Select>
        <TextField
          label="Amount"
          variant="standard"
          size="small"
          type="number"
          value={tradingState.amount}
          InputProps={{
            inputProps: { min: 0 },
          }}
          onChange={(e) => { setTradingState({ ...tradingState, amount: e.target.value }) }}
        />
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={tradingState.token}
          onChange={(e) => { setTradingState({ ...tradingState, token: e.target.value }) }}
        >
          <MenuItem value="ETH">ETH</MenuItem>
          <MenuItem value="USDT">USDT</MenuItem>
          <MenuItem value="DVF">DVF</MenuItem>
        </Select>
        <TextField
          label="Price"
          variant="standard"
          size="small"
          type="number"
          value={tradingState.price}
          InputProps={{
            inputProps: { min: 0 },
          }}
          onChange={(e) => { setTradingState({ ...tradingState, price: e.target.value }) }}
        />
        <Button variant="outlined" onClick={() => {}}>{tradingState.side}</Button>
      </StackStyled>
    </GridStyled>
  )
}

export default Trading
