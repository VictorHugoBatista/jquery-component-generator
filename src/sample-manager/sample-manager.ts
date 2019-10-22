import ReplaceData from '../DTO/replace-data'
const fs = require('fs')
const path = require('path')

export default class SampleManager {
  private readonly _sampleFilesPath: string = path.join(__dirname, '..', '..', 'bin', 'samples')
  private readonly _sampleFilePath: string
  private _sampleFileContent: string

  public constructor(sampleFileName: string) {
    this._sampleFilePath = path.join(this._sampleFilesPath, sampleFileName)
    this._sampleFileContent = fs.readFileSync(this._sampleFilePath, 'utf8')
  }

  public replaceContent(dataToReplace: ReplaceData): SampleManager {
    for (let [fileTerm, dataToWrite] of dataToReplace.getAll()) {
      const fileTermToReplace = fileTerm.toUpperCase()
      const replaceRegex = new RegExp(fileTermToReplace, 'g')
      this._sampleFileContent = this._sampleFileContent.replace(replaceRegex, dataToWrite)
    }
    return this
  }

  public save(fileName: string): void {
    fs.writeFileSync(fileName, this._sampleFileContent, 'utf8')
  }
}
