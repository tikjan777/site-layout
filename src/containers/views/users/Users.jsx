import React, {useState} from 'react';
import {TextField, InputAdornment, Card} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import {SEARCH_USERS} from '../../url';
import axios from 'axios';

const Users = () => {

  const [value, setValue] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    searchUsers()

  }

  const searchUsers = async () => {
    try {
      const resp = await axios.get(SEARCH_USERS, {
        params: {
          q: `${value.trim()} type:user`,
          per_page: 10,
        }
      });
      const data = await resp.data;
      setData(data.items)

    }
    catch (e) {
      console.log(e)
    }
  }

  const mapUsers = () => {

    return data?.map((item, ind)=>{
      return <Card key={item.id}>{item.login}</Card>
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
export default Users;