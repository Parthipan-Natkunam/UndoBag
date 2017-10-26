# UndoBag [![Twitter](https://img.shields.io/twitter/url/https/github.com/Parthipan-Natkunam/UndoBag.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FParthipan-Natkunam%2FUndoBag)
A JavaScript micro-library for easy implementation of undo and redo feature.

[![npm version](https://badge.fury.io/js/undobag.svg)](https://badge.fury.io/js/undobag)

### Steps to Include UndoBag:

#### For Browser-based Projects:
For browser based projects, include the minified js file in the **dist** folder of the repo into your markup.
```
<script type="text/javascript" src="dist/undoBag.min.js"></script>
```
The full non-minified js source is available in the **src** folder.

#### For nodeJS Projects:
- Install undobag package using npm
```
npm install undobag
```
- Require it in your file
```
var undoBag = require('undobag');
```

### UndoBag Usage:
Undobag can be initialized as follows:

##### Browser-based:
```
new window.UndoBag(options);
```
##### NodeJS based:
```
var anyVariableName = new undoBag(options);
```

where the **options** is an **optional** configuration object.

##### Config Params:

| Key | Value Data Type | Description | Default Value |
| :--:| :-------------: | :---------- | :-----------: |
| length | Number | configures stack length (can be any positive number) | 10|
| isDev | Boolean | Indicates whether the ENV is development (enables console logging of stack related data) | false|

### UndoBag APIs:

| API | Parameters | Description | Return Type |
| :--:| :--------: | :---------- | :---------: |
| recordChange | item | Pushes the passed data/object to the stack | void |
| canUndo | - | Returns whether undo is possible at that particular point | Boolean |
| canRedo | - | Returns whether redo is possible at that particular point| Boolean |
| undo | - | Returns the next data/obj DOWN the line in the stack | Depens on stack content |
| redo | - | Returns the next data/obj UP the line in the stack | Depens on stack content |
| seek | position | Returns the data/obj at supplied position in the stack (1 based positioning, i.e, position 1 returns obj at index 0) | Depens on stack content |              
| flushStack | - | Clears all the contents of the stack | void |
| log | - | logs an object in the console that contains stack related data | void |

### Steps to Build from Source:
- Clone this repo.
```
git clone https://github.com/Parthipan-Natkunam/UndoBag.git
```
- Install dev dependencies
```
npm install
```
- start Grunt task runner
```
grunt
```
