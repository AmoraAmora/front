import React, { useState, useEffect } from 'react'
import {
  useEthers,
  useEtherBalance,
} from '@usedapp/core'
import { utils } from 'ethers'
import {
  Typography, Grid, CircularProgress, Stack, IconButton, Tooltip,
} from '@mui/material'
import ContentCopy from '@mui/icons-material/ContentCopy'
import { useCopyToClipboard } from 'react-use'

import { GridStyled, HeaderStyled } from './styled'
import AccountBalances from '../Balances'

function AccountNotConnected() {
  const [accountInfoLoaded, setAccountInfoLoaded] = useState(false)
  const { account } = useEthers()
  const etherBalance = useEtherBalance(account)

  const balance = etherBalance ? utils.formatEther(etherBalance) : ''

  useEffect(() => {
    if (etherBalance) {
      setAccountInfoLoaded(true)
    } else {
      setAccountInfoLoaded(false)
    }
  }, [etherBalance])

  // Copy to clipboard functionality
  const [, copyToClipboard] = useCopyToClipboard()
  const handleCopyAddress = () => copyToClipboard(account || '')

  return (
    <GridStyled container direction="column" alignItems="center">
      <HeaderStyled variant="h6" align="left">Account info:</HeaderStyled>

      {!accountInfoLoaded && (
        <Grid container flexGrow={1} alignItems="center" justifyContent="center">
          <CircularProgress />
        </Grid>
      )}

      {accountInfoLoaded && (
        <Stack spacing={2} maxWidth="100%">
          <div>
            <Typography variant="subtitle2" align="left">
              Account address:
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Tooltip title={account || ''}>
                <Typography variant="body2" noWrap>
                  {account}
                </Typography>
              </Tooltip>
              <Tooltip title="Copy to clipboard">
                <IconButton aria-label="copy-to-clipboard" size="small" onClick={handleCopyAddress}>
                  <ContentCopy fontSize="small" />
                </IconButton>
              </Tooltip>
            </Stack>
          </div>

          <div>
            <Typography variant="subtitle2" align="left">
              Ether balance:
            </Typography>
            <Typography variant="body2">
              {balance}
            </Typography>
          </div>
          <AccountBalances />
        </Stack>
      )}
    </GridStyled>
  )
}

export default AccountNotConnected
