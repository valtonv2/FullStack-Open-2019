import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

//Tapahtumankäsittelijäetodi joka lisää henkilölistaan uuden ihmisen
  const addNewPerson = (event) => {
    
    event.preventDefault()

    if(newName !== ''){

    const newObj = {name: newName}
    setPersons(persons.concat(newObj))
    setNewName('')

    }else{

      console.log('No name given.')

    }
      
  }

/*Metodi joka hoitaa newname-tilan päivityksen kenttään
  kirjoitettaessa.
*/
  const handleWrite = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange = {handleWrite}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
       {persons.map(person => <li key={person.name}>{person.name}</li>)}
      </ul>
    </div>
  )

}

export default App