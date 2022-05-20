export type TransferFormValues = {
  address: string
  amount: string
}

export enum FIELD_NAMES {
  address = 'address',
  amount = 'amount'
}

export interface TransferFormHTMLInputElement extends HTMLInputElement {
  name: FIELD_NAMES,
  value: string
}

export type TransferFormErrorMessages = {
  [key in FIELD_NAMES]?: string
}

export type TransferFormState = {
  values: TransferFormValues
  errors: TransferFormErrorMessages
}
