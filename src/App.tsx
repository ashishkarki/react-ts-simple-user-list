import React, { useState } from 'react'
import './App.css'
import { IUsers } from './App.types'
import NewUser from './components/NewUser/NewUser'

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

  console.log(`state: ${JSON.stringify(userComposite)}`)

  return (
    <div className='container'>
      <h1>React Typescript Simple UserList Project</h1>

      <NewUser
        userComposite={userComposite}
        onSubmitHandler={onSubmitHandler}
        onChangeHandler={onChangeHandler}
      />
    </div>
  )
}

export default App
