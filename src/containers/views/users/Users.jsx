import React, {useState, memo, useEffect} from 'react';
import {TextField, InputAdornment, Grid, Avatar} from '@material-ui/core';
import { Alert, AlertTitle, Pagination} from '@material-ui/lab';
import {AccountCircle} from '@material-ui/icons';
import {SEARCH_USERS} from '../../url';
import {useDataFetch, useCustomDebounce} from '../../../hooks';
import './Users.css';

const Users = () => {

  const [value, setValue] = useState('');
  const {data, setDynamicParams} = useDataFetch( SEARCH_USERS, false);
  const debouncedValue = useCustomDebounce(value, 500);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  useEffect(()=>{
    setPageNumber(1)
    getUsers(1)
  }, [debouncedValue]);

  useEffect(()=>{
    getUsers()
  }, [pageNumber]);

  useEffect(()=>{
    let pages = data ? Math.ceil( data.total_count / 10) : 0;
    pages = pages > 100 ? 100 : pages;
    setPageCount(pages)
  }, [data]);

  const getUsers = (passedPageNumber) => {

    debouncedValue.trim().length > 2 &&
    setDynamicParams({
      q: `${debouncedValue.trim()} type:user`,
      per_page: 10,
      page: passedPageNumber ? passedPageNumber: pageNumber
    })
  }

  const handleChange = (ev) => {
    setValue(ev.target.value)
  };

  const mapUsers = () => {
    return data?.items?.map((item)=>{
      return (
        <Grid  className="Users__row" justify="center" alignItems="center" container direction="row" key={item.id}>
          <Grid item xs={12} md={3}>
            <Avatar style={{}} alt="user avatar" src={item.avatar_url} />
          </Grid>
          <Grid item xs={12} md={3}>{item.login}</Grid>
          <Grid item xs={12} md={3}>{item.type}</Grid>
          <Grid item xs={12} md={3}>{item.id}</Grid>
        </Grid>
      )
    })
  };

  return(
    <>
      <TextField
        label="Search Users"
        size='medium'
        name='userSearch'
        variant='outlined'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        onChange={handleChange}
        value={value}
      />
      {data?.items?.length ?
        mapUsers()
        :
        debouncedValue.trim().length > 2 &&
          <Alert style={{width: "300px", margin: "auto", marginTop: "50px"}} severity="info">
            <AlertTitle>No Users Found</AlertTitle>
            There were no users found with <strong>{debouncedValue}</strong> username
          </Alert>
      }
      <Pagination style={{margin: 'auto', marginTop: '50px', width: "fit-content"}}
                  page={pageNumber}
                  count={pageCount}
                  variant="outlined"
                  shape="rounded"
                  onChange={(ev, page)=>{ setPageNumber(page) }} />
    </>
  )
};
export default memo(Users);