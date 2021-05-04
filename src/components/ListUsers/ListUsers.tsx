import React from 'react'
import { IListUsers } from '../../App.types'

import listUsersStyles from './ListUsers.module.css'

const ListUsers: React.FC<IListUsers> = ({ allUsers, deleteHandler }) => {
  return (
    <>
      <div className={listUsersStyles.listcontainer}>
        <h2>List of Users</h2>
        <div className={listUsersStyles.user}>
          <h4>User Fullname</h4>
          <h4>Age</h4>
          <h4>Profession</h4>
          <h4>Delete?</h4>
        </div>

        {allUsers &&
          allUsers.map((user, idx) => (
            <div key={idx} className={listUsersStyles.user}>
              <h4>{user.username}</h4>
              <h4>{user.age}</h4>
              <h4>{user.profession}</h4>

              <button
                onClick={() => deleteHandler(idx)}
                className={listUsersStyles.btn}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </>
  )
}

export default ListUsers
