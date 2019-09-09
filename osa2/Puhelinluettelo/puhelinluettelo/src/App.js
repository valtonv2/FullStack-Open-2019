import React, { useState } from 'react'

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


      <form>
        <div>Filter shown with <input value = {filterLetters} onChange = {handleFilter}/></div>

      </form>

      <form onSubmit={addNewPerson}>
        <div> name: <input value={newName} onChange = {handleNameWrite}/></div>
        <div> number: <input value = {newNum} onChange = {handleNumberWrite}/> </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Listofpeople list = {persons.filter(person => person.name.slice(0, filterLetters.length) === filterLetters)} />
       
      
    </div>
  )

}

const Person = ({name, number}) => {

return( 
<div>
<p>{name}  {number}</p>
</div>
)

}


//Komponentti joka renderöi ihmislistan. 
//Huolehtii filtteröinnistä.
const Listofpeople = ({list}) => {

return(

  <div>{list.map(dataItem => <Person key = {dataItem.name} name = {dataItem.name} number = {dataItem.number}/>)}</div>

)


}

export default App