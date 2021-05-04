import React from 'react'

import { INewUser } from '../../App.types'
import newUserStyles from './NewUser.module.css'

const NewUser: React.FC<INewUser> = ({
  userComposite,
  onSubmitHandler,
  onChangeHandler,
}) => {
  const isNewUserBtnDisabled = () => {
    if (
      userComposite.currentUser &&
      userComposite.currentUser.username &&
      // userComposite.currentUser.age &&
      userComposite.currentUser.profession
    ) {
      return false
    }

    return true
  }

  return (
    <form onSubmit={onSubmitHandler} className={newUserStyles.form}>
      <div className={newUserStyles.inputgroup}>
        <label htmlFor='username'>Name:</label>
        <input
          required
          type='text'
          name='username'
          id='username'
          value={userComposite.currentUser.username}
          onChange={onChangeHandler}
        />
      </div>

      <div className={newUserStyles.inputgroup}>
        <label htmlFor='age'>Age:</label>
        <input
          required
          defaultValue={0}
          type='number'
          id='age'
          name='age'
          value={userComposite.currentUser.age}
          onChange={onChangeHandler}
        />
      </div>

      <div className={newUserStyles.inputgroup}>
        <label htmlFor='profession'>Profession:</label>
        <input
          required
          type='text'
          name='profession'
          id='profession'
          value={userComposite.currentUser.profession}
          onChange={onChangeHandler}
        />
      </div>

      <button
        type='submit'
        className={newUserStyles.btn}
        disabled={isNewUserBtnDisabled()}
      >
        Add User
      </button>
    </form>
  )
}

export default NewUser
