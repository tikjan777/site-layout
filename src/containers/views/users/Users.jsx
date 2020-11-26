import React, {useState} from 'react';
import {TextField, InputAdornment} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';

const Users = () => {

  const [value, setValue] = useState('');

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
        onChange={(ev)=>{
          setValue(ev.target.value)
        }}
        value={value}
      />
    </>
  )
}
export default Users;