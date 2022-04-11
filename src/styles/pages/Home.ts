import styled from 'styled-components'
import { Container as MuiContainer } from '@material-ui/core';

export const AppContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  overflow-y: auto;
`

export const Container = styled(MuiContainer).attrs({ maxWidth: 'lg' })``;
