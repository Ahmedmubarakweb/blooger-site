$('.carousel').carousel({
    interval: 1000
  });

setTimeout(function(){
  var ran=1000+(math.random()*2000);
  ran=math.floor(ran);
  console.log(ran);
},1000);
