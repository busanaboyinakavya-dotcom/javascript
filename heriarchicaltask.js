// example1 (bankaccount->current account,fixed deposite)

// class BankAcc{
//     constructor(accNum,Acchld){
//         this.accNum=accNum
//         this.Acchld=Acchld
//     }
//     display(){
//         console.log("account number : ",this.accNum)
//         console.log("account holder name : ",this.Acchld)

//     }
// }

// class CurrentAcc extends BankAcc{
//     constructor(accNum,Acchld,balance){
//         super(accNum,Acchld)
//         this.balance=balance
//     }
//     displayCur(){
//         super.display()
//         console.log("account balance : ",this.balance)

//     }
// }

// class FixedDeposite extends BankAcc{
//     constructor(accNum,Acchld,amount,duration){
//         super(accNum,Acchld)
//         this.amount=amount
//         this.duration=duration
//     }
//     displayFix(){
//         super.display()
//         console.log("amountr : ",this.amount)
//         console.log("duration : ",this.duration)

//     }
// }
// console.log("current acc ----->")
// let current=new CurrentAcc(203030,"ram",40000)
// current.displayCur()
// console.log("fixed acc ---->")
// let Fixed = new FixedDeposite(302010,"raj",80000,"1year")
// Fixed.displayFix()


// --------------------------example 2-------------------------------------

// class vehicle{
//     constructor(brand,speed){
//         this.brand=brand;
//         this.speed=speed;
//     }
//     display(){
//         console.log("brand name : ",this.brand)
//         console.log("speed  : ",this.speed)

//     }
// }

// class car extends vehicle{
//     constructor(brand,speed,features){
//         super(brand,speed)
//         this.features=features;
//     }
//     displaycar(){
//         super.display()
//         console.log("features: ",this.features)

//     }
// }

// class bike extends vehicle{
//     constructor(brand,speed,features,amount){
//         super(brand,speed)
//         this.features=features
//         this.amount=amount
        
//     }
//     displaybike(){
//         super.display()
//         console.log("featutres:",this.features)
//         console.log("amountr : ",this.amount)
       

//     }
// }
// console.log("vehicle ----->")
// let v=new vehicle("BMW",120)
// v.display()
// console.log("bike ---->")
// let b = new bike("ktm",120,"good mileage",100000)
// b.displaybike()

// --------------------example3---------------------------------------------

class Payment{
    constructor(amount,date){
        this.amount=amount
        this.date=date
    }
    display(){
        console.log("amount : ",this.amount)
        console.log("date : ",this.date)
    }
}

class CreditCard extends Payment{
    constructor(amount,date,cardNumber,bank){
        super(amount,date)
        this.cardNumber=cardNumber
        this.bank=bank
    }
    displayCredit(){
        super.display()
        console.log("card number : ",this.cardNumber)
        console.log("bank name : ",this.bank)
    }
}

class UPI extends Payment{
    constructor(amount,date,upi_id,app){
        super(amount,date)
        this.upi_id=upi_id
        this.app=app
    }
    displayUpi(){
        super.display()
        console.log("upi id : ",this.upi_id)
        console.log("upi app : ",this.app)
    }
}

console.log("credit card ---->")
let credit=new CreditCard(3000,"04-10-2026",7849827,"union")
credit.displayCredit()
console.log("upi ----->")
let upi=new UPI(1000,"05-03-2026","kavya@upi","Phone pay")
upi.displayUpi()

