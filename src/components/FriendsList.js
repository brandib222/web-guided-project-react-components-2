import React from 'react'
// 👉 1- FriendsList renders several Friend components, import Friend

import Friend from './Friend';

export default function FriendsList(props) {
  // 👉 2- What data does FriendsList need to do its job? Use destructuring
  //friends array!
  // console.log(props.changeStatus); --> gives you access to the props array

//same as below

// destructuring like the is a way to take individual keys out of an object, so you don't have to type props a thousand times
const{ friends, changeStatus } = props;
//const friends = props.friends;
//const changeStatus = props.changeStatus;

  return (
    <div className='list-friends container'>
      {/* 👉 3- We need to loop over the data rendering a Friend as we go */}
      {/* Each friend is going to need a `key` prop and also some other prop with data */}
      { friends.map(fr => {
        // if you get a warning about a key, add key like the one below
        //friend is the key and fr is the value
        return <Friend friend = {fr} changeStatus = {changeStatus} key = {fr.id}/>
      })}
    </div>
  )
}
