import React from 'react'
import { name, random } from 'faker'
import { IUser } from '../../App.types'

interface IRandomUser {
  addRandomUser: (user: IUser) => void
}

const RandomUser: React.FC<IRandomUser> = ({ addRandomUser }) => {
  const buildRandomUser = () => {
    const randomUser: IUser = {
      username: `${name.firstName()} ${name.lastName()}`,
      age: random.number(100),
      profession: name.jobTitle(),
    }

    addRandomUser(randomUser)
  }

  return (
    <div
      style={{
        border: '2px groove blueviolet',
        margin: '1rem 20vw',
        padding: '0.2rem',

        display: 'grid',
        gridTemplateColumns: 'auto auto',
      }}
    >
      <label htmlFor='populate-btn'>
        Click to Populate one Random User &#8677;
      </label>

      <button id='populate-btn' onClick={buildRandomUser}>
        Add User
      </button>
    </div>
  )
}

export default RandomUser
