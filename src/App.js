import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Form from './components/Form'
import CardList from './components/CardList'

function App() {

  //cards component will hold data of search results
  const [cards, setCards] = useState([])

/*cards are an array hence use syntax [... cards,card] which creates a new array with 
the values of cards, adding the card. Pass this function as a prop to the From component*/ 

  const addNewCard = (card) => {
    setCards([...cards, card])
  }

  return (
    <div>
      <h1 className='pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900'>
        Search a GitHub User
      </h1>
      <Form onSubmit={addNewCard} />  {/*passing addNewCard function as  aprop to Form component*/}
      <CardList cards={cards} />
    </div>
  )
}
export default App