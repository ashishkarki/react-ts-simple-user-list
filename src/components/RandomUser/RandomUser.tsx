import React from 'react'

const RandomUser = () => {
  return (
    <div
      style={{
        border: '2px dashed cyan',
        marginLeft: '40vw',
        marginRight: '0.5rem',
        padding: '0.5rem',
        wordWrap: 'break-word',
        wordBreak: 'break-all',
      }}
    >
      <label htmlFor='populate-btn'>Click to Populate one Random User</label>

      <button id='populate-btn'>Add User</button>
    </div>
  )
}

export default RandomUser
