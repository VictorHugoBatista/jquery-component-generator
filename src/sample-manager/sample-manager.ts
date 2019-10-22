const fs = require('fs')
const path = require('path')

export default class SampleManager {
  private readonly _sampleFilesPath: string = path.join(__dirname, '..', '..', 'bin', 'samples')
  private readonly _sampleFilePath: string
  private readonly _sampleFileContent: string

  public constructor(sampleFileName: string) {
    this._sampleFilePath = path.join(this._sampleFilesPath, sampleFileName)
    this._sampleFileContent = fs.readFileSync(this._sampleFilePath, 'utf8')
  }

  public save(fileName: string): void {
    fs.writeFileSync(fileName, this._sampleFileContent, 'utf8')
  }
}
