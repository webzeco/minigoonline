import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const NotFound = () => {
const history=useHistory();
  // useEffect(() => {
  //  history.push('/');
  // }, []);
  return (
  <div className='my-5 text-center ' style={{height:"300px"}}>
    <h1 className='display-3'>404 - Not Found!</h1>
    <Link to="/">
      Go Home
    </Link>
  </div>
  
);
 }
export default NotFound;