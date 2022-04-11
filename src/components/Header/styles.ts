import styled from 'styled-components'

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  height: 4rem;
  min-height: 4rem;
  max-height: 4rem;
  width: 100%;
  background-color: ${props => props.theme.palette.primary.main};
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  margin-bottom: 4rem;

  svg {
    margin: 0.5rem 0 0 6rem;
  }
`
