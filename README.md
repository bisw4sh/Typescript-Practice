# TypeScript Practice Repository

Welcome to the TypeScript Learning Repository! This repository is a place for you to explore and practice TypeScript, a powerful statically typed superset of JavaScript. Whether you're new to TypeScript or looking to enhance your TypeScript skills, you're in the right place.

## Getting Started

To get started with this project, follow these simple steps:

1. Navigate to the project directory:

```bash
cd Typescript-Practice
```

2. Install the project dependencies using PNPM:

```js
pnpm install
```

3. Now, you're all set to transpile TypeScript to JavaScript. Run the following command to generate JavaScript files from TypeScript source files using the TypeScript compiler:

```js
pnpm tsc
```

This will compile the TypeScript files (.ts) in the project and generate the corresponding JavaScript files (.js) in the same directory.
<hr>

### Project Structure
This repository is organized as follows:

-${number}{Directory-Name} has both the TypeScript file and corresponding JavaScript source files

<hr>

### Resources used to learn
1. [github repo](https://github.com/basarat/typescript-book) && [site](https://basarat.gitbook.io/typescript/)

2. [w3schools](https://www.w3schools.com/typescript/typescript_tuples.php)

3. [freecodecamps](https://www.freecodecamp.org/news/learn-typescript-beginners-guide/)

4. [gibbok](https://github.com/gibbok/typescript-book)

5. [Dave Gray YouTube Video](https://youtu.be/gieEQFIfgYc?si=i_XzfnKBMajB40H7)

6. [Programming with Mosh YouTube Video](https://youtu.be/d56mG7DezGs?si=tSwLyDx-EmUz7Jes)

7. [Ben Awad - React Typescript Tutorial](https://www.youtube.com/watch?v=Z5iWr6Srsj8)


How:
1.  Initialize project
```js
pnpm init
``` 
2.  Generate tsconfig.json
```js
script "tsc" : "tsc"
pnpm exec tsc --init
```

3.  Transpile ts to js
```js
pnpm tsc <file_name.ts>
```

4. Continually watching the changes
```js
pnpm tsc <file_name.ts> --watch | pnpm tsc <file_name.ts> -w
```