// local reviews data
const reviews = [
  {
    id: 1,
    name: "Lionel Messi",
    job: "GOAT",
    img:
      "https://s.yimg.com/ny/api/res/1.2/UBK8CSA0bWFefGq0rk1Q7w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNi40OTY-/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-08/3a5bb970-d9b1-11ea-bf97-7e2cecd2885c",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    job: "Winger",
    img:
      "https://talksport.com/wp-content/uploads/sites/5/2020/08/NINTCHDBPICT000600632251-e1596834246622.jpg?strip=all&w=960&quality=100",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Neymar",
    job: "Winger",
    img:
      "https://s.yimg.com/ny/api/res/1.2/YiuBs_sgjMuwGM14bXdRBw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NzY4O2g9NTEy/https://media.zenfs.com/en/afp.com/cdb7166876ddf10060d0b722e59246c4",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Lewandowski",
    job: "Striker",
    img:
      "https://img.fcbayern.com/image/fetch/f_auto,h_880,q_auto:good,w_660/https://fcbayern.com/binaries/content/gallery/fc-bayern/homepage/saison-19-20/profis/lewandowski/191001_lewandowski_ima.jpg/191001_lewandowski_ima.jpg/fcbhippo%3Alargeninetotwelve%3Fv%3D1579095524765",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.querySelector("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;
function change(currentItem) {
  var i=reviews[currentItem];
  img.src=i.img;
  author.textContent=i.name;
  job.textContent=i.job;
  inf0.textContent=i.text;
}

prevBtn.addEventListener("click",function () {
  currentItem--;
  if(currentItem<0){
    currentItem=reviews.length-1;
  }
  change(currentItem);

})
nextBtn.addEventListener("click",function () {
  currentItem++;
  if(currentItem>3){
    currentItem=0;
  }
  change(currentItem);

})
randomBtn.addEventListener("click",function () {
  currentItem=Math.floor(Math.random()*4);
  change(currentItem);

})
