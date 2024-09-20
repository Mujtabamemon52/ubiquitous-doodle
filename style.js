let time = 60;
let score = 0 ;
let hitrun = '';



function  Scorevalue(){
 score += 10;
 document.querySelector('#score').textContent = score;
}

function getNewHit() {
    hitrun = Math.floor(Math.random()*10)
    document.getElementById('hitval').textContent = hitrun;    
}

function  makebubble(){
    let clutter = '';
    for( i = 1; i <=90; i++  ){
        let rn = Math.floor(Math.random()*10)
        clutter += `<div id="bubble">${rn}</div>`
    }   
    document.querySelector('#pbtm').innerHTML = clutter
}
function runtimer(){
      let times =   setInterval(function(){
            if (time>0)  {
                time --; 
                document.getElementById('timeval').textContent = time 
            }
            else{
                clearInterval(times)
                document.querySelector('#pbtm').innerHTML = `<h1> Game is over  </h1> `
            }
     } , 1000);
}


document.querySelector('#pbtm').addEventListener('click',function(details){
 let clickNumber =  Number(details.target.innerHTML)
  if(clickNumber === hitrun){
    Scorevalue();
    makebubble();
    getNewHit();
  }
})


makebubble();
runtimer();
getNewHit();