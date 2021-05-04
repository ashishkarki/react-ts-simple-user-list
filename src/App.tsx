import React, { useState } from 'react'
import './App.css'
import { IUser, IUsers } from './App.types'
import ListUsers from './components/ListUsers/ListUsers'
import NewUser from './components/NewUser/NewUser'
import RandomUser from './components/RandomUser/RandomUser'

const App: React.FC = () => {
  const [userComposite, setUserComposite] = useState<IUsers>({
    currentUser: {
      username: '',
      age: 0,
      profession: '',
    },
    allUsers: [],
  })

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target

    setUserComposite({
      ...userComposite,
      currentUser: {
        ...userComposite.currentUser,
        [name]: value,
      },
    })
  }

  const onSubmitHandler = (event: React.SyntheticEvent): void => {
    event.preventDefault()

    setUserComposite({
      currentUser: {
        username: '',
        age: 0,
        profession: '',
      },
      allUsers: [...userComposite.allUsers, userComposite.currentUser],
    })
  }

  const addRandomUser = (randomUser: IUser) => {
    setUserComposite({
      currentUser: {
        username: '',
        age: 0,
        profession: '',
      },
      allUsers: [...userComposite.allUsers, randomUser],
    })
  }

  const deleteHandler = (indexToDelete: number) => {
    const filteredUsers = userComposite.allUsers.filter(
      (user, idx) => idx !== indexToDelete
    )

    setUserComposite({
      ...userComposite,
      allUsers: filteredUsers,
    })
  }

  // console.log(`state: ${JSON.stringify(userComposite)}`)

  return (
    <div className='App'>
      <h1>React Typescript Simple UserList Project</h1>

      <NewUser
        userComposite={userComposite}
        onSubmitHandler={onSubmitHandler}
        onChangeHandler={onChangeHandler}
      />

      <RandomUser addRandomUser={addRandomUser} />

      <ListUsers
        allUsers={userComposite.allUsers}
        deleteHandler={deleteHandler}
      />
    </div>
  )
}

export default App
