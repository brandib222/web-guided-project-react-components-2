import React from 'react'
import PetsList from './PetsList'

export default function Friend(props) {
  // 👉 1- What does a Friend need?
  // add the below line so that you don't have to write props.friend.name -- can just write friend.name now
const {friend, changeStatus} = props;
  return (
    <div className='friend-friends container'>
      {/* 👉 2- Fix the JSX so it displays real info coming into the component --> change the hardcoded keys so that they are '{props.friend.name etc}'*/}
      <div className='friend-info'>
        <div >
          <h3>Name: {friend.name}</h3>
          <p>Age: {friend.age}</p>
          {/*if married is true, type married, else single*/}
          <p>Married: {friend.married ? 'Married' : 'Single'} 
          {/* add onclick to button so that it calls the changesStatus function on the friend.id  */}
          <button onClick={() => changeStatues(friend.id)}>change</button></p>
          <div>Likes:
            <ul>
              {/* 👉 3- Loop over the friend's hobbies and generate <li/> elements as you go 
              add index because it has more than one thing in the array and no unique ids*/}
              {friend.hobbies.map(hobby index) => {
                return <li key = {index}>{hobby}</li>
              })}
            </ul>
          </div>
        </div>

        <div>
          {/* 👉 3- What data does the PetsList need? */}
          {/* What is the exact name of the prop/props it expects? */}
          {/* Is the data around here somewhere so I may pass it? 
          
          add everything after pets so that it passes to friends*/}
          <PetsList pets = {friend.pets}/>
        </div>
      </div>
    </div>
  )
}
