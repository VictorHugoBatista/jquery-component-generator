const fs = require('fs')
import {Command, flags} from '@oclif/command'

import componentsFilenames from '../data/components-filenames'
import SampleManager from '../sample-manager/sample-manager'

export default class Create extends Command {
  static description = 'Create file with boilerplate jQuery code ready to deal with the component logic'

  static examples = [
    '$ jquerygen create mycomponent',
  ]

  static flags = {
    type: flags.string({
      char: 't',
      description: 'Type of component created.',
      default: 'object',
      options: componentsFilenames,
      required: true,
    }),
  }

  static args = [
    {
      name: 'componentname',
      required: true,
      description: 'Component file name (and class name, if class flag is added)',
    },
  ]

  async run() {
    const {args, flags} = this.parse(Create)
    const sample = new SampleManager(`${flags.type}.js`)
    const fileNameToCreate = `${args.componentname}.js`
    if (fs.existsSync(fileNameToCreate)) {
      this.log(`One file with name "${fileNameToCreate}" already exists in current directory!
Be sure you are in correct directory or choose another file name`)
      return
    }
    sample.save(fileNameToCreate)
  }
}
