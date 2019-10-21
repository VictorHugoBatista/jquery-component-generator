import ReplaceDataInterface from '../interfaces/replace-data-interface'

export default class ReplaceData {
  private readonly _inputData: Map<string, string>
  private readonly _defaultData: ReplaceDataInterface = {
    filename: '',
  }

  public constructor(inputData: ReplaceDataInterface) {
    const inputDataMap = new Map()
    const inputDataComplete = {
      ...this._defaultData,
      ...(inputData as any),
    }
    Object.keys(inputDataComplete).forEach(key => {
      inputDataMap.set(key, inputDataComplete[key])
    })
    this._inputData = inputDataMap
  }

  public getData(dataKey: any): string {
    return this._inputData.get(dataKey) || ''
  }

  public getAll(): Map<string, string> {
    return this._inputData
  }
}
