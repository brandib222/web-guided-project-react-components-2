import React from 'react'

export default function Search(props) {
  // STRETCH - What prop do we need to be able to change the value of
  // the search term (which is state that lives in the top-level component)?
  const changeHandler = event => {
    // STRETCH - On 'change' of the input we should set a new search term in app state
    // if you have an input box, whenever you type in it, you get the dom value back from the event
    const searchTerm = event.target.value;
    props.setSearchterm(searchTerm);
  }

  return (
    <div className='search-friends container'>
      <input onChange={changeHandler} />
    </div>
  )
}
