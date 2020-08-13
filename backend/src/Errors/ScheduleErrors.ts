class ScheduleErrors {
  public get storeErrors() {
    return this._storeErrors
  }

  private _storeErrors = {
    invalidFields: {
      status: 400,
      message: "Inform all fields"
    },
    unexpectedError: {
      status: 400,
      message: "Unexpected error while creating new schedule"
    }
  }

  public get indexErrors() {
    return this._indexErrors
  }

  private _indexErrors = {
    unexpectedError: {
      status: 400,
      message: "Unexpected error while search schedule"
    }
  }

  public get updateErrors() {
    return this._updateErrors
  }

  private _updateErrors = {
    unexpectedError: {
      status: 400,
      message: "Unexpected error while updated schedule"
    }
  }

  public get deleteErrors() {
    return this._deleteErrors
  }

  private _deleteErrors = {
    unexpectedError: {
      status: 400,
      message: "Unexpected error while delete schedule"
    }
  }
}

export default ScheduleErrors