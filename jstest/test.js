

var runcart = new TimelineMax({
    // repeat: 1,
    // yoyo: true,
    
});
runcart.stop();

runcart.to('.box',.3,{
    x:500
}).to('.box',.1,{
    opacity:0
})


document.getElementById('play').onclick= function(){
    runcart.play();

    // $('img').remove();
    
   
    
} ;    




