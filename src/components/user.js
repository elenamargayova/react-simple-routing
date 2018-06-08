import React from 'react';
import userHoc from '../hoc/userHoc';

const User = (props) => {
    console.log(props)
  return (
    <div>User1</div>
  )
}

export default userHoc(User,'Hello') ;
