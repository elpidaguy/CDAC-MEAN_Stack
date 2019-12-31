var account=function(){
    var balance=5000;

    var deposit=function(amount){
        balance+=amount;
        console.log("deposit is invoked.....")
    }

    var withdraw=function(amount){
        balance-=amount;
    }
    // is used for publishing inner functions  for outside world.
    return{
        deposit:deposit,
        withdraw:withdraw
    }
}


var acct123=new  account();
acct123.deposit(200000);
console.log("Program Ended.....")