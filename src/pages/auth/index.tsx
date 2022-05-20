import React from 'react'
import {
  useEthers,
} from '@usedapp/core'
import { Button, Grid } from '@mui/material'

import { useHistory } from 'react-router-dom'
import { GridStyled, HeaderStyled } from './styled'

function Auth() {
  const history = useHistory()
  const { activateBrowserWallet } = useEthers()

  const handleActivate = () => {
    activateBrowserWallet()
    history.push('/')
  }

  return (
    <GridStyled container direction="column" alignItems="center">
      <HeaderStyled variant="h6" align="center">Connect wallet:</HeaderStyled>
      <Grid container flexGrow={1} alignItems="center" justifyContent="center">
        <Button variant="outlined" onClick={handleActivate}>Connect account</Button>
      </Grid>
    </GridStyled>
  )
}

export default Auth
