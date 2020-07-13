// We need the state hook
import React, { useState } from 'react'

// These constants could live in another module
const weapons = ['🗿', '📜', '✂️']

// It's less error-prone to work with variables than hard-coded strings
const [rock, paper, scissors] = weapons


export default function RockPaperScissors(props) {
  // 1- 👉👉👉 CREATE SLICES OF APPLICATION STATE (USING TOP-LEVEL COMPONENT STATE)

  // We need several slices of component state, to keep track of the general state of the app:
  //   - the `round` number about to be played, initialize at 1
  const [round, setRound] = useState(1)
  //   - the number of 'wins', initialize at number 0
  const [wins, setWins] = useState(0)
  //   - the number of 'losses', initialize at number 0
  const [losses, setLosses] = useState(0)
  //   - the 'message' displayed on the screen, initialize at string 'Fight!'
  const [message, setMessage] = useState('About to fight!!')

  // 2- 👉👉👉 We DO NOT need a slice for rounds tied, as we can calculate that info using other slices
  // 3- 👉👉👉 REPLACE DOWN IN THE JSX THE HARD CODED PIECES OF DATA WITH PIECES OF STATE OR PROPS
  // 4- 👉👉👉 ATTACH IN THE JSX A CLICK HANDLER THAT UPDATES STATE ON USER INTERACTION


  const play = event => {
    // 5- 👉👉👉 IMPLEMENT THE 'play' HANDLER!

    // ⛔⛔⛔ DO NOT MUTATE STATE, EVER! PROVIDE A NEW ONE ⛔⛔⛔

    // 5A- Update the round count
    setRound(round + 1)

    // 5B- Pull out which weapon the user selected from the event.target
    // this is the player weapon
    const weapon = event.target.name

    // 5C- this is the computer weapon (random number either 0 or 1 or 2)
    const computerWeapon = weapons[Math.floor(Math.random() * 3)]

    // 5D- change the state depending on the pair of weapons
    
  }

  return (
    <div className='container'>
      {/* Replace hard-coded round using props */}
      <div className='player'>Welcome, Ava</div>
      {/* Replace hard-coded round using state */}
      <h2>Round: {round}</h2>
      {/* Replace hard-coded stats using state */}
      <h3>won: {wins} | lost: {losses} | tied: {round - 1 - (wins + losses)}</h3>
      <h1 className='message'>{message}</h1>

      <div className='buttons'>
        <h3>Choose wisely:</h3>
        <div onClick={play}>
          <button name={rock}>{rock}</button>
          <button name={paper}>{paper}</button>
          <button name={scissors}>{scissors}</button>
        </div>
      </div>
    </div>
  )
}

// STRETCH- 👉👉👉 ADD A RESTART BUTTON, BREAK INTO SUBCOMPONENTS...
