## React Navbar

#### Problem Statement

Create the following application the boilerplate code provided .

## Submission Instructions [Please note]

## Maximum Marks - 15

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if narbar is present on all pages - 2 mark
 ✅ Check if page is redirected to home component correctly on clicking Home - 3 marks
 ✅ Check if page is redirected to About component correctly on clicking About - 3 marks
 ✅ Check if page is redirected to Contact component correctly on clicking Contact - 3 marks
 ✅ Check if page is redirected to Products component correctly on clicking Products - 3 marks
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Run the following commands inside,
  - `npm install --engine-strict`
  - `npm start`
  - `npm run server` -> to start the json-server
- **_Note_**:
1. Libraries needs to be installed by yourself


### Not following the above instructions will lead your testcases to fail

## Problem

## Understanding Component Structure

- App
  - Home (should be rendedered on default route "/")
  - About (should be rendered on route "/about")
  - Contact (should be rendered on route "/contact")
  - Products (should be rendered on route "/products")

**Note** - `Make sure you use only the given components and dont create new files and folders. Changing component name, structures might result in giving you zero marks.`


## Features to build

1. Create a navbar which has the following links (should have the same order as below)
   - Home
   - About
   - Contact
   - Products
   
2. Clicking on the navbar link should redirect the user to that component and update url at the same time
3. Navbar component should be visible on every page

<img width="1728" alt="Screenshot 2022-12-20 at 12 11 24 PM" src="https://user-images.githubusercontent.com/39851506/208602597-1aebc5d8-a551-4564-b796-57d31ade2d38.png">


## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for Css in that file.
2. Do Not Remove `data-cy="xxxx"` from anywhere, this are used by testing tools to test your code, removal of this will lead to low score.
3. Make sure you use only the given components and dont create new files and folders as chaging component name, structures might result in giving you zero marks
4. Make sure you use only the given data and dont create new data, as chaging data might result in giving you zero marks.

**Note** - This might not be all the things, you are free to use other components.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
