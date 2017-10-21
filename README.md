# UndoBag
A JavaScript micro-library for easy implementation of undo and redo feature.

### Steps to Include UndoBag:

#### For Browser-based Projects:
For browser based projects, clude the minified js file in the **dist** folder of the repo into your markup.
```
<script type="text/javascript" src="dist/undoBag.min.js"></script>
```
The full non-minified js source is available in the **src** folder.

#### For nodeJS Projects:
will be updated shortly.

### UndoBag Usage:
Undobag can be initialized as follows:
```
new window.UndoBag(options);
```
where the **options** is an **optional** configuration object of the form:
```
{
    length: 20, // configures stack length (can be any positive number) Default value: 10
    isDev: true // Indicates whether the ENV is development (enables console logging of stack related data) 
                //Default value: false
}
```

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
