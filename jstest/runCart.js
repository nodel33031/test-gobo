

var runcart = new TimelineMax({
    
    
});
runcart.stop();

runcart.to('.box',.3,{
    x:1000
}).to('.box',.1,{
    opacity:0
    
})

// setTimeout('window.location.reload(" http://127.0.0.1:5501/jstest/runCart.html',3000)


document.getElementById('play').onclick= function(){
    runcart.play();

    
    
    setTimeout(`location.reload()`,1000)
   
    
} ;    




