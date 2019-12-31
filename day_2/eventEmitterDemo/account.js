var handler = require("./handler");
var events = require("events");
var eventEmitter = new events.EventEmitter();

var account = function () {
    var balance = 5000;

    var monitor = function () {

        if (balance < 2500) {
            eventEmitter.emit("underBalance");
        }
        else if (balance > 250000) {
            eventEmitter.emit("overBalance");
        }

    }

    var deposit = function (amount) {
        balance += amount;
        monitor();
    }

    var withdraw = function (amount) {
        balance -= amount;
        monitor();
    }

    var registerHandlers=function()
    {
        eventEmitter.on("underBalance", handler.blockAccount);
        eventEmitter.on("overBalance", handler.payIncometax);
    }

    return {
        balance: balance,
        deposit: deposit,
        withdraw: withdraw,
        registerHandlers: registerHandlers
    }

}

var acct = new account();
acct.registerHandlers();
acct.deposit(4000000);
// acct.withdraw(4000);

console.log("TXN COMPLETED");