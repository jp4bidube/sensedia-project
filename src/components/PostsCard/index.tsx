import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions
} from '@material-ui/core'
import { useContext } from 'react'
import { useTheme } from 'styled-components'
import { PostsContext } from '../../context/PostsContext'
import { Post } from '../../utils/types/Post'
import PostsPagination from '../PostsPagination'
import { Tilte, Content } from './styles'

type PostsCardProps = {
  posts: Post[] | undefined
  isFetching: boolean
}

export const PostsCard = ({ posts, isFetching }: PostsCardProps) => {
  const date = new Date()
  const colors = useTheme()
  const { totalCount, titleSort, setTitleSort } = useContext(PostsContext)

  return (
    <Grid container spacing={4}>
      {posts !== undefined &&
        posts?.map(post => (
          <Grid item xs={12} md={3}>
            <Card key={post.id} variant="outlined">
              <CardContent>
                <Tilte style={{ color: '#111' }}>{post.title}</Tilte>
                <Typography
                  variant="subtitle2"
                  style={{ marginBottom: '1rem' }}
                >
                  John Doe
                </Typography>
                <Content>{post.body}</Content>
              </CardContent>
              <CardActions>
                <Typography
                  variant="subtitle2"
                  style={{ paddingLeft: '.4rem' }}
                >
                  {date.toLocaleString('pt-BR', { hour12: true })}
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      <Grid item xs={12} md={6}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="1rem 3rem"
        >
          </Box>
          
        
          <Typography color="textPrimary" variant="button">
            TOTAL RESULTS: {totalCount}
          </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
          <PostsPagination />
      </Grid>
    </Grid>
  )
}
