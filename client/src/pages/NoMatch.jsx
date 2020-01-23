import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => (
  <>
  <h1>Error 404 - Page not found</h1>
  <button>
    <Link to='/'>Back</Link>
  </button>
  </>
)

export default NoMatch;