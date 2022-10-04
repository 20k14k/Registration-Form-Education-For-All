// ---------for page 1-----------

const nextpg1 = document.getElementById("nextpg1");
nextpg1.addEventListener("click", gotopg2from1);

function gotopg2from1() {
  var page2 = document.querySelector(".additionaldetails");
  page2.classList.add("activepage2");
  document.getElementById("step2").classList.add("stepactive")
  document.getElementById("step1").classList.remove("stepactive")
}

// ---- for page 2------
const backpg2 = document.getElementById("backpg2");
backpg2.addEventListener("click", gotopg1from2);

function gotopg1from2() {
  var page2 = document.querySelector(".additionaldetails");
  page2.classList.remove("activepage2");
  document.getElementById("step2").classList.remove("stepactive")
  document.getElementById("step1").classList.add("stepactive")
}

const nextpg2 = document.getElementById("nextpg2");
nextpg2.addEventListener("click", gotopg3from2);
function gotopg3from2() {
  var page3 = document.querySelector(".educationaldetails");
   page3.classList.add("activepage3");
   document.getElementById("step3").classList.add("stepactive")
   document.getElementById("step2").classList.remove("stepactive")
}
// ---- for page 3------
const backpg3 = document.getElementById("backpg3");
backpg3.addEventListener("click", gotopg2from3);

function gotopg2from3() {
  var page3 = document.querySelector(".educationaldetails");
  page3.classList.remove("activepage3");
  document.getElementById("step3").classList.remove("stepactive")
   document.getElementById("step2").classList.add("stepactive")
}



// --------marks showing in input box ----------
function totalsub1() {
  var theorysub1 = document.getElementById("theorymarkssub1").value;
  var practicalsub1 =  document.getElementById("practicalmarkssub1").value;
  if(theorysub1 == "" || practicalsub1 == ""){
    return
  }
  else{
    var theorysub1 = parseInt(document.getElementById("theorymarkssub1").value);
  var practicalsub1 = parseInt( document.getElementById("practicalmarkssub1").value);
  var totalsub1 = document.getElementById("totalmarkssub1");
  let sumofsub1 = theorysub1 + practicalsub1;
  totalsub1.value = sumofsub1;
  }
}
setInterval(totalsub1, 10);
function totalsub2() {
  var theorysub2 = document.getElementById("theorymarkssub2").value;
  var practicalsub2 =  document.getElementById("practicalmarkssub2").value;
  if(theorysub2 == "" || practicalsub2 == ""){
    return
  }
  else{
    var theorysub2 = parseInt(document.getElementById("theorymarkssub2").value);
  var practicalsub2 = parseInt( document.getElementById("practicalmarkssub2").value);
  var totalsub2 = document.getElementById("totalmarkssub2");
  let sumofsub2 = theorysub2 + practicalsub2;
  totalsub2.value = sumofsub2;
  }
}
setInterval(totalsub2, 10);
function totalsub3() {
  var theorysub3 = document.getElementById("theorymarkssub3").value;
  var practicalsub3 =  document.getElementById("practicalmarkssub3").value;
  if(theorysub3 == "" || practicalsub3 == ""){
    return
  }
  else{
    var theorysub3 = parseInt(document.getElementById("theorymarkssub3").value);
  var practicalsub3 = parseInt( document.getElementById("practicalmarkssub3").value);
  var totalsub3 = document.getElementById("totalmarkssub3");
  let sumofsub3 = theorysub3 + practicalsub3;
  totalsub3.value = sumofsub3;
  }
}
setInterval(totalsub3, 10);
function totalsub4() {
  var theorysub4 = document.getElementById("theorymarkssub4").value;
  var practicalsub4 =  document.getElementById("practicalmarkssub4").value;
  if(theorysub4 == "" || practicalsub4 == ""){
    return
  }
  else{
    var theorysub4 = parseInt(document.getElementById("theorymarkssub4").value);
  var practicalsub4 = parseInt( document.getElementById("practicalmarkssub4").value);
  var totalsub4 = document.getElementById("totalmarkssub4");
  let sumofsub4 = theorysub4 + practicalsub4;
  totalsub4.value = sumofsub4;
  }
}
setInterval(totalsub4, 10);
function totalsub5() {
  var theorysub5 = document.getElementById("theorymarkssub5").value;
  var practicalsub5 =  document.getElementById("practicalmarkssub5").value;
  if(theorysub5 == "" || practicalsub5 == ""){
    return
  }
  else{
    var theorysub5 = parseInt(document.getElementById("theorymarkssub5").value);
  var practicalsub5 = parseInt( document.getElementById("practicalmarkssub5").value);
  var totalsub5 = document.getElementById("totalmarkssub5");
  let sumofsub5 = theorysub5 + practicalsub5;
  totalsub5.value = sumofsub5;
  }
}
setInterval(totalsub5, 10);
function totalsub6() {
  var theorysub6 = document.getElementById("theorymarkssub6").value;
  var practicalsub6 =  document.getElementById("practicalmarkssub6").value;
  if(theorysub6 == "" || practicalsub6 == ""){
    return
  }
  else{
    var theorysub6 = parseInt(document.getElementById("theorymarkssub6").value);
  var practicalsub6 = parseInt( document.getElementById("practicalmarkssub6").value);
  var totalsub6 = document.getElementById("totalmarkssub6");
  let sumofsub6 = theorysub6 + practicalsub6;
  totalsub6.value = sumofsub6;
  }
}
setInterval(totalsub6, 10);
function totalsub7() {
  var theorysub7 = document.getElementById("theorymarkssub7").value;
  var practicalsub7 =  document.getElementById("practicalmarkssub7").value;
  if(theorysub7 == "" || practicalsub7 == ""){
    return
  }
  else{
    var theorysub7 = parseInt(document.getElementById("theorymarkssub7").value);
  var practicalsub7 = parseInt( document.getElementById("practicalmarkssub7").value);
  var totalsub7 = document.getElementById("totalmarkssub7");
  let sumofsub7 = theorysub7 + practicalsub7;
  totalsub7.value = sumofsub7;
  }
}
setInterval(totalsub7, 10);





// <--------- alers for invalid marks-------->

function alertfor80() {
  let theorymarks = document.getElementById("theorymarkssub1").value
  if (theorymarks >80) {
    let empty = ""
    theorymarks.value = empty
    alert("marks cant be grater than 80")
  }
}

setInterval(alertfor80, 100);