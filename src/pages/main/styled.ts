import styled from '@emotion/styled'
import { Container, Paper } from '@mui/material'

export const ContainerStyled = styled(Container)`
  padding-top: 65px;
  padding-bottom: 64px;
  height: 600px;
`

export const Layout = styled.div`
  height: 100%;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: minmax(0, 2fr) 1fr 1fr 1fr;
`

export const PaperStyled = styled(Paper)`
  height: 100%;
`
export const ProfileStyled = styled.div`
  grid-column: 1;
  grid-row: 1 / 3;
`

export const DepositStyled = styled.div`
  grid-column: 2 / span 3;
  grid-row: 1;
`

export const TradeStyled = styled.div`
  grid-column: 2 / span 3;
  grid-row: 2;
`
