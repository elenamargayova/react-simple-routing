import React from 'react';
///import {BrowserRouter, Route, Link} from 'react-router-dom';
const PostItem = (props) => {
  return (
    <div>
      {props.match.params.id}
    </div>)
}

export default PostItem;
