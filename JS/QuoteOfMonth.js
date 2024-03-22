//yt link:https://www.youtube.com/watch?v=vtq2xTWK7h4

//Accessing Excel sheet
let SHEET_ID = '1lyQxafEbbVmFFvMu5elmYjTYkjIv2vdt791QHyB-Uyo'
let SHEET_TITLE = 'Sheet1';
let SHEET_RANGE = 'A2:C5'

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
  let data=JSON.parse(rep.substr(47).slice(0,-2));
  
  console.log(data.table.rows[1].c[1].v)

  //console.log(data.table.rows[x].c[y].v)
  //x represents index of row of content while y represents index of column of content

})


// document.addEventListener("DOMContentLoaded", function () {

// const QOTM_content=document.getElementById("QOTM_content")
// const QOTM_person=document.getElementById("QOTM_person")   
// const QOTM_position=document.getElementById("QOTM_position")   

//   });
