import React from 'react'
import { useRouteError } from 'react-router-dom';

export const NotFoundPage = () => {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div>
        <h1>Oops! 404!</h1>
      </div>
    );}
