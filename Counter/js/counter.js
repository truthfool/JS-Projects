var val=document.getElementById('counter');
var i=document.getElementById('increase');
var d=document.getElementById('decrease');
var r=document.getElementById('reset');
var count=0;
i.addEventListener('click',function() {
  val.textContent=++count;
})

d.addEventListener('click',function() {
  val.textContent=--count;
})

r.addEventListener('click',function() {
  val.textContent=0;
})
