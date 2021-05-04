import React from 'react'

export interface IUser {
  username: string
  age: number
  profession: string
}

export interface IListUsers {
  allUsers: Array<IUser>
  deleteHandler: (id: number) => void // React.MouseEventHandler<HTMLButtonElement>
}

export interface IUsers {
  currentUser: IUser
  allUsers: Array<IUser>
}

export interface INewUser {
  userComposite: IUsers
  onSubmitHandler: React.FormEventHandler
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>
}
