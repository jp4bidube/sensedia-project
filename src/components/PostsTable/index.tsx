import {
  Box,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  LinearProgress,
  CircularProgress
} from '@material-ui/core'
import { useContext, useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useTheme } from 'styled-components'
import { PostsContext } from '../../context/PostsContext'
import { Post } from '../../utils/types/Post'
import PostsPagination from '../PostsPagination'

type PostsTableProps = {
  posts: Post[] | undefined
  isFetching: boolean
}

export const PostsTable = ({ posts, isFetching }: PostsTableProps) => {
  const date = new Date()
  const colors = useTheme()
  const { totalCount ,titleSort, setTitleSort} = useContext(PostsContext)

  const handleChangeSort = () => {
    titleSort === 'desc' ? setTitleSort('asc') : setTitleSort('desc')
  }

  return (
    <TableContainer>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <Box display="flex" justifyContent="center" alignItems="center">
                {isFetching && (
                  <CircularProgress size="1rem" style={{ marginRight: 10 }} />
                )}
                POSTID
              </Box>
            </TableCell>
            <TableCell align="center">
              <Box display="flex" justifyContent="center" alignItems="center">
                TITLE{' '}
                {titleSort === 'desc' ? (
                  <FaAngleDown
                    onClick={handleChangeSort}
                    color={colors.palette.primary.main}
                    size={20}
                    style={{ marginLeft: '.5rem' }}
                  />
                ) : (
                  <FaAngleUp
                    onClick={handleChangeSort}
                    color={colors.palette.primary.main}
                    size={20}
                    style={{ marginLeft: '.5rem' }}
                  />
                )}
              </Box>
            </TableCell>
            <TableCell align="center">AUTHOR</TableCell>
            <TableCell align="center">BODY</TableCell>
            <TableCell align="center">CREATION DATE</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {posts !== undefined &&
            posts?.map(post => (
              <TableRow key={post.id}>
                <TableCell align="center">{post.id}</TableCell>
                <TableCell align="center">
                  <strong style={{ color: '#111' }}>{post.title}</strong>
                </TableCell>
                <TableCell align="center">John Doe</TableCell>
                <TableCell align="center">{post.body}</TableCell>
                <TableCell align="center">
                  {date.toLocaleString('pt-BR', { hour12: true })}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="1rem 3rem"
      >
        <Typography color="textPrimary" variant="subtitle2">
          TOTAL RESULTS: {totalCount}
        </Typography>
        <PostsPagination />
      </Box>
    </TableContainer>
  )
}
