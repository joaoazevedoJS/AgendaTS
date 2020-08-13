import Crud from '../Model/Crud'

import UserValidationErrors from '../Errors/UserValidation'

class UserValidation extends Crud {
  public async IdValidation(id: number, table: string) {
    const where = {
      field: 'id',
      value: id
    }

    const { isIdInvalid } = new UserValidationErrors()

    const response = await super.Read(table, where)

    return !response.length ? isIdInvalid : response
  }
}

export default UserValidation