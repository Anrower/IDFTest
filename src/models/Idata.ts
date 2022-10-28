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
  readonly minLength: string
  readonly maxLength: string
}

export interface IRegExp extends IRequired {
  readonly regExp: string
}

export interface IBirthday extends IRequired {
  readonly minAge: string
  readonly maxAge: string
}

export interface IOcean extends IRequired {
  readonly oneOf: string[]
}

export interface IHobby extends IRequired {
  readonly anyOf: string[]
}

