//creating array of objects to store product data
const productData = [{
    id: 1,
    name: 'test1',
    description: 'Smith Smith Smith',
    price: '$2',
},
{
    id: 2,
    name: 'test2',
    description: 'test2test2test2 test2test2 test2test2',
    price: '$21',
},
{
    id: 3,
    name: 'test3',
    description: 'test3 test3 test3 test3',
    price: '$3',
},
{
    id: 4,
    name: 'test4',
    description: 'test4 test4 test4 test4',
    price: '$34',
}];

//fetch table data using id from DOM in a variable
let tableContainer = document.getElementById("product-list");
if (tableContainer) {
    setData();
}

/**
 * Set initial data in table
 */
function setData() {
    tableContainer.innerHTML = '';
    const tableHead = document.createElement('tr');
    tableHead.setAttribute('class', 'header')
    const theadData = `<th>S.No</th>
    <th>Name</th>
    <th>Description</th>
    <th>Price</th>
    <th>Action</th>`;
    tableHead.innerHTML = theadData;
    tableContainer.appendChild(tableHead);

    productData.forEach((product, index) => {
        var newRow = document.createElement('tr');
        //passing HTML as template string
        let trData = `<td>${index+1}</td>
        <td><input id="dataName${product.id}" value="${product.name}"></input></td>
        <td><input id="dataDescription${product.id}" value="${product.description}"></input></td>
        <td><input id="dataPrice${product.id}" value="${product.price}"></input></td>
        <td>
        <a class="button1 read-button" href="read.html?id=${product.id}">Read</a>
        <button class="button1 delete-button" onclick="deleteData(${index})">Delete</button>
        </td>`

        //checking if it's last index
        if (index === productData.length - 1) {
            trData = `<td>${index+1}</td>
            <td><input id="dataName${product.id}" value="${product.name}"></input></td>
            <td><input id="dataDescription${product.id}" value="${product.description}"></input></td>
            <td><input id="dataPrice${product.id}" value="${product.price}"></input></td>
            <td>
            <a class="button1 read-button" href="read.html?id=${product.id}">Read</a>
            <button class="button1 delete-button" onclick="deleteData(${index});">Delete</button>
            <button id="create-new-product" class="new-button button1" onclick="newRow(${index});">Create new product</button>
        </td>`
        }
        //Appending data and HTML in new row.
        newRow.innerHTML = trData;
        tableContainer.appendChild(newRow);
    }
    )
}

/**
 * When user clicks on 'add new product'
 * New row is created and added to the table.
 * @param {*} index
 */
function newRow(index) {
    var newRow = document.createElement('tr');

    let trData = `<td>${productData.length + 1}</td>
        <td><input id="dataName"></input></td>
        <td><input id="dataDescription"></input></td>
        <td><input id="dataPrice"></input></td>
        <td> <button class="button1 save-button" onclick="saveData()";>save</button>
            <button class="button1 cancel-button" onclick="setData()";>Cancel</button>
        </td>`
    newRow.innerHTML = trData;
    tableContainer.appendChild(newRow);
    document.getElementById("create-new-product").remove();
}

/**
 * When user clicks on save button initial data is updated
 */
function saveData() {
    let newData = {
        id: productData.length + 1,
        name: document.getElementById("dataName").value,
        description: document.getElementById("dataDescription").value,
        price: document.getElementById("dataPrice").value,
    }
    productData.push(newData);
    setData();
}

/**
 * when user clicks on delete data
 * @param {*} index
 */
function deleteData(index) {
    if(productData.length<=1){
        alert("Cant delete this row since this is only last row left")
    }else{
    if (confirm(`Are you sure you want to delete row number ${index + 1}`) == true) {
        productData.splice(index, 1);
        setData();
    }}

}