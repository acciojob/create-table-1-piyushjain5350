const tableContent=document.querySelector("#sampleTable");
let cellNo=1;
function insert_Row() {
    //Write your code here
	const tr=document.createElement("tr");
	let altCellNo=cellNo+1;
	tr.innerHTML=`
		<td>New Cell ${cellNo}</td> 
		<td>New Cell ${altCellNo}</td>
 `
  tableContent.prepend(tr);
	cellNo+=2;
}
