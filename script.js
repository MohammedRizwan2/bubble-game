let score = 0;
let hitrh = 0;

let makeBubble=()=>{  
  let cluster="";
  for(i=1; i<=128; i++){
    let rn =Math.floor(Math.random()*10)
    cluster+=`<div class="bubble">${rn}</div>`
        }
     document.querySelector("#pbtm").innerHTML=cluster;
}



let runTimer=()=>{
    let timer = 60;
   let timerint = setInterval(
    ()=>{
         if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
          clearInterval(timerint)
          document.querySelector("#pbtm").innerHTML="Game Over"
        }

   }, 1000);
    
}

let getNewHit=()=>{
  hitrh= Math.floor(Math.random()*10) 
  document.querySelector("#hitval").textContent=hitrh;
}
let increaseScore=()=>{
  score += 10;
  document.querySelector("#scoreval").textContent=score

}

document.querySelector("#pbtm").
addEventListener("click",(dets)=>{
let clickedNum = Number(dets.target.textContent);
if(clickedNum===hitrh){
    getNewHit();
    increaseScore();
    makeBubble();
}
})




getNewHit()
runTimer();
makeBubble();