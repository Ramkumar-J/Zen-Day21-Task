// Callback Hell Task
// Display countdown from 10 to 1 on the screen and then display Happy Independence Day on the screen

var i=11;
    var time=document.createElement('div');
    time.style.fontSize="80px";
    time.style.color="brown";
    setTimeout(function(){
        time.innerText="Countdown Starts Now";
        setTimeout(function(){
            i--;
            time.innerText=i;
            setTimeout(function(){
                i--;
                time.innerText=i;
                setTimeout(function(){
                i--;
                time.innerText=i;
                setTimeout(function(){
                i--;
                time.innerText=i;
                setTimeout(function(){
                i--;
                time.innerText=i;
                setTimeout(function(){
                i--;
                time.innerText=i;
                setTimeout(function(){
                i--;
                time.innerText=i;
                setTimeout(function(){
                i--;
                time.innerText=i;
                setTimeout(function(){
                i--;
                time.innerText=i;
                setTimeout(function(){
                i--;
                time.innerText=i;
                setTimeout(function(){
                time.innerText="Happy Independence Day";
                },2000)
                },1000)
                },1000)
                },1000)
                },1000)
                },1000)
                },1000)
                },1000)
                },1000)
            },1000)
        },1000)
    },1000)
    document.body.append(time);