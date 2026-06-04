import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();

  return (
   <div className="min-h-screen flex flex-col items-center justify-center">
      <h1>Oops! Something went wrong.</h1>

      <p>
        {error?.statusText || error?.message || "An unexpected error occurred."}
      </p>

      <Link to="/">Go Back Home</Link>
    </div>
  )
}

export default ErrorPage
