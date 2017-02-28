/**
 * Computer object
 * @param {number} year - year of manufactury.
 * @param {number} price - price of the computer.
 * @param {boolean} isNotebook - is the computer a notebook computer.
 * @param {number} hardDiskMemory - the tottal memory of the hard disk.
 * @param {number} freeMemory - the free memory on the hard disk.
 * @param {string} operationSystem - the operation system of the computer.
 */
function Computer(year, price, isNotebook, hardDiskMemory, freeMemory, operationSystem) {
    this.year = year;
    this.price = price;
    this.isNotebook = isNotebook;
    this.hardDiskMemory = hardDiskMemory;
    this.freeMemory = freeMemory;
    this.operationSystem = operationSystem;

    this.changeOperationSystem = function (newOperationSystem) {
        this.operationSystem = newOperationSystem;
    }
    this.useMemory = function (memory) {
        if (this.freeMemory > memory) {
            this.freeMemory -= memory;
        } else {
            console.log("Not enough memory!");
        }
    }
}
var callsArray = [];
var callsMade = 0;
var priceForAMinute = 0.05;

/**
 * Making a call
 * @param {object} caller - the object containing the caller info.
 * @param {object} receiver - the object containing the receiver info.
 * @param {number} duration - the duration of the call.
 */
function Call(caller, receiver, duration) {
    this.priceForAMinute = priceForAMinute;
    this.caller = caller;
    this.receiver = receiver;
    this.duration = duration;
}

/**
 * Making a new GSM object
 * @param {string} model - the model of the new GSM object
 */
function GSM(model) {
    this.model = model;
    this.hasSimCard = false;
    this.simMobileNumber = Number;
    this.outgoingCallsDuration = 0;
    this.lastIncomingCall = null;
    this.lastOutgoingCall = null;

    this.insertSimCard = function (simMobileNumber) {
        if (!isNaN(simMobileNumber)) {
            var stringNumber = simMobileNumber.toString();
            if (stringNumber.lenght = 10) {
                if (stringNumber[0] === "0" && (stringNumber[1] === "8")) {
                    this.hasSimCard = true;
                    this.simMobileNumber = simMobileNumber;
                } else {
                    console.log("Your number must start with 08 to be valid.");
                }

            } else if (stringNumber < 10) {
                console.log("Your number is less then 10 symbols.");
            }
            else {
                console.log("Your number is more then 10 symbols.");
            }
        } else {
            console.log("You need to input a number.");
        }
    }
    this.removeSimCard = function () {
        this.hasSimCard = false;
    }
    this.call = function (receiver, duration) {
        if (duration < 0) {
            console.log("The call's duration can not be a negative number.");
            return;
        }
        if (this === receiver) {
            console.log("You cant call your device from your device.");
        }
        if (this.hasSimCard == false || receiver.hasSimCard == false) {
            console.log("One of the devices does not have a sim card");
        }
        callsArray[callsMade] = new Call(this, receiver, duration);
        this.lastOutgoingCall = receiver;
        this.outgoingCallsDuration += duration;
        receiver.lastIncomingCall = this;
        callsMade++;
    }
    this.getSumForCall = function () {
        return (priceForAMinute / 60) * this.outgoingCallsDuration;
    }
    this.printInfoForTheLastOutgoingCall = function () {
        if (this.lastOutgoingCall !== null) {
            console.log(this.lastOutgoingCall);
        } else {
            console.log("No outgoing call has been made.");
        }
    }
    this.printInfoForTheLastIncomingCall = function () {
        if (this.lastIncomingCall !== null) {
            console.log(this.lastIncomingCall);
        } else {
            console.log("No incoming calls have been received.");
        }
    }
}
