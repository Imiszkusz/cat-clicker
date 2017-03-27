var images = document.getElementsByTagName('img');
var clickDiv = document.getElementsByClassName('clicks');

var cat1 = document.getElementsByClassName('cat1');
var cat2 = document.getElementsByClassName('cat2');
var cat3 = document.getElementsByClassName('cat3');
var cat4 = document.getElementsByClassName('cat4');
var cat5 = document.getElementsByClassName('cat5');

var catArr = [cat1, cat2, cat3, cat4, cat5];

var catsNames = ['Bibi', 'Mimi', 'Bubu', 'Cici', 'Lili']

var catTitles = document.getElementsByTagName('h2');
var catList = document.getElementsByTagName('li');
var everything = document.getElementsByClassName('allcats');


function distribute(elements, nameArr){
  for(var j = 0; j < nameArr.length; j++){
  elements[j].textContent = nameArr[j]
  }
}

distribute(catList, catsNames);
distribute(catTitles, catsNames);


for(var i = 0; i < everything.length; i++){
  everything[i].classList.add('invisible');
}



function toggler(ind){

if(ind < catList.length){
  
catList[ind].addEventListener('click', function(event){
  
  catArr.forEach(function(currVal, currInd){
    if(currInd !== ind){
      for(var x = 0; x < catArr[currInd].length; x++){
        catArr[currInd][x].classList.add('invisible');
      }
    }
  })
  
  for(var y = 0; y < catArr[0].length; y++){
  catArr[ind][y].classList.toggle('invisible');
  }
  
  clickDiv[ind].textContent = '666';
})

toggler(ind+1);
}
}

toggler(0);




function counter(ind){

 if(ind < images.length){
   images[ind].addEventListener('contextmenu', function(event){
     event.preventDefault();
   
     clickDiv[ind].textContent = String(Number(clickDiv[ind].textContent)-1);
});

   images[ind].addEventListener('click', function(event){
   
     clickDiv[ind].textContent = String(Number(clickDiv[ind].textContent)+1);
});
   
   counter(ind+1);
 }
}
  
counter(0);

