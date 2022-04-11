import { useQuery } from 'react-query'
import { Post } from '../../utils/types/Post'
import { api } from '../api'

type postsProps = {
  posts: Post[]
  total: number
}

export async function getPosts(
  page: number,
  order: string,
  search: string,
  postLayout: string
): Promise<postsProps> {
  const { data, headers } = await api.get('/posts', {
    params: {
      _page: page,
      _sort: 'title',
      _order: order,
      _limit: postLayout === '1' ? 10 : 8,
      q: search
    }
  })
  return { posts: data, total: Number(headers['x-total-count']) }
}

export function usePosts(
  page: number,
  order: string,
  search: string,
  postLayout: string
) {
  return useQuery(
    ['posts', page, order, search, postLayout],
    () => getPosts(page, order, search, postLayout),
    {
      staleTime: 1000 * 5
    }
  )
}
