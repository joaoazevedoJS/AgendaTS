import { Request, Response } from 'express'

import Crud from '../Model/Crud'
import UserValidation from '../utils/UserValidation'

import ScheduleErrors from '../Errors/ScheduleErrors'

class ScheduleController extends Crud {
  public async index(req: Request, res: Response) {
    const { indexErrors } = new ScheduleErrors()

    try {
      const response = await super.Read('schedule')

      return res.json(response)
    } catch (error) {
      return res.status(indexErrors.unexpectedError.status)
        .json(indexErrors.unexpectedError)
    }
  }

  public async store(req: Request, res: Response) {
    const { name, street, phone, number, photoURL } = req.body

    const { storeErrors } = new ScheduleErrors()

    if (!name.trim() || !street.trim() || !phone.trim() || !number || !photoURL.trim()) {
      return res.status(storeErrors.invalidFields.status)
        .json(storeErrors.invalidFields)
    }

    const data = {
      name,
      street,
      number,
      phone,
      photoURL
    }

    try {
      await super.Create(data, 'schedule')

      return res.status(201).json(data)
    } catch (error) {
      return res.status(storeErrors.unexpectedError.status)
        .json(storeErrors.unexpectedError)
    }
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params
    const { name, street, phone, number, photoURL } = req.body

    const { IdValidation } = new UserValidation
    const { updateErrors } = new ScheduleErrors

    const isIdValid: any = await IdValidation(Number(id), 'schedule')

    if (isIdValid.error)
      return res.status(isIdValid.status).json(isIdValid)

    const data = {
      id,
      name,
      street,
      number,
      phone,
      photoURL
    }

    const where = {
      field: 'id',
      value: Number(id)
    }

    try {
      await super.Update('schedule', where, data)

      return res.json(data)
    } catch (error) {
      return res.status(updateErrors.unexpectedError.status)
        .json(updateErrors.unexpectedError)
    }
  }

  public async destroy(req: Request, res: Response) {
    const { id } = req.params

    const { IdValidation } = new UserValidation
    const { deleteErrors } = new ScheduleErrors

    const isIdValid: any = await IdValidation(Number(id), 'schedule')

    if (isIdValid.error)
      return res.status(isIdValid.status).json(isIdValid)

    const where = {
      field: 'id',
      value: Number(id)
    }

    try {
      await super.Delete('schedule', where)

      res.status(200).send("")
    } catch (error) {
      return res.status(deleteErrors.unexpectedError.status)
        .json(deleteErrors.unexpectedError)
    }
  }
}

export default ScheduleController