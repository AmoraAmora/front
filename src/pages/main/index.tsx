import React from 'react'
import { ToastContainer } from 'react-toastify'
import Depositing from '../../components/Depositing'
import Profile from '../../components/Profile'
import Trading from '../../components/Trading'

import {
  ContainerStyled, Layout, PaperStyled, ProfileStyled, DepositStyled, TradeStyled,
} from './styled'

function Main() {
  return (
    <>
      <ContainerStyled maxWidth="md">
        <Layout>
          <ProfileStyled>
            <PaperStyled>
              <Profile />
            </PaperStyled>
          </ProfileStyled>
          <DepositStyled>
            <Depositing />
          </DepositStyled>
          <TradeStyled>
            <Trading />
          </TradeStyled>
        </Layout>
      </ContainerStyled>
      <ToastContainer />
    </>
  )
}

export default Main
