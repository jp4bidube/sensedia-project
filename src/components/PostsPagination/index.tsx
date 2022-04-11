import React, { useContext } from 'react'
import { Pagination } from '@material-ui/lab'
import { PostsContext } from '../../context/PostsContext'

const PostsPagination = () => {
  const { currentPage, setCurrentPage, totalCount } = useContext(PostsContext)

  return (
    <Pagination
      page={currentPage}
      count={totalCount !== undefined ? Math.ceil(totalCount / 10) : 0}
      color="primary"
      onChange={(_, page) =>
        setCurrentPage(page)
      }
    />
  )
}

export default PostsPagination
