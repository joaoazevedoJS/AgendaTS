import { Where } from "../interfaces/ICrud"

import connection from '../Database/connection'

class CRUD {
  protected async Create(data: any, table: string) {
    const response = await connection(table).insert(data)

    return response
  }

  protected async Read(table: string, where?: Where ) {
    let response
    
    if(where) {
      response = await connection(table)
        .select('*')
        .where(where.field, where.value)

      return response
    }
    
    response = await connection(table).select('*')

    return response
  }

  protected async Update(table: string, where: Where, data: object) {
    await connection(table)
      .where(where.field, where.value)
      .update(data)
  }

  protected async Delete(table: string, where: Where) {
    await connection(table)
      .where(where.field, where.value)
      .first().delete()
  }
}

export default CRUD