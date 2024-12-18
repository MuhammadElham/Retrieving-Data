const obj = [
  { name: "Ahmed Khan", class: 1, roll: 1 },
  { name: "Sara Ali", class: 1, roll: 2 },
  { name: "Usman Tariq", class: 1, roll: 3 },
  { name: "Ayesha Malik", class: 1, roll: 4 },
  { name: "Ali Raza", class: 1, roll: 5 },
  { name: "Hina Shah", class: 2, roll: 1 },
  { name: "Kamran Javed", class: 2, roll: 2 },
  { name: "Zara Sheikh", class: 2, roll: 3 },
  { name: "Bilal Ahmed", class: 2, roll: 4 },
  { name: "Maham Farooq", class: 2, roll: 5 },
  { name: "Omer Hussain", class: 3, roll: 1 },
  { name: "Anum Fatima", class: 3, roll: 2 },
  { name: "Fahad Iqbal", class: 3, roll: 3 },
  { name: "Kiran Javed", class: 3, roll: 4 },
  { name: "Rameez Khan", class: 3, roll: 5 },
  { name: "Samina Tariq", class: 4, roll: 1 },
  { name: "Zain Abbas", class: 4, roll: 2 },
  { name: "Fatima Noor", class: 4, roll: 3 },
  { name: "Hassan Butt", class: 4, roll: 4 },
  { name: "Tania Ahmed", class: 4, roll: 5 },
  { name: "Danish Raza", class: 5, roll: 1 },
  { name: "Lubna Aslam", class: 5, roll: 2 },
  { name: "Hamza Qureshi", class: 5, roll: 3 },
  { name: "Nida Khan", class: 5, roll: 4 },
  { name: "Adil Sharif", class: 5, roll: 5 },
  { name: "Rida Mehmood", class: 6, roll: 1 },
  { name: "Saad Ahmed", class: 6, roll: 2 },
  { name: "Mehwish Tariq", class: 6, roll: 3 },
  { name: "Waqas Ali", class: 6, roll: 4 },
  { name: "Nashit Hussain", class: 6, roll: 5 },
];
var tableBody = document.getElementById("tableBody");
for (i = 0; i < obj.length; i++) {
  const row = `<tr><td>${obj[i].name}</td><td>${obj[i].class}</td><td>${obj[i].roll}</td></tr>`;
  tableBody.innerHTML = tableBody.innerHTML + row;
}

// Search
const tbData = document.getElementById("tableBodySearch");
function forsearch() {
  const inpData = document.getElementById("search").value;
  // filter
  const filterData = obj.filter((student) => {
    // filter hamesha poora object return karta hai jo condition satisfy kare,
    return student.name == inpData;
  });
  // console.log(filterData);

  // innerhtml end
  tbData.innerHTML = "";
  // data show
  if (filterData.length > 0) {
    filterData.map((student) => {
      let row = `<tr>
      <td>${student.name}</td>
      <td>${student.class}</td>
      <td>${student.roll}</td>
      </tr>`;
      tbData.innerHTML += row;
    });
  } else {
    let row = `<tr><td colspan="3">Not Found</td></tr>`;
    tbData.innerHTML += row;
  }
}
// OR
// printing
// tbSearch.innerHTML =
//   filterOut.length > 0
//     ? filterOut.map(
//         (student) =>
//           `<tr><td>${student.name}</td><td>${student.class}</td><td>${student.roll}</td></tr>`
//       )
//     : "<tr><td colspan=3>Not Found</td></tr>";
// }
// DropDown
const tbdropDown = document.getElementById("tbDropDown");
function chanegeFunction() {
  let selectField = document.getElementById("stdDetails").value;
  let classNumber = selectField.replace("class ", "");

  const filterOut = obj.filter((student) => {
    return student.class === parseInt(classNumber);
  });
  tbdropDown.innerHTML = filterOut.map((student) =>`<tr><td>${student.name}</td><td>${student.class}</td><td>${student.roll}</td></tr>`
  ).join("");
}
