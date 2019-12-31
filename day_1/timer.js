onTimer=function()
{
    console.log("Timer Function");
}

onDisplay=function()
{
    console.log("Display Function");
}

setInterval(onTimer,3000);
setInterval(onDisplay,1000);

