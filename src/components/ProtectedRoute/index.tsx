/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import {
  useEthers,
} from '@usedapp/core'
import { Redirect, Route } from 'react-router-dom'

interface LoggedProtectProps {
  children: React.ReactNode;
  exact: boolean;
  path: string;
}

function ProtectedRoute({ children, ...rest }: LoggedProtectProps) {
  const { account } = useEthers()

  return (
    <Route
      {...rest}
      render={({ location }) => (account ? (
        children
      ) : (
        <Redirect to={{ pathname: 'auth', state: { from: location } }} />
      ))}
    />
  )
}
export default ProtectedRoute
