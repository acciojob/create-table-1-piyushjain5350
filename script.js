// const tableContent=document.querySelector("#sampleTable");
// let cellNo=1;
// function insert_Row() {
//     //Write your code here
// 	const tr=document.createElement("tr");
// 	let altCellNo=cellNo+1;
// 	tr.innerHTML=`
// 		<td>New Cell${cellNo}</td> 
// 		<td>New Cell${altCellNo}</td>
//  `
//   tableContent.prepend(tr);
// 	cellNo+=2;
// }
function insert_Row() {
  const table = document.getElementById("sampleTable");
  const newRow = table.insertRow(0);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  cell1.innerText = "New Cell" + ++count;
  cell2.innerText = "New Cell" + ++count;
}

let count = 0;