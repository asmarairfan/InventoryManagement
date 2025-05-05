const sidenav = document.getElementById("sideNav");

let section1 = document.getElementById("home");
let section2 = document.getElementById("category");
let section3 = document.getElementById("AddNew");
let section4 = document.getElementById("product");
let section5 = document.getElementById("AddNew2");
let section6 = document.getElementById("supplier");
let section6a = document.getElementById("AddNew3");
let section7 = document.getElementById("purchases");
let section7a = document.getElementById("AddNew4");
let section8 = document.getElementById("sales");
let mainSection = document.getElementById("content");

let span0 = document.getElementById("span0");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");
let span4 = document.getElementById("span4");
let span5 = document.getElementById("span5");

const addNewSectionsDisplayed =
    section3.style.display === "block" ||
    section5.style.display === "block" ||
    section6a.style.display === "block" ||
    section7a.style.display === "block";

function add(button, span) {
    button.classList.add("clickbutton");
    span.classList.add("spanclick");
}
function remove(button, span) {
    button.classList.remove("clickbutton");
    span.classList.remove("spanclick");
}

const button0 = document.getElementById("navdiv0");
button0.addEventListener('click', function () {
    section2.style.display = "none";
    section1.style.display = "flex";
    section4.style.display = "none";
    section6.style.display = "none";
    section7.style.display = "none";
    section8.style.display = "none";
    add(button0, span0);
    remove(button1, span1);
    remove(button2, span2);
    remove(button3, span3);
    remove(button4, span4);
    remove(button5, span5);
    if (mediaQuery.matches) {
        hideSidenav();
    }
});

const button1 = document.getElementById("navdiv1");
button1.addEventListener('click', function () {
    section2.style.display = "block";
    section1.style.display = "none";
    section4.style.display = "none";
    section6.style.display = "none";
    section7.style.display = "none";
    section8.style.display = "none";
    add(button1, span1);
    remove(button0, span0);
    remove(button2, span2);
    remove(button3, span3);
    remove(button4, span4);
    remove(button5, span5);
    if (mediaQuery.matches) {
        hideSidenav();
    }
});

const button2 = document.getElementById("navdiv2");
button2.addEventListener('click', function () {
    section1.style.display = "none";
    section2.style.display = "none";
    section4.style.display = "block";
    section6.style.display = "none";
    section7.style.display = "none";
    section8.style.display = "none";
    add(button2, span2);
    remove(button1, span1);
    remove(button0, span0);
    remove(button3, span3);
    remove(button4, span4);
    remove(button5, span5);
    if (mediaQuery.matches) {
        hideSidenav();
    }
});

const button3 = document.getElementById("navdiv3");
button3.addEventListener('click', function () {
    section1.style.display = "none";
    section2.style.display = "none";
    section4.style.display = "none";
    section6.style.display = "block";
    section7.style.display = "none";
    section8.style.display = "none";
    add(button2, span2);
    add(button2, span2);
    add(button3, span3);
    remove(button1, span1);
    remove(button2, span2);
    remove(button0, span0);
    remove(button4, span4);
    remove(button5, span5);
    if (mediaQuery.matches) {
        hideSidenav();
    }
});

const button4 = document.getElementById("navdiv4");
button4.addEventListener('click', function () {
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "none";
    section6.style.display = "none";
    section7.style.display = "block";
    section8.style.display = "none";
    add(button4, span4);
    remove(button1, span1);
    remove(button2, span2);
    remove(button0, span0);
    remove(button3, span3);
    remove(button5, span5);
    if (mediaQuery.matches) {
        hideSidenav();
    }
});

const button5 = document.getElementById("navdiv5");
button5.addEventListener('click', function () {
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "none";
    section6.style.display = "none";
    section7.style.display = "none";
    section8.style.display = "block";
    add(button5, span5);
    remove(button1, span1);
    remove(button2, span2);
    remove(button0, span0);
    remove(button3, span3);
    remove(button4, span4);
    if (mediaQuery.matches) {
        hideSidenav();
    }
});

const addnewButton = document.getElementById("addnew");
addnewButton.addEventListener('click', function () {
    sidenav.style.opacity = "70%";
    section2.style.opacity = "60%";
    section3.style.position = "fixed";
    section3.style.display = "block";
});

const addnewButton2 = document.getElementById("addnew2");
addnewButton2.addEventListener('click', function () {
    sidenav.style.opacity = "70%";
    section4.style.opacity = "60%";
    section5.style.position = "fixed";
    section5.style.display = "block";
});
const addnewButton3 = document.getElementById("addnew3");
addnewButton3.addEventListener('click', function () {
    sidenav.style.opacity = "70%";
    section6.style.opacity = "60%";
    section6a.style.position = "fixed";
    section6a.style.display = "block";
});

const addnewButton4 = document.getElementById("addnew4");
addnewButton4.addEventListener('click', function () {
    sidenav.style.opacity = "70%";
    section7.style.opacity = "60%";
    section7a.style.position = "fixed";
    section7a.style.display = "block";
});

const addnewButton5 = document.getElementById("addnew5");
addnewButton5.addEventListener('click', function () {
    sidenav.style.opacity = "70%";
    section7.style.opacity = "60%";
    section7a.style.position = "fixed";
    section7a.style.display = "block";
});

const closeButton = document.getElementById("close");
const closeButton2 = document.getElementById("close2");
const closeButton3 = document.getElementById("close3");
const closeButton4 = document.getElementById("cross");

closeButton.addEventListener('click', function () {
    sidenav.style.opacity = "1";
    section2.style.opacity = "1";
    section3.style.display = "none";
    input.value = '';
});
closeButton2.addEventListener('click', function () {
    sidenav.style.opacity = "1";
    section4.style.opacity = "1";
    section5.style.display = "none";
    input2.value = '';
    input3.value = '';
    input4.value = '';
    input5.value = '';
});
closeButton3.addEventListener('click', function () {
    sidenav.style.opacity = "1";
    section6.style.opacity = "1";
    section6a.style.display = "none";
    input6.value = '';
    input7.value = '';
    input8.value = '';
    input9.value = '';
});
closeButton4.addEventListener('click', function () {
    sidenav.style.opacity = "1";
    section7.style.opacity = "1";
    section7a.style.display = "none";
    let rows = tableBody.querySelectorAll('tr.rows:not(:first-child)');
    for (let row of rows) {
        tableBody.removeChild(row);
    }

    grandTotal.textContent = "0.00";
    totalAmount = 0;

});

const saveButton = document.getElementById("save");
const saveButton2 = document.getElementById("save2");
const saveButton3 = document.getElementById("save3");
const saveButton4 = document.getElementById("save4");
const table = document.getElementById("myTable");
const table2 = document.getElementById("myTable2");
const table3 = document.getElementById("myTable3");
const table4 = document.getElementById("myTable4");
const table5 = document.getElementById("myTable5");
const table6 = document.getElementById("myTable6");
let newRow = document.getElementById("newRow");
let divInput = document.getElementById("divinput");

let rowNumber = document.querySelectorAll("#myTable .rows").length;
let rowIdCounter = document.querySelectorAll("#myTable .rows").length;
const rows = document.querySelectorAll("#myTable .rows");

function updateRowIndexes(r) {
    let highestSerialNumber = 0;

    r.forEach((row) => {
        let th = row.querySelector("th");
        th.textContent = highestSerialNumber;
        highestSerialNumber++;
    });
}

function updateRowIds(r) {
    let rowIdCounter = 1; // Start the ID counter at 1

    r.forEach((row) => {
        row.dataset.rowId = rowIdCounter;
        rowIdCounter++;
    });
}

let rowData = {
    id: null,
    textInput: '',
};
const input = document.getElementById("input");

function openAddNewForEditing() {
    if (rowData.id !== null) {
        document.getElementById("AddNew").style.display = "block";
        sidenav.style.opacity = "70%";
        section2.style.opacity = "60%";
        section3.style.position = "fixed";
        input.value = rowData.textInput;
    }
}

table.addEventListener('click', function (event) {
    if (event.target.classList.contains("edit")) {
        let row = event.target.closest("tr");
        let textDiv = row.querySelector(".special div");

        rowData = {
            id: row.dataset.rowId,
            textInput: textDiv.textContent,
        };
        openAddNewForEditing();
    } else if (event.target.classList.contains("delete")) {
        let row = event.target.closest("tr");
        if (row) {
            row.parentNode.removeChild(row);
        }
    }
});

saveButton.addEventListener('click', function () {
    let textInput = input.value.trim();

    if (textInput === '') {
        alert("Please enter an input");
    } else {
        if (rowData.id === null) {
            let newRow = document.createElement("tr");
            newRow.classList.add("rows");

            newRow.dataset.rowId = rowIdCounter++;
            rowIdCounter++;

            let th = newRow.insertCell(0);
            th.style.fontWeight = "bold";
            th.textContent = rowNumber;
            rowNumber++;

            let cell1 = newRow.insertCell(1);
            cell1.classList.add("special");
            let div1 = document.createElement("div");
            div1.textContent = textInput;
            cell1.appendChild(div1);

            let div2 = document.createElement("div");
            div2.innerHTML = `
                <span><button class="edit">&#128394;</button></span>
                <span><button class="delete">&#128465;</button></span>
            `;
            cell1.appendChild(div2);

            input.value = '';
            updateRowIndexes(rows);
            updateRowIds(rows);
            document.getElementById("myTable").appendChild(newRow);
        } else {
            let row = findRowById(rowData.id, rows);

            if (row) {
                let textDiv = row.querySelector(".special div");
                textDiv.textContent = textInput;
            }
            input.value = '';
        }
        rowData = {
            id: null,
            textInput: '',
        }
    }
});

function findRowById(id, r) {
    for (const row of r) {
        const rowId = row.dataset.rowId;
        if (rowId && rowId === id) {
            return row;
        }
    }
    return null;
}

let rowData2 = {
    id: null,
    textInput2: '',
    textInput3: '',
    textInput4: '',
    textInput5: '',
};

let rowNumber2 = document.querySelectorAll("#myTable2 .rows").length;
let rowIdCounter2 = document.querySelectorAll("#myTable2 .rows").length;
const rows2 = document.querySelectorAll("#myTable2 .rows");

const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const input5 = document.getElementById("input5");

function openAddNewForEditing2() {
    if (rowData2.id !== null) {
        document.getElementById("AddNew2").style.display = "block";
        input2.value = rowData2.textInput2;
        input3.value = rowData2.textInput3;
        input4.value = rowData2.textInput4;
        input5.value = rowData2.textInput5;
        sidenav.style.opacity = "70%";
        section4.style.opacity = "60%";
        section5.style.position = "fixed";
        section5.style.display = "block";
    }
}
function updateRowNumbers() {
    const rows = document.querySelectorAll("#myTable2 .rows");
    rowNumber2 = 1; // Reset rowNumber2
    rows.forEach((row) => {
        let th = row.querySelector("th");
        th.textContent = rowNumber2;
        rowNumber2++;
    });
}

function updateRowIdss() {
    const rows = document.querySelectorAll("#myTable2 .rows");
    rowIdCounter2 = 1; // Start the ID counter at 1
    rows.forEach((row) => {
        row.dataset.rowId = rowIdCounter2;
        rowIdCounter2++;
    });
}
table2.addEventListener('click', function (event) {
    if (event.target.classList.contains("edit")) {
        let row = event.target.closest("tr");
        let nameCell = row.querySelector("td:nth-child(2)");
        let categoryCell = row.querySelector("td:nth-child(3)");
        let purchasePriceCell = row.querySelector("td:nth-child(4)");
        let salePriceDiv = row.querySelector(".special div");
        rowData2 = {
            id: row.dataset.rowId,
            textInput2: nameCell.textContent,
            textInput3: purchasePriceCell.textContent,
            textInput4: salePriceDiv.textContent,
            textInput5: categoryCell.textContent,
        };
        openAddNewForEditing2();
    } else if (event.target.classList.contains("delete")) {
        let row = event.target.closest("tr");
        if (row) {
            row.parentNode.removeChild(row);
        }
    }
});

saveButton2.addEventListener('click', function () {
    let textInput2 = input2.value.trim();
    let textInput3 = input3.value.trim();
    let textInput4 = input4.value.trim();
    let textInput5 = input5.value.trim();

    if (textInput2 === '' || textInput3 === '' || textInput4 === '' || textInput5 === '') {
        alert("Please fill out all the fields");
    } else {
        if (rowData2.id === null) {
            let newRow = document.createElement("tr");
            newRow.classList.add("rows");

            newRow.dataset.rowId = rowIdCounter2++;
            rowIdCounter2++;

            let th = newRow.insertCell(0);
            th.style.fontWeight = "bold";
            th.textContent = rowNumber2;
            rowNumber2++;

            let nameCell = newRow.insertCell(1);
            nameCell.textContent = textInput2;

            let categoryCell = newRow.insertCell(2);
            categoryCell.textContent = textInput5;

            let purchasePriceCell = newRow.insertCell(3);
            purchasePriceCell.textContent = textInput3;

            let salePriceCell = newRow.insertCell(4);
            salePriceCell.classList.add("special");
            let salePriceDiv = document.createElement("div");
            salePriceDiv.textContent = textInput4;

            let div2 = document.createElement("div");
            div2.innerHTML = `
                <span><button class= "edit">&#128394;</button></span>
                <span><button class= "delete">&#128465;</button></span>
            `;
            salePriceCell.appendChild(salePriceDiv);
            salePriceCell.appendChild(div2);
            document.getElementById("myTable2").appendChild(newRow);

            updateRowIndexes(rows2);
            updateRowIds(rows2);
        } else {
            let row = findRowById(rowData2.id, rows2);

            if (row) {
                let nameCell = row.querySelector("td:nth-child(2)");// Change to the correct column index
                let categoryCell = row.querySelector("td:nth-child(3)"); // Change to the correct column index
                let purchasePriceCell = row.querySelector("td:nth-child(4)"); // Change to the correct column index
                let salePriceDiv = row.querySelector(".special div");

                nameCell.textContent = textInput2;
                categoryCell.textContent = textInput5;
                purchasePriceCell.textContent = textInput3;
                salePriceDiv.textContent = textInput4;
                rowData2 = {
                    id: null,
                    textInput2: '',
                    textInput3: '',
                    textInput4: '',
                    textInput5: '',
                };
            }
            input2.value = '';
            input3.value = '';
            input4.value = '';
            input5.value = '';
        }
        rowData2 = {
            id: null,
            textInput2: '',
            textInput3: '',
            textInput4: '',
            textInput5: '',
        };
    }
});

const input6 = document.getElementById("input6");
const input7 = document.getElementById("input7");
const input8 = document.getElementById("input8");
const input9 = document.getElementById("input9");

let rowNumber3 = document.querySelectorAll("#myTable3 .rows").length;
let rowIdCounter3 = document.querySelectorAll("#myTable3 .rows").length;
const rows3 = document.querySelectorAll("#myTable3 .rows");
function updateRowNumbers3() {
    const rows = document.querySelectorAll("#myTable3 .rows");
    rowNumber3 = 1;
    rows.forEach((row) => {
        let th = row.querySelector("th");
        th.textContent = rowNumber3;
        rowNumber3++;
    });
}

function updateRowIdss3() {
    const rows = document.querySelectorAll("#myTable3 .rows");
    rowIdCounter3 = 1;
    rows.forEach((row) => {
        row.dataset.rowId = rowIdCounter3;
        rowIdCounter3++;
    });
}

let rowData3 = {
    id: null,
    textInput6: '',
    textInput7: '',
    textInput8: '',
    textInput9: '',
};

function openAddNewForEditing3() {
    if (rowData3.id !== null) {
        document.getElementById("AddNew3").style.display = "block";
        input6.value = rowData3.textInput6;
        input7.value = rowData3.textInput7;
        input8.value = rowData3.textInput8;
        input9.value = rowData3.textInput9;
        sidenav.style.opacity = "70%";
        section6.style.opacity = "60%";
        section6a.style.position = "fixed";
        section6a.style.display = "block";
    }
}

table3.addEventListener('click', function (event) {
    if (event.target.classList.contains("edit")) {
        let row = event.target.closest("tr");
        let nameCell = row.querySelector("td:nth-child(2)");
        let phoneCell = row.querySelector("td:nth-child(3)");
        let emailCell = row.querySelector("td:nth-child(4)");
        let addressDiv = row.querySelector(".special div");

        rowData3 = {
            id: row.dataset.rowId,
            textInput6: nameCell.textContent,
            textInput7: phoneCell.textContent,
            textInput8: emailCell.textContent,
            textInput9: addressDiv.textContent,
        };
        openAddNewForEditing3();
    } else if (event.target.classList.contains("delete")) {
        let row = event.target.closest("tr");
        if (row) {
            row.parentNode.removeChild(row);
        }
    }
});

saveButton3.addEventListener('click', function () {
    let textInput6 = input6.value;
    let textInput7 = input7.value;
    let textInput8 = input8.value;
    let textInput9 = input9.value;

    if (textInput6 === '' || textInput8 === '' || textInput9 === '') {
        alert("Please fill out all the fields");
    } else {
        if (rowData3.id === null) {
            let newRow = document.createElement("tr");
            newRow.classList.add("rows");

            let th = document.createElement("th");
            th.textContent = rowNumber3;
            rowNumber3++;

            let nameCell = document.createElement("td");
            nameCell.textContent = textInput6;

            let phoneCell = document.createElement("td");
            phoneCell.textContent = textInput7;

            let emailCell = document.createElement("td");
            emailCell.textContent = textInput8;

            let addressCell = document.createElement("td");
            addressCell.classList.add("special");
            let addressDiv = document.createElement("div");
            addressDiv.textContent = textInput9;

            let div2 = document.createElement("div");
            div2.innerHTML = `
                <span><button class="edit">&#128394;</button></span>
                <span><button class="delete">&#128465;</button></span>
            `;

            addressCell.appendChild(addressDiv);
            addressCell.appendChild(div2);

            newRow.appendChild(th);
            newRow.appendChild(nameCell);
            newRow.appendChild(phoneCell);
            newRow.appendChild(emailCell);
            newRow.appendChild(addressCell);

            document.getElementById("myTable3").getElementsByTagName('tbody')[0].appendChild(newRow);

        } else {
            let row = findRowById(rowData3.id, rows3);

            if (row) {
                let nameCell = row.querySelector("td:nth-child(2)");
                let phoneCell = row.querySelector("td:nth-child(3)");
                let emailCell = row.querySelector("td:nth-child(4)");
                let addressDiv = row.querySelector(".special div");

                nameCell.textContent = textInput6;
                phoneCell.textContent = textInput7;
                emailCell.textContent = textInput8;
                addressDiv.textContent = textInput9;
                rowData3 = {
                    id: null,
                    textInput2: '',
                    textInput3: '',
                    textInput4: '',
                    textInput5: '',
                };
            }
        }

        input6.value = '';
        input7.value = '';
        input8.value = '';
        input9.value = '';

        rowData3 = {
            id: null,
            textInput6: '',
            textInput7: '',
            textInput8: '',
            textInput9: '',
        };
    }
});
table4.addEventListener('click', function (event) {
    if (event.target.classList.contains("delete")) {
        let row = event.target.closest("tr");
        if (row) {
            row.parentNode.removeChild(row);
        }
    }
});

table5.addEventListener('click', function (event) {
    if (event.target.classList.contains("delete")) {
        let row = event.target.closest("tr");
        if (row) {
            row.parentNode.removeChild(row);
        }
    }
});

table6.addEventListener('click', function (event) {
    if (event.target.classList.contains("delete")) {
        let row = event.target.closest("tr");
        if (row) {
            row.parentNode.removeChild(row);
        }
    }
});

const input10 = document.getElementById("date");
const input11 = document.getElementById("categoryy");

saveButton4.addEventListener('click', function () {
    let textInput10 = input10.value;
    let textInput11 = input11.value;

    if (window.getComputedStyle(section7).display === "block") {
        if (textInput10 === '' || textInput11 === '') {
            alert("Please fill out all the fields");
        } else {
            let newRow = document.createElement("tr");
            newRow.classList.add("rows");

            let th = document.createElement("th");
            th.textContent = rowNumber;
            rowNumber++;

            let td1 = document.createElement("td");
            td1.textContent = textInput10;

            let td2 = document.createElement("td");
            td2.textContent = textInput11;

            let td3 = document.createElement("td");
            td3.classList.add("special");

            let div1 = document.createElement("div");
            div1.textContent = totalAmount.toFixed(2);

            let div2 = document.createElement("div");
            div2.innerHTML = `
                <span><button class="edit">&#128394;</button></span>
                <span><button class="delete">&#128465;</button></span>
            `;

            td3.appendChild(div1);
            td3.appendChild(div2);

            newRow.appendChild(th);
            newRow.appendChild(td1);
            newRow.appendChild(td2);
            newRow.appendChild(td3);

            document.getElementById("myTable4").appendChild(newRow);

            input10.value = '';
            input11.value = '';
            let rows = tableBody.querySelectorAll('tr.rows:not(:first-child)');
            for (let row of rows) {
                tableBody.removeChild(row);
            }

            grandTotal.textContent = "0.00";
            totalAmount = 0;
        }
    }
    else if (window.getComputedStyle(section8).display === "block") {
        if (textInput10 === '' || textInput11 === '') {
            alert("Please fill out all the fields");
        } else {
            let newRow = document.createElement("tr");
            newRow.classList.add("rows");

            let th = document.createElement("th");
            th.textContent = rowNumber;
            rowNumber++;

            let td1 = document.createElement("td");
            td1.textContent = textInput10;

            let td2 = document.createElement("td");
            td2.textContent = textInput11;

            let td3 = document.createElement("td");
            td3.classList.add("special");

            let div1 = document.createElement("div");
            div1.textContent = totalAmount.toFixed(2);

            let div2 = document.createElement("div");
            div2.innerHTML = `
                <span><button class="edit">&#128394;</button></span>
                <span><button class="delete">&#128465;</button></span>
            `;

            td3.appendChild(div1);
            td3.appendChild(div2);

            newRow.appendChild(th);
            newRow.appendChild(td1);
            newRow.appendChild(td2);
            newRow.appendChild(td3);

            document.getElementById("myTable5").appendChild(newRow);

            input10.value = '';
            input11.value = '';
            let rows = tableBody.querySelectorAll('tr.rows:not(:first-child)');
            for (let row of rows) {
                tableBody.removeChild(row);
            }

            grandTotal.textContent = "0.00";
            totalAmount = 0;
        }
    }
});

let menuItems = document.getElementsByClassName("menuitems");
let grandTotal = document.getElementById("grandtotal");
let totalAmount = 0;

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function (event) {
        let clickedMenuItem = event.currentTarget;
        let productName = clickedMenuItem.querySelector("h2").textContent;
        let productPrice = parseFloat(clickedMenuItem.querySelector("h3").textContent);

        let existingRow = findExistingRow(productName);

        if (existingRow) {
            let quantityCell = existingRow.querySelector("td:nth-child(2)");
            let amountCell = existingRow.querySelector("td:nth-child(4) > div:first-child");

            let currentQuantity = parseInt(quantityCell.textContent);
            quantityCell.textContent = currentQuantity + 1;

            let currentAmount = parseFloat(amountCell.textContent);
            let newAmount = (currentAmount + productPrice).toFixed(2);
            amountCell.textContent = newAmount;

            totalAmount += productPrice;
        } else {
            let newRow = document.createElement("tr");
            newRow.classList.add("rows");

            let td1 = document.createElement("td");
            td1.textContent = productName;

            let td2 = document.createElement("td");
            td2.textContent = 1;

            let td3 = document.createElement("td");
            td3.textContent = productPrice;

            let td4 = document.createElement("td");
            td4.classList.add("special");

            let div1 = document.createElement("div");
            div1.textContent = (productPrice).toFixed(2);

            let div2 = document.createElement("div");
            div2.innerHTML = `
                <span><button class="delete">&#128465;</button></span>
            `;
            td4.appendChild(div1);
            td4.appendChild(div2);

            newRow.appendChild(td1);
            newRow.appendChild(td2);
            newRow.appendChild(td3);
            newRow.appendChild(td4);
            document.getElementById("myTable6").appendChild(newRow);

            totalAmount += productPrice;
        }
        grandTotal.textContent = totalAmount.toFixed(2);
    });
}

function findExistingRow(productName) {
    let rows = document.getElementsByClassName("rows");

    for (let i = 0; i < rows.length; i++) {
        let td1 = rows[i].querySelector("td:first-child");
        if (td1 && td1.textContent === productName) {
            return rows[i];
        }
    }

    return null;
}

let clear = document.getElementById("clear");
let tableBody = document.getElementById("myTable6");

clear.addEventListener('click', function () {
    let rows = tableBody.querySelectorAll('tr.rows:not(:first-child)');
    for (let row of rows) {
        tableBody.removeChild(row);
    }

    grandTotal.textContent = "0.00";
    totalAmount = 0;
});

$(document).ready(function () {
    function applyTableSearch(inputId, tableSelector, filterSelector) {
        $(inputId).on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $(tableSelector + " " + filterSelector).each(function () {
                var row = $(this);
                var textToSearch = row.text().toLowerCase();
                row.toggle(textToSearch.indexOf(value) > -1);
            });
        });
    }

    applyTableSearch("#tableSearch", "#myTable", "tr");
    applyTableSearch("#tableSearch2", "#myTable2", "tr.rows");
    applyTableSearch("#tableSearch3", "#myTable3", "tr");
    applyTableSearch("#tableSearch4", "#myTable4", "tr");
    applyTableSearch("#tableSearch5", "#myTable5", "tr");
});

$(document).ready(function () {
    $("#tableSearch6").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".menu div").filter(function () {
            var h2Text = $(this).find("h2").text().toLowerCase();
            $(this).toggle(h2Text.indexOf(value) > -1);
        });
    });
});

const menu = document.getElementById("menu");
let buttonclick = false;

menu.addEventListener('click', function () {
    if (sidenav.style.display === "block" || sidenav.style.display === "") {
        sidenav.style.display = "none";
    } else {
        sidenav.style.display = "block";
    }
});

function handleWindowResize() {
    if (window.innerWidth > 1100) {
        menu.style.display = "none";
        sidenav.style.display = "block";
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                sidenav.style.display = "block";
            });
        });
        section3.style.margin = "100px 300px";
        section5.style.margin = "50px 300px";
        section6a.style.margin = "50px 300px";
    }
    if (window.innerWidth <= 1100) {
        menu.style.display = "block";
        sidenav.style.display = "none";
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                hideSidenav();
            });
        });
        section3.style.margin = "30px 60px";
        section5.style.margin = "0px 0px 0px 50px";
        section6a.style.margin = "0px 0px 0px 50px";
    }
}

const buttons = document.querySelectorAll(".navdiv");
function hideSidenav() {
    sidenav.style.display = "none";
}

window.addEventListener("resize", handleWindowResize);
handleWindowResize();