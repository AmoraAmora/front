import React from 'react'
import { Button, TextField } from '@mui/material'
import { useEthers } from '@usedapp/core'
import { utils } from 'ethers'

import { GridStyled, HeaderStyled, StackStyled } from './styled'
import { FIELD_NAMES } from './hooks/interface'
import { useTransferEthForm } from './hooks/useTransferEthForm'
import { useTransferSubmit } from './hooks/useTransferSubmit'

function TransferETH() {
  const {
    onFormSubmit, onChange, fieldHasError, getErrorText, values, errors, resetForm,
  } = useTransferEthForm()
  const { account } = useEthers()
  const { sendTransaction, status } = useTransferSubmit(resetForm)

  const handleTransfer = () => {
    const { amount } = values
    let callback
    if (account && amount) {
      callback = () => sendTransaction({ to: account, value: utils.parseEther(`${amount}`) })
    }
    onFormSubmit(callback)
  }

  const actionInProgress = status === 'PendingSignature' || status === 'Mining'
  const fieldsDisabled = (
    !account || actionInProgress
  )
  const btnDisabled = (
    !account || actionInProgress || !!Object.keys(errors).length
  )
  const btnLabel = actionInProgress ? status : 'Transfer'

  return (
    <GridStyled container direction="column">
      <HeaderStyled variant="h6" align="left">TRANSFER ETH:</HeaderStyled>
      <StackStyled spacing={1}>
        <TextField
          label="To address"
          variant="standard"
          size="small"
          disabled={fieldsDisabled}
          value={values[FIELD_NAMES.address]}
          error={fieldHasError(FIELD_NAMES.address)}
          helperText={getErrorText(FIELD_NAMES.address)}
          name={FIELD_NAMES.address}
          onChange={onChange}
        />
        <TextField
          label="Amount"
          variant="standard"
          size="small"
          type="number"
          disabled={fieldsDisabled}
          value={values[FIELD_NAMES.amount]}
          error={fieldHasError(FIELD_NAMES.amount)}
          helperText={getErrorText(FIELD_NAMES.amount)}
          name={FIELD_NAMES.amount}
          onChange={onChange}
        />

        <Button variant="outlined" onClick={handleTransfer} disabled={btnDisabled}>{btnLabel}</Button>
      </StackStyled>
    </GridStyled>
  )
}

export default TransferETH
