import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

  const [index, setIndex] = useState(0)
  const [all, setAll] = useState(anecdotes)
  const [selected, setSelected] = useState(all[randomNum(all.length-1)])


const mostVotes = () => {

    const allVotes = all.map(obj => obj.votes)
    const maxIndex = allVotes.indexOf(Math.max.apply(Math, allVotes))
    const chosenObj = all[maxIndex]
    console.log(chosenObj)
    return(chosenObj)
}

const [popularAnecdote, setPop] = useState(all[0])

  //Anekdootin vaihdosta huolehtiva tapahtumankäsittelijä

const switchHandler = () => {

  console.log("Kutsu tapahtuu")
  console.log(all.map( thing => thing.votes))
  setIndex(randomNum(all.length-1))
  setSelected(all[index])

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
  console.log(selected.votes)
   
}

  return (
    <div>
        <h2>Anecdote of the day</h2>
        <p>{selected.text}</p>
        <p>has {selected.votes} votes</p>

        <Button text = {'Vote'} handler = {voteHandler} /> <Button text = {'Next anecdote'} handler = {switchHandler} />

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