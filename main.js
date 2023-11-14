document.body.style.border = "5px solid green";

var filter, tr, td, i, txtValue;
filter = "bought in past month".toUpperCase();
// console.log(filter);
tr = document.getElementsByClassName("s-result-item s-asin");
// console.log(tr);
for (i = 0; i < tr.length; i++) {
    // td = tr[i].getElementsByClassName("a-row a-size-base")[0];
  td = tr[i];
  if (td) {
    // console.log(i, td);
    txtValue = td.textContent || td.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }       
}
