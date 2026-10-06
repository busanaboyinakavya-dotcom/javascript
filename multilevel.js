//  class A{
//     m1(){
//         console.log("m1 from A");
        
//     }
//  }
//  class B extends A{
//     m2(){
//         console.log("m2 from B")
//     }
//  }
//  class c extends B{
//     m3(){
//         console.log("m3 from c")
//     }
//  }
//  let k= new c()
//  k.m3();
//  k.m2();
//  k.m1()

//  class mobile{
//     m(){
//         console.log("using mobile fot calling and text");
        
//     }
//  } 
//  class smartphone extends mobile{
//     s(){
//         console.log("by smart phone we use camera")
//     }
//  }
//  class latestsp extends smartphone{
//     i(){
//         console.log("by using this we can assess internet")
//     }
//  }
//  let k=new latestsp()
//  k.m();
//  k.s();
//  k.i();


class bankAccount{
    constructor(accnum,acchlname){
        this.accnum=accnum;
        this.acchlname=acchlname;

    }
    display(){
        console.log("My account name",this.accnum);
        console.log("My accountHolder name",this.acchlname);
        
    }
}
class bankblc extends bankAccount{
    constructor(accnum,acchlname,accblc){
        super(accnum,acchlname)
        this.accblc=accblc;
    }
    displaydetails(){
        super.display();
        console.log("My accoount balance",this.accblc);

    }
}
class withdraw extends bankblc{
    constructor(withdraw,accnum,acchlname,accblc){
        super(accnum,acchlname,accblc);
        this.withdraw=withdraw;
    }
    displydet(){
    super.displaydetails()
    console.log("account withdraw",this.withdraw)
    }
}

let w=new withdraw(5000,67459278,"kavya",100000);
w.displydet()

