import {Command, flags} from '@oclif/command'

export default class Create extends Command {
  static description = 'Create file with boilerplate jQuery code ready to deal with the component logic'

  static examples = [
    '$ jquerygen create mycomponent',
  ]

  static flags = {
    type: flags.string({
      char: 't',
      description: 'Type of component created. Items: object | class | mask. Default: object',
      default: 'object',
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

    this.log(`${flags.type}`)
    this.log(args.componentname)
  }
}
