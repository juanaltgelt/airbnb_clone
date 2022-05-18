import React from 'react'
import Card from './Card'
import data from './data'


function CardList() {
    const cards = data.map((item => {
    return <Card key={item.id} {...item}/>
  }))
  return (
    <div>
        {cards}
    </div>
  )
}

export default CardList