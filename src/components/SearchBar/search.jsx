import styles from './search.module.css'

import React from 'react'

export default function SearchBar() {
  return (
    <head>
      <img src="/images/logo.png" alt="logo" />
      <h1>Youtube</h1>
      <input type="search" placeholder='Search..'/>
      <button type='submit'>
        <img src="/images/search.png" alt="search" />
      </button>
    </head>
  )
}
