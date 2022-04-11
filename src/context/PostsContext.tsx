import React, { createContext, useState } from 'react'
type PostsContextType = {
  postLayout: string
  setPostLayout: React.Dispatch<React.SetStateAction<string>>
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  totalCount: number
  setTotalCount: React.Dispatch<React.SetStateAction<number>>
  titleSort: string
  setTitleSort: React.Dispatch<React.SetStateAction<string>>
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}
export const PostsContext = createContext({} as PostsContextType)

const PostsContextProvider: React.FC = ({ children }) => {
  const [postLayout, setPostLayout] = useState<string>('1')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalCount, setTotalCount] = useState<number>(0)
  const [titleSort, setTitleSort] = useState<string>('desc')
  const [search, setSearch] = useState<string>('')

  return (
    <PostsContext.Provider
      value={{
        postLayout,
        setPostLayout,
        currentPage,
        setCurrentPage,
        totalCount,
        setTotalCount,
        titleSort,
        setTitleSort,
        search,
        setSearch
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}

export default PostsContextProvider
