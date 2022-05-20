import { useEffect } from 'react'
import { useSendTransaction } from '@usedapp/core'
import { toast } from 'react-toastify'
import { usePrevious } from 'react-use'

export function useTransferSubmit(onTransferSuccess: () => void) {
  const { sendTransaction, state } = useSendTransaction({ transactionName: 'Send Ethereum' })
  const { status, errorMessage } = state
  const prevStatus = usePrevious(status)

  useEffect(() => {
    if (errorMessage) {
      toast(errorMessage, { type: 'error' })
    }
  }, [errorMessage])

  useEffect(() => {
    if (status !== prevStatus && status === 'Success') {
      toast('All good! Transfer been made 🚀', { type: 'success' })
      onTransferSuccess()
    }
  }, [status])

  return {
    sendTransaction,
    status,
  }
}
