import {
  Button, MenuItem, Select, TextField,
} from '@mui/material'
import { useEthers } from '@usedapp/core'
import React, { useState } from 'react'
import { GridStyled, HeaderStyled, StackStyled } from './styled'

function Depositing() {
  const [depositState, setDepositState] = useState({ amount: '', token: 'ETH' })
  const { account } = useEthers()

  return (
    <GridStyled container direction="column">
      <HeaderStyled variant="h6" align="left">DEPOSITING</HeaderStyled>
      <StackStyled spacing={1}>
        <TextField
          label="Amount"
          variant="standard"
          size="small"
          type="number"
          InputProps={{
            inputProps: { min: 0 },
          }}
          value={depositState.amount}
          onChange={(e) => { setDepositState({ ...depositState, amount: e.target.value }) }}
        />
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={depositState.token}
          onChange={(e) => { setDepositState({ ...depositState, token: e.target.value }) }}
        >
          <MenuItem value="ETH">ETH</MenuItem>
          <MenuItem value="USDT">USDT</MenuItem>
          <MenuItem value="DVF">DVF</MenuItem>
        </Select>

        <Button variant="outlined" onClick={() => {}}>Deposit</Button>
      </StackStyled>
    </GridStyled>
  )
}

export default Depositing
