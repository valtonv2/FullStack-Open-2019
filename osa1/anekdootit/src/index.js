import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

  const [all, setAll] = useState(anecdotes)
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(all[0])


const mostVotes = () => {

    const allVotes = all.map(obj => obj.votes)
    const maxIndex = allVotes.indexOf(Math.max.apply(Math, allVotes))
    const chosenObj = all[maxIndex]
    console.log(allVotes)
    return(chosenObj)
}

const [popularAnecdote, setPop] = useState(all[0])

  //Anekdootin vaihdosta huolehtiva tapahtumankäsittelijä

const switchHandler = () => {
  
  let newIndex = randomNum(all.length)
  const previousIndex = index

  //Estetään saman anekdootin ilmaantuminen 2 kertaa peräkkäin

  while(newIndex === previousIndex){
      newIndex = randomNum(all.length)
  }

  setIndex(newIndex)
  setSelected(all[newIndex])
  setAll(all)
  console.log("NewIndex: " , newIndex)
  console.log("Index" , index)
  console.log("Switch to ", index )

}

//Äänestämisestä huolehtiva tapahtumankäsittelijä

const voteHandler = () => {
  console.log("Voted")
  const copyObj = {...selected}
  const copyAll = [...all]
  copyObj.votes += 1
  copyAll[index] = copyObj
  setSelected(copyObj)
  setAll(copyAll)
  setPop(mostVotes())

   
}

  return (
    <div>
        <h2>Anecdote of the day</h2>
        <p>{selected.text}</p>
        <p>has {selected.votes} votes</p>

        <Button text = {'Vote'} handler = {voteHandler} /> 
        <Button text = {'Next anecdote'} handler = {switchHandler} />

        <h2>Anecdote with most votes</h2>
        <p>{popularAnecdote.text}</p>
        <p>has {popularAnecdote.votes} votes</p>
    </div>

    
  )
}

const anecdotes = [
  {
      text: 'If it hurts, do it more often',
      votes: 0
  },
  {
      text: 'Adding manpower to a late software project makes it later!',
      votes: 0
  },
  {
      text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0
  },
  {
      text:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0
  },
  {
      text:'Premature optimization is the root of all evil.',
      votes: 0
  },
  {
      text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0
  }
]

const Button = ({text, handler}) => {

    return(
    <div>
      <button onClick = {handler}>{text}</button>
    </div>
    )
}

const randomNum = (upper) => {

    return(Math.floor(Math.random() * upper ))
}





ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)