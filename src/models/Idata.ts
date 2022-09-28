export interface IData {
  firstName: ITextInputData
  lastName: ITextInputData
  mobilePhone: IRegExp
  password: ITextInputData
  email: IRegExp
  birthday: IBirthday
  ocean: IOcean
  hobby: IHobby
  sex: IRequired
}

export interface IRequired {
  required: boolean
}

export interface ITextInputData extends IRequired {
  minLength: string
  maxLength: string
}

export interface IRegExp extends IRequired {
  regExp: string
}

export interface IBirthday extends IRequired {
  minAge: string
  maxAge: string
}

export interface IOcean extends IRequired {
  oneOf: string[]
}

export interface IHobby extends IRequired {
  anyOf: string[]
}

