let player = document.getElementById('player');
let block = document.getElementById('block');
let scoure = 0;
let scoureelement = document.getElementById('scoure');


function moveleft(){
    const curleft= parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    if(curleft<=0)
    return
    const newleft= curleft - 100;
    player.style.left = newleft +'px'
}

function moveright(){
    const curleft= parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    if(curleft>=200)return
    const newleft= curleft + 100;
    player.style.left = newleft +'px'
}

document.addEventListener('keydown', (event)=>{
    if(event.key == "ArrowLeft") moveleft();
    else if(event.key == "ArrowRight") moveright();
})

block.addEventListener('animationiteration',()=>{
    const randpos=Math.floor((Math.random() *3)) * 100;
    block.style.left = randpos + 'px';
   scoure++;
   scoureelement.innerHTML = `score: ${scoure}`

})

setInterval(()=>{
   let playerleft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
   let blockleft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
   let blocktop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));

   if(playerleft ==blockleft && blocktop <450 && blocktop>310){
    alert('Game Over!!');
    block.style.top = -100 + 'px' 
    scoure = 0;
   }
},1
)