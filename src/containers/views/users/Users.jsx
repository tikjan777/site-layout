import React, {useState, memo} from 'react';
import {TextField, InputAdornment, Grid, Avatar} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import {SEARCH_USERS} from '../../url';
import {useDataFetch} from '../../../hooks';


const Users = () => {

  const [value, setValue] = useState('');
  const {data, setDynamicParams} = useDataFetch( SEARCH_USERS, false);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    value.trim().length > 2 &&
    setDynamicParams({
      q: `${value.trim()} type:user`,
      per_page: 10,
    })
  }

  const mapUsers = () => {

    console.log(data)

    return data?.items?.map((item)=>{
      return (
        <Grid item style={{margin : "20px", padding: "5px", border: "1px solid black"}} justify="center" alignItems="center" container direction="row" xs={12} key={item.id}>
          <Grid item xs={12} md={3}>
            <Avatar alt="user avatar" src={item.avatar_url} />
          </Grid>
          <Grid item xs={4} md={3}>{item.login}</Grid>
          <Grid item xs={4} md={3}>{item.type}</Grid>
          <Grid item xs={4} md={3}>{item.id}</Grid>
        </Grid>
      )
    })
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
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
          onChange={(ev)=>{
            setValue(ev.target.value)
          }}
          value={value}
        />
      </form>
      {mapUsers()}
    </>
  )
}
export default memo(Users);