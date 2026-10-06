class mobilephone{
    static companyname = "realme";
    static warrantyperiod = "1.5 years";
    data(storage,price ,ram ,color){
        this.storage =storage;
        this.price = price;
        this.ram = ram;
        this.color = color;
    }
    display(){
        console.log("company :",mobilephone.companyname);
         console.log("warrantyperiod :",mobilephone.warrantyperiod);
         console.log("storage :",this.storage);
          console.log("price :",this.price);
           console.log("ram :",this.ram); 
            console.log("color:",this.color);
            console.log("----------------------------");
    }
}

let mobile1 = new mobilephone();
mobile1.data("128GB", 15000,"8GB","white");
mobile1.display();

let mobile2 = new mobilephone()
mobile2.data("256GB", 25000,"8GB","black")
mobile2.display();

let mobile3 = new mobilephone()
mobile3.data("256GB", 30000,"8GB","silver")
mobile3.display();

let mobile4 = new mobilephone()
mobile4.data("256GB", 35000,"8GB","blue")
mobile4.display();

//-------------------------------------------------------------------------------------

class employee{
    static companyname ="bcd Technologies"
    static companywebsite ="bcd technologies.com"
    set_data(emp_name,emp_ID,emp_login,emp_logout){
        this.emp_name=emp_name;
        this.emp_ID = emp_ID;
        this.emp_login = emp_login;
        this.emp_logout = emp_logout;

    }
    display(){
        console.log("companyname :",employee.companyname);
        console.log("companywebsite :",employee.companywebsite);
        console.log("employee name :",this.emp_name);
        console.log("employee ID :",this.emp_ID);
        console.log("employee login :",this.emp_login);
        console.log("employee logout :",this.emp_logout);
        console.log("-------------------------------");
    }
}

let employee1 = new employee();
employee1.set_data("Hero1","CD23678","9:00","6:00");
employee1.display();

let employee2 = new employee();
employee1.set_data("Hero2","CD23656","9:30","6:30");
employee1.display();

let employee3 = new employee();
employee1.set_data("Hero3","CD23627","10:00","7:00");
employee1.display();

let employee4 = new employee();
employee1.set_data("Hero4","CD23689","9:15","6:15");
employee1.display();

//-------------------------------------------------------------------

class restaurant{
    static restaurentname= "xyz";
    static location = "Hyderabed";
    data(customername,food,price,tableNo,){
        this.customername = customername;
        this.food = food;
        this .price = price;
        this .tableNo = tableNo;
    }
    display(){
        console.log("Restaurent :",restaurant.restaurentname);
         console.log("Location :",restaurant.location);
          console.log("customername :",this.customername);
           console.log("Food :",this.food);
            console.log("Price :",this.price);
             console.log("TableNumber :",this.tableNo);
              console.log("--------------------------------")
        
    }
}

let restaurant1 = new restaurant();
restaurant1.data("hero1","pizza",500,"03");
restaurant1.display();

let restaurant2 = new restaurant();
restaurant2.data("hero2","Burger",500,"01");
restaurant2.display();

let restaurant3 = new restaurant();
restaurant3.data("hero3","chicken Birayani",1500,"06");
restaurant3.display();

let restaurant4 = new restaurant();
restaurant4.data("hero4","chicken roll",500,"09");
restaurant4.display();