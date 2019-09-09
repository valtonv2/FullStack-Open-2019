import React, { useState } from 'react'
import Personform from './Components/Personform'
import Filterform from './Components/Filterform'
import Listofpeople from './Components/Listofpeople'


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 


  const [ newName, setNewName ] = useState('')

  const [newNum, setNewNum] = useState('')

  const [filterLetters, setFilterLetters] = useState('')

//Tapahtumankäsittelijäetodi joka lisää henkilölistaan uuden ihmisen
  const addNewPerson = (event) => {
    
    event.preventDefault()

    if(!persons.map(person => person.name).includes(newName)){
    const newObj ={
     name: newName,
     number: newNum
    }
   
    setPersons(persons.concat(newObj))
    setNewName('')
    setNewNum('')

    }else{

      alert(`${newName} is already added to phonebook`)

    }
      
  }

/*Metodi joka hoitaa newname-tilan päivityksen kenttään
  kirjoitettaessa.
*/
  const handleNameWrite = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberWrite = (event) => {
    setNewNum(event.target.value)
  }

  const handleFilter = (event) => {
    setFilterLetters(event.target.value)

    console.log(filterLetters)

  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filterform 
      filterLetters = {filterLetters} 
      changeHandler = {handleFilter}
      />


      <Personform 
      addFunction = {addNewPerson} 
      currentName = {newName} 
      nameChangeHandler = {handleNameWrite} 
      currentNum = {newNum} 
      numChangeHandler = {handleNumberWrite} 
      />

  
      <h2>Numbers</h2>
      <Listofpeople list = {persons.filter(person => person.name.slice(0, filterLetters.length) === filterLetters)} />
       
      
    </div>
  )

}




export default App