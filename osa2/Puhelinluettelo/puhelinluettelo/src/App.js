import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const [newNum, setNewNum] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div> name: <input value={newName} onChange = {handleNameWrite}/></div>
        <div> number: <input value = {newNum} onChange = {handleNumberWrite}/> </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
       {persons.map(person => <li key={person.name}>{person.name}  {person.number}</li>)}
      </ul>
    </div>
  )

}

export default App