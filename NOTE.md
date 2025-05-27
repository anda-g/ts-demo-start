# What is TypeScript?

TypeScript is a programming landuage that is superset of JavaScript. What is JavaScript have TypeScript also have. And more features than JavaScript. They use it for large-scale application. TypeScript have specific type (Static Type).

## Install

- Install for global

```bash
npm install -g typescript
```

- Install for local project

```bash
npm install -d typescript
```

## Getting Start

- Init project to get tsconfig.json

```bash
tsc --init
```

### Config tsconfig.json

- #### Modify version of JavaScript language

```json
// Default ES5
"target": "ES6" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,

```

- #### Modify rootDir
  Which mean the index.ts should be in the src folder and it will go to read file from that

```json
"rootDir": "./src" /* Specify the root folder within your source files. */,
```

- #### Modify outDir
  It will create folder dist and put the generated JavaScript file put into it

```json
"outDir": "./dist" /* Specify an output folder for all emitted files. */,
```

- #### Remove comments
  Comments that in ts and it will remove and don't write in generated js

```json
"removeComments": true,/* Disable emitting comments. */
```

- #### Disable error
  It will don't send the error to generated file js which mean it only error in ts file

```json
"noEmitOnError": true,/* Disable emitting files if any type checking errors are reported. */
```

## Datatype

- ### Primitive
  - `string`
  - `number`
  - `boolean`
  - `any`
  - `mixed`

```TypeScript
let mixed: (string | number)[] = [1, "apple", "banana", 2]
```

- Tuple type

```TypeScript
let person: [number, string, boolean] = [1, "John", false];
// Cannot modify like add more
// Cannot change order or variable input ex. (number, string, boolean)
```
