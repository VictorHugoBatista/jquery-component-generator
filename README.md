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
jquery-component-generator/1.0.0 linux-x64 node-v10.16.0
$ jquerygen --help [COMMAND]
USAGE
  $ jquerygen COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`jquerygen create COMPONENTNAME`](#jquerygen-create-componentname)
* [`jquerygen help [COMMAND]`](#jquerygen-help-command)

## `jquerygen create COMPONENTNAME`

Create file with boilerplate jQuery code ready to deal with the component logic

```
USAGE
  $ jquerygen create COMPONENTNAME

ARGUMENTS
  COMPONENTNAME  Component file name (and class name, if class flag is added)

OPTIONS
  -t, --type=object|class|mask|card-validation  (required) [default: object] Type of component created.

EXAMPLE
  $ jquerygen create mycomponent
```

_See code: [src/commands/create.ts](https://github.com/VictorHugoBatista/jquery-component-generator/blob/v1.0.0/src/commands/create.ts)_

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
