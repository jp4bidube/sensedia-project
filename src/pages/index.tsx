import React, { useContext, useEffect } from 'react'
import {
  Grid,
  InputAdornment,
  Button,
  MenuItem,
  TextField,
  Typography,
  Box,
  ButtonBase,
  CircularProgress
} from '@material-ui/core'
import { FaListUl, FaSearch, FaGripHorizontal } from 'react-icons/fa'
import { useState } from 'react'
import Header from '../components/Header'
import { Container } from '../styles/pages/Home'
import { PostsTable } from '../components/PostsTable'
import { usePosts } from '../services/hooks/usePosts'
import { PostsContext } from '../context/PostsContext'
import { PostsCard } from '../components/PostsCard'

const Home = () => {
  const [searchValue, setSearchValue] = useState('')
  const {
    search,
    setSearch,
    currentPage,
    setCurrentPage,
    titleSort,
    setTotalCount,
    postLayout,
    setPostLayout
  } = useContext(PostsContext)

  const { data, isLoading, isFetching, isError } = usePosts(
    currentPage,
    titleSort,
    search,
    postLayout
  )

  useEffect(() => {
    setTotalCount(data?.total !== undefined ? data.total : 0)
  }, [data])

  const handleSearch = () =>{
    setSearch(searchValue)
    setCurrentPage(1)
  }

  return (
    <>
      <Header />
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={6}>
            <TextField
              fullWidth
              value={searchValue}
              label="Type for search..."
              variant="filled"
              size="small"
              onChange={e => setSearchValue(e.target.value)}
            />
          </Grid>
          <Grid item md={2}>
            <TextField
              value={postLayout}
              fullWidth
              select
              variant="filled"
              size="small"
              defaultValue="1"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {postLayout === '1' ? (
                      <FaListUl color="#6a767e" />
                    ) : (
                      <FaGripHorizontal color="#6a767e" />
                    )}
                  </InputAdornment>
                )
              }}
              onChange={e => setPostLayout(e.target.value)}
            >
              <MenuItem value="1">List View</MenuItem>
              <MenuItem value="2">Grid View</MenuItem>
            </TextField>
          </Grid>
          <Grid item>
            <Button
              startIcon={<FaSearch size={15} style={{ marginLeft: '1rem' }} />}
              variant="contained"
              onClick={handleSearch}
            >
              <Typography style={{ padding: '0.5rem 1rem 0.5rem 0' }}>
                SEARCH
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <ButtonBase>
              <Typography
                color="primary"
                variant="h6"
                onClick={() => setSearchValue('')}
              >
                CLEAR
              </Typography>
            </ButtonBase>
          </Grid>
          <Grid item xs={12}>
            {isLoading ? (
              <Grid container alignItems="center" justifyContent="center">
                <CircularProgress />
                <Box mt={15}></Box>
              </Grid>
            ) : isError ? (
              <Grid container alignItems="center" justifyContent="center">
                <Box mt={15}>
                  <Typography color="primary" variant="h6">
                    Erro ao obter Posts
                  </Typography>
                </Box>
              </Grid>
            ) : postLayout === '1' ? (
              <PostsTable posts={data?.posts} isFetching={isFetching} />
            ) : (
              <PostsCard posts={data?.posts} isFetching={isFetching} />
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
