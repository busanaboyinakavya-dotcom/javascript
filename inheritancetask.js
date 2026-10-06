class product{
    storage(){
        console.log("the product has good storage");
        
    }

}
class iphone extends product{
    display(){
        console.log("iphone is a product")
    }
}
let p=new iphone()
p.storage()
p.display()

// ----------------------- example2--------------------------
class Bank{
    constructor(ac_name,ac_no,deposite){
        this.ac_name=ac_name;
        this.ac_no=ac_no;
        this.deposite=deposite;
    }
    display(){
        console.log("my account Holder Name :",this.ac_name);
        console.log("my account number Name :",this.ac_no);
        console.log("my deposite Name :",this.deposite);
        
    }
}
class union extends Bank{
    constructor(ac_name,ac_no,deposite,withdraw){
        super(ac_name,ac_no,deposite)
        this.withdraw=withdraw
    }
    displaydetails(){
    super.display()
    console.log("my withdraw",this.withdraw);
    }
}
let b=new union("hero",293759275,11000,300)
b.displaydetails()

// ---------------example3-------------------------------------

class mobile{
    constructor(brand,price,ram){
        this.brand=brand;
        this.price=price;
        this.ram=ram;
    }
    display(){
        console.log("my Brand Name :",this.brand);
        console.log("my price :",this.price);
        console.log("my ram :",this.ram);
        
    }
}
class iphone extends mobile{
    constructor(brand,price,ram,features,model){
        super(brand,price,ram)
        this.features=features
        this.model=model
    }
    displaydetails(){
    super.display()
    console.log("my featutres",this.features);
    }
}
let b=new iphone("realme",20000,"12GB","50 MP,processer","realme p4 5G")
b.displaydetails()

// ------------------example4-------------------------------------------

class college{
    constructor(std_name,std_ID_no){
        this.std_name=std_name;
        this.std_ID_no=std_ID_no;
        
    }
    display(){
        console.log("my student Name :",this.std_name);
        console.log("my std_ID_no :",this.std_ID_no);
        
        
    }
}
class student extends college{
    constructor(std_name,std_ID_no,std_attendance,std_hallticket){
        super(std_name,std_ID_no)
        this.std_attendance=std_attendance
        this.std_hallticket=std_hallticket
    }
    displaydetails(){
    super.display()
    console.log("my attendance",this.std_attendance);
    console.log("my hallticket",this.std_hallticket);
    }
}
let b=new student("hero","22U412908","80%","28474")
b.displaydetails()
