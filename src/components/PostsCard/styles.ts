import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const Content = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
export const Tilte = styled.strong`
  color: #111;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden,
`


