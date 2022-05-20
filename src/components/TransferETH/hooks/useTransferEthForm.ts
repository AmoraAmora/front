import { ChangeEvent, useState } from 'react'
import { utils } from 'ethers'
import {
  FIELD_NAMES, TransferFormHTMLInputElement, TransferFormState,
} from './interface'

const INIT_FORM_STATE: TransferFormState = {
  values: {
    address: '',
    amount: '',
  },
  errors: {},
}

const ERROR_MESSAGES = {
  [FIELD_NAMES.address]: 'Enter correct address',
  [FIELD_NAMES.amount]: 'Enter correct amount',
} as const

export function useTransferEthForm() {
  const [{ values, errors }, setTransferForm] = useState<TransferFormState>(INIT_FORM_STATE)

  const resetForm = () => setTransferForm(INIT_FORM_STATE)

  const setError = (fieldName: FIELD_NAMES, errorMsg: string) => {
    setTransferForm((state) => ({
      ...state,
      errors: {
        ...state.errors,
        [fieldName]: errorMsg,
      },
    }))
  }

  const resetErrors = () => {
    setTransferForm((state) => ({
      ...state,
      errors: {},
    }))
  }

  const removeError = (fieldName: FIELD_NAMES) => {
    const nextErrors = { ...errors }
    delete nextErrors[fieldName]

    setTransferForm((state) => ({
      ...state,
      errors: nextErrors,
    }))
  }

  const handleValidate = () => {
    const errorsList = []

    // Check if address is correct
    if (!utils.isAddress(values.address)) {
      errorsList.push(values.address)
      setError(FIELD_NAMES.address, ERROR_MESSAGES.address)
    }

    if (!values.amount) {
      errorsList.push(values.amount)
      setError(FIELD_NAMES.amount, ERROR_MESSAGES.amount)
    }

    if (!errorsList.length) resetErrors()

    return !!errorsList.length
  }

  const onChange = (evt: ChangeEvent<TransferFormHTMLInputElement>) => {
    const { target } = evt
    const { name, value } = target

    if (errors[name]) {
      removeError(name)
    }

    setTransferForm((state) => ({
      ...state,
      values: {
        ...state.values,
        [name]: value,
      },
    }))
  }

  const onFormSubmit = (cb?: Function) => {
    if (!handleValidate()) {
      if (cb) cb()
    }
  }

  const fieldHasError = (fieldName: FIELD_NAMES) => !!errors[fieldName]
  const getErrorText = (fieldName: FIELD_NAMES) => (
    fieldHasError(fieldName) ? ERROR_MESSAGES[fieldName] : ' '
  )

  return {
    onFormSubmit,
    onChange,
    fieldHasError,
    getErrorText,
    resetForm,
    values,
    errors,
  }
}
