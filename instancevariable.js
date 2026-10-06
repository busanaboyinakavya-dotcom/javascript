// instant variable
// this is special keyword
// class test{
//     myname="Inno";
//     m1(){
//         console.log("Iam m1 method myname = ",this.myname);
        
//     }
// }
// // cretaing object
// let t = new test();
// t.m1();
// ----------------------------------------------------------------------
// class test{
//     myname = "Hero";
//     m1(){
//         console.log("myname Inside m1 =",this.myname);
        
//     }
// }
// t= new test();
// t.m1();
// console.log("my name outside = ",t.myname="zero");
// --------------------------------------------------------------------
// checking class inside another class
// class test{
//     myname="hero";

// }
// class test2{
//     m2(){
//         let t1 = new test();
//         console.log("Im method of test2",t1.myname);
        
//     }
// }

// let t2=new test2();
// t2.m2();
// --------------------------------------------------------------------------

// class Oops{
//     display(){
//         console.log("my name is",this.name);
//          console.log("my age is",this.age);
//           console.log("my gender is",this.gender);
        
//     }
// }

// let obj = new Oops();
// obj.name="Hero";
// obj.age = "21"
// obj.gender = "male"
// console.log("outside",);
// obj.display()


// --------------------------------------------------------------------------
// class student{
//     displaydetails(){
//         console.log("My Name is",this.myname);
//         console.log("course is",this.course);
//         console.log("attendance is",this.attendance);


//     }
// }

// let s1 = new student();
// s1.myname= "hero";
// s1.course="python"
// s1.attendance="70%";
// console.log("----student 1 details -----");

// s1.displaydetails();

// let s2 = new student();
// s2.myname="zero";
// s2.course="javascript";
// s2.attendance="70%"
// console.log("---student 2 details ----");
// s2.displaydetails()
// ----------------------------------------------------
// class student{
//     // creating instance variable and assigning the value to them
//     set_data(name,age,course){
//         this.myname = name;
//         this.myage =age;
//         this.mycourse = course;

//     }
//     displaydetails(){
//         console.log("my name is",this.myname);
//          console.log("my age is",this.myage);
//           console.log("my course is",this.mycourse);
        
//     }
// }
// let s1 = new student();
// s1.set_data("Hero",21,"python");
// s1.displaydetails();

// ------------------------------------------------------------
// class bank{
//     bank_name="Inno bank";
//     set_data(ac_no,ac_hd_name,ac_blc){
//         this.myacno = ac_no;
//         this.myacname = ac_hd_name;
//         this.myacblc = ac_blc;
//     }
//     displayacdetails(){
//         console.log("Accoount Name ",bank.bank_name);
//         console.log("Accoount NUmber ",this.myacno);
//         console.log("Accoount Holder Name ",this.myacname);
//         console.log("Accoount Balance ",this.myacblc);
        
//     }
// }
// // bank.bank_name="SBI Bank"
// let user1=new bank();
// console.log("-----account holder 1 ---------");
// user1.set_data(101,"hero1",87659);
// user1.displayacdetails();


// let user2=new bank();
// console.log("-----account holder 2 ---------");
// user2.set_data(102,"hero2",927429);
// user2.displayacdetails();


// let user3=new bank();
// console.log("-----account holder 3 ---------");
// user3.set_data(103,"hero3",197497);
// user3.displayacdetails();