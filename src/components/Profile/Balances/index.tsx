import React from 'react'
import {
  Typography,
} from '@mui/material'

function AccountBalances() {
  return (
    <>
      <div>
        <Typography variant="subtitle2" align="left">
          ETH balance:
        </Typography>
        <Typography variant="body2">
          balance
        </Typography>
      </div>
      <div>
        <Typography variant="subtitle2" align="left">
          USDT balance:
        </Typography>
        <Typography variant="body2">
          balance
        </Typography>
      </div>
      <div>
        <Typography variant="subtitle2" align="left">
          DVF balance:
        </Typography>
        <Typography variant="body2">
          balance
        </Typography>
      </div>
    </>
  )
}

export default AccountBalances
