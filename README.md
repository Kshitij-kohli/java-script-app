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

```bash
function newRow(index){
1. Creates a new row using document.createElement('tr');
2. New row is appended in table.
3. Save button and cancel button are available to save or
   cancel adding items in new row.
4. Create new product button is removed.
}
```

```bash
function saveData() {
1. Saves data and adds it to the table.
2. Interacts with DOM to fetch data entered by user using
   document.getElementById("dataName").value
3. Display new updated data by calling setData()
}
```

```bash
function deleteData(index) {
1. Deletes current row and updates index dynamically.
2. Prevents user to delete row if it is the only one last row remaining.
}

