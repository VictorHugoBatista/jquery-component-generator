jquery-component-generator
==========================



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/jquery-component-generator.svg)](https://npmjs.org/package/jquery-component-generator)
[![Downloads/week](https://img.shields.io/npm/dw/jquery-component-generator.svg)](https://npmjs.org/package/jquery-component-generator)
[![License](https://img.shields.io/npm/l/jquery-component-generator.svg)](https://github.com/VictorHugoBatista/jquery-component-generator/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g jquery-component-generator
$ jquerygen COMMAND
running command...
$ jquerygen (-v|--version|version)
jquery-component-generator/0.0.0 linux-x64 node-v10.16.0
$ jquerygen --help [COMMAND]
USAGE
  $ jquerygen COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`jquerygen hello [FILE]`](#jquerygen-hello-file)
* [`jquerygen help [COMMAND]`](#jquerygen-help-command)

## `jquerygen hello [FILE]`

describe the command here

```
USAGE
  $ jquerygen hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ jquerygen hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/VictorHugoBatista/jquery-component-generator/blob/v0.0.0/src/commands/hello.ts)_

## `jquerygen help [COMMAND]`

display help for jquerygen

```
USAGE
  $ jquerygen help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_
<!-- commandsstop -->
