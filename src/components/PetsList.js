import React from 'react'
// 👉 1- We need the Pet component (pets prop) IMPORT ITTTT
import Pet from './Pet';
export default function PetsList(props) {
  const { pets } = props

  return (
    <div className='list-pets-friends container'>
      {/* 2- Loop over the data generating a Pet element as you go */}
      {/* What props does the Pet component expect? 
      below is the same as using curly brackets and return*/}
      {pets.map(pet => <Pet pet = {pet} />)}
    </div>
  )
}
