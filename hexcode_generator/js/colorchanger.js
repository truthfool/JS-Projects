const cli=document.getElementById('clickme');
const chan=document.getElementById('change');
const col=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];


function colorchanger() {
  return Math.floor(Math.random()*col.length);
}

cli.addEventListener('click',function () {
  var h='#';
  for(let i=0;i<6;i++)
  {
    const random=colorchanger();
    h=h+col[random];
  }

  chan.textContent=h;
  document.body.style.backgroundColor=h;
});
