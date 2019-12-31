
var account =function()
{
    var balance=5000;

    var deposit=function(amount){
        balance+=amount;
        console.log(balance);
       // return balance;
    }

    var withdraw=function(amount){
        balance-=amount;
       // return balance;
    }
    // is used for publishing inner functions  for outside world.
    return{
        balance:balance,
        deposit:deposit,
        withdraw:withdraw
    }

}

var acct =new account();
acct.deposit(2000);

console.log(acct.balance);
//var x = account()
//account().deposit(1000);
