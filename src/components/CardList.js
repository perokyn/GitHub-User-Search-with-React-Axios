import React from 'react'
import Card from './Card.js'


//CardList receives a prop  and iterates trough it rendering card component for each item it finds
const CardList = (props) => (
  <div id="container" className="mt-10">
    {props.cards.map((card) => (
      <Card {...card} /> //Card component for each data destructured {...card}
    ))}
  </div>
)

/*In each iteration of map() it passes all the card information as props to the Card 
component, using the special object destructuring syntax {...card}*/


export default CardList