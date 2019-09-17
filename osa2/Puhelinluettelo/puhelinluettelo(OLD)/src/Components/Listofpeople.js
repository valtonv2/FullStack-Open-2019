import React from 'react'
import Person from './Person'

//Komponentti joka renderöi ihmislistan. 
const Listofpeople = ({list}) => {

    return(
    
      <div>{list.map(dataItem => <Person key = {dataItem.name} name = {dataItem.name} number = {dataItem.number}/>)}</div>
    
    )

}

export default Listofpeople