# Javascript CRUD App

Learning javascript
 - DOM Manipulation(eg - document.getElementById())
 - CRUD Operation - (It helped me in learning Data Manipulation, data
   iteration, applying conditions and basic operators)

## Installation

Entry Point - index.html is the root file of my project

```bash
index.html
```
## Actions On Product
 - List view Inside table
 - Add new product.
 - Edit product.
 - Delete product.

## Project Flow

- Open index.html in browser
- Style is loaded initially.
- In the last of the file index.js is loaded.
```bash
<script src="index.js"></script>
```
- initial static data - array of objects is loaded initially.
- get table element from DOM.
- If element is present function name setData is invoked.

```bash
function setData(){
  1. It sets table head row and append to table.
  2. Iteration on data is done using forEach -
     And each row is created and append as a child inside table.
  3. Last row requires extra button to add new product
    therefore conditional check is applied.
}
```

