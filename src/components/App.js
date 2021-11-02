// This is the top-level component
// so we'll keep application state at this level.
// 👉 1- Import the state hook!
import React, { useState }from 'react'
import FriendsList from './FriendsList'
import Search from './Search'

// default export -- dont use curly brackets -- can only be one default export
// named export -- use curly brackets -- can have multiple

// 👉 2- Import the dummy data that will power the application.
// (Tomorrow we'll fetch the data from an API instead.)

import friendsData from '../dummy-data/friends';

export default function App() {
  // 👉 3- Initialize a slice of state (state variable) to keep track of the data
  // using the dummy data as the initial value of the slice of state
  // have to put data into a state so that the program knows to change it
  const [friends, setFriends] = useState(friendsData);



  // 👉 4- Initialize a slice to keep track of the value of the search box
  // using an empty string as the initial value of the slice

  const [searchTerm, setSearchTerm] = useState('');

  // 👉 5- Build a `changeStatus` function that takes an id and
  // changes the `married` from true to false and viceversa

  const changeStatus = id => {
    // want to change married to true or false and back
    // we never mutate state directly, have to use setter functions
    // best friends map, filter, find and reduce -- unlike a for loop, they do not mutate the array directly

    // tell js how to hold on to what we're returning
    //take friends one at a time and passes them through a function
    const updatedFriends = friends.map(friend => {
      // if the id is what we're looking for and pass in, we're going to spread the friend (put into new object), and update the married key
      return friend.id === id ? {...friend, married : !friend.married} : friend
    })
    //creates a new copy of friends array and updates the friend that needs updated
    setFriends(updatedFriends);

  }

  // STRETCH - Make a helper function that returns
  // a filtered array of friends data (filtering by search term)

  return (
    <div className='app-friends container'>
      {/* 👉 6- Render the Search component -- capitalize so Javascript knows what's up */}
    
      <Search />
      {/* STRETCH - Changes to the input should update the search term */}

      {/* 👉 7- Render the FriendsList component */}
      {/* What prop/props does FriendsList need? */}
    </div>
  )
}
