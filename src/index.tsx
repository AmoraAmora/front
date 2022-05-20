import React from 'react'
import ReactDOM from 'react-dom/client'
import { DAppProvider, Config, Rinkeby } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'
import 'react-toastify/dist/ReactToastify.css'
import { ApolloProvider } from '@apollo/client'

import App from './components/App'
import reportWebVitals from './reportWebVitals'
import client from './client'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)

const config: Config = {
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Rinkeby.chainId]: getDefaultProvider('rinkeby', {
      alchemy: process.env.REACT_APP_ALCHEMY_API_KEY,
      infura: process.env.REACT_APP_INFURA_PROJECT_ID,
    }),
  },
}

root.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </DAppProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
