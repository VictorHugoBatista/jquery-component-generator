import {Command, flags} from '@oclif/command'

export default class Create extends Command {
  static description = 'Create file with boilerplate jQuery code ready to deal with the component logic'

  static examples = [
    '$ jquerygen create mycomponent',
  ]

  static flags = {
    class: flags.boolean({
      char: 'c',
      description: 'Create file as class structure, receiving the jQuery root object as the constructor parameter',
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

    this.log(`${flags.class}`)
    this.log(args.componentname)
  }
}
