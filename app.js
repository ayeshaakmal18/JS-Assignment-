// Ch:5(Maths expressions)
//Q:1 and Q:2
// var num1=+prompt('enter 1 num')
// var num2=+prompt('enter 2 num')
// var add=num1+num2
// var sub=num1-num2
// var mul=num1*num2
// var div=num1/num2
// var mod=num1%num2
// document.writeln(`sum of ${num1} and ${num2} is ${add} <br>`);
// document.writeln(`sum of ${num1} and ${num2} is ${sub} <br>`);
// document.writeln(`sum of ${num1} and ${num2} is ${mul} <br>`);
// document.writeln(`sum of ${num1} and ${num2} is ${div} <br>`);
// document.writeln(`sum of ${num1} and ${num2} is ${mod} <br>`);

//Q:3
// var num;
// document.writeln(`value after variable declaration is ${num}<br>`);
// var num=5;
// document.writeln(`initial value is ${num}<br>`);
// num++
// document.writeln(` value after increment is ${num}<br>`);
// var num=num+7
// document.writeln(` value after addition is ${num}<br>`);
// num--
// document.writeln(` value after decrement is ${num}<br>`);
// var num=num%3;
// document.writeln(` the remainder is ${num}<br>`);

//Q:4
// var price1=600 
// var noofprice=5
// var totalprice=price1*noofprice;
// document.writeln(`total cost to buy 5 tickets to a movie is ${totalprice} PKR`)

//Q:5
// var table=+prompt('enter any no for table')
// document.writeln(`table of ${table}<br>`)
// document.writeln(` ${table}*1=`,table*1 +'<br>')
// document.writeln(` ${table}*2=`,table*2 +'<br>')
// document.writeln(` ${table}*3=`,table*3 +'<br>')
// document.writeln(` ${table}*4=`,table*4 +'<br>')
// document.writeln(` ${table}*5=`,table*5 +'<br>')
// document.writeln(` ${table}*6=`,table*6 +'<br>')
// document.writeln(` ${table}*7=`,table*7 +'<br>')
// document.writeln(` ${table}*8=`,table*8 +'<br>')
// document.writeln(` ${table}*9=`,table*9 +'<br>')
// document.writeln(` ${table}*10=`,table*10)

//Q:6
//var temp=25   // temp in celcius
// F=(temp*9/5)+32;
// document.writeln(`25 degree in fahrenheit is ${F} <br>`);
//var temp=70   // temp n fahrenhit
// C=(temp-32)*5/9;
// document.writeln(`70 degree in fahrenheit is ${C}`);

//Q:7
// let item1Price = 500, item1Qty = 2;
// let item2Price = 800, item2Qty = 1;
// let shipping = 150;
// 
// let subtotal = (item1Price * item1Qty) + (item2Price * item2Qty);
// let total = subtotal + shipping;
// 
// document.writeln(`
//   <h2>Receipt</h2>
//   Item 1: PKR ${item1Price} x ${item1Qty} = PKR ${item1Price * item1Qty}<br>
//   Item 2: PKR ${item2Price} x ${item2Qty} = PKR ${item2Price * item2Qty}<br>
//   <hr>
//   Subtotal: PKR ${subtotal}<br>
//   Shipping: PKR ${shipping}<br>
//   <b>Total: PKR ${total}</b>
// `);


//Q:8 
// var totalMarks=980;
// var marksObtained=804;
// var perc=(marksObtained/totalMarks)*100
// document.writeln(`total marks: 980 <br>`)
// document.writeln(`marks obtained: 804 <br>`)
// document.writeln(`percentage: ${perc}`)

//Q:9
// var pakcurr=10;
// var sauriy=25;
// var concurr=pakcurr*104.80 + sauriy*28;
// document.writeln(`total currency in PKR is ${concurr}`)

//Q:10
// var num=2 ,num=num+5 ,num=num*10 ,num=num/2
// document.writeln(num)

//Q:11
// var currentYear=2026;
// var birthYear=2007;
// var age=currentYear-birthYear
// var age= age-1
// document.writeln(age)

//Q:12
// var radius=20
// var crcumference=(2*3.14*radius);
// var area=(3.14*(radius*radius))
// document.writeln(`radius :20 <br>`)
// document.writeln(`circumference : ${crcumference} <br>`)
// document.writeln(`area : ${area}`)

//Q:13
// var favouriteSnack='choclate'
// var currentAge=18
// var maxAge=80
// var estimatedAmount=1
// var yearsRemaining=maxAge-currentAge;
// var totalSnacks=yearsRemaining*365*estimatedAmount;
// document.writeln(`you will need ${totalSnacks} to last you untl the ripe old age of ${yearsRemaining}`)

//                   chapter 5 is completed                         //
//         ----------------------------------------------------- //

//ch:6 to 9

//Q:1
// var num=+prompt('enter a number')
// document.writeln(`the num is ${num} <br>`)
// ++num
// document.writeln(`the pre increment of num is ${num}<br>`)
// num++
// document.writeln(`the post increment of num is ${num} <br>`)
// --num
// document.writeln(`the pre decrement of num is ${num}<br>`)
// num--
// document.writeln(`the post decrement of num is ${num}<br>`)

//Q:2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.writeln(result)

//Q:3
// var userName=prompt(`enter your user Name`)
// document.writeln(` hellow! welcome ${userName} `)

//Q:4

// var table=+prompt('enter any no for table')
// document.writeln(`table of ${table}<br>`)
// document.writeln(` ${table}*1=`,table*1 +'<br>')
// document.writeln(` ${table}*2=`,table*2 +'<br>')
// document.writeln(` ${table}*3=`,table*3 +'<br>')
// document.writeln(` ${table}*4=`,table*4 +'<br>')
// document.writeln(` ${table}*5=`,table*5 +'<br>')
// document.writeln(` ${table}*6=`,table*6 +'<br>')
// document.writeln(` ${table}*7=`,table*7 +'<br>')
// document.writeln(` ${table}*8=`,table*8 +'<br>')
// document.writeln(` ${table}*9=`,table*9 +'<br>')
// document.writeln(` ${table}*10=`,table*10)
//   var number = table === "" || table === null ? 5 : Number(table);
//   document.writeln(`table of 5<br>`)
// 
// document.writeln(` 5*1=`,5*1 +'<br>')
// 
// document.writeln(` 5*2=`,5*2 +'<br>')
// 
// document.writeln(` 5*3=`,5*3 +'<br>')
// 
// document.writeln(` 5*4=`,5*4 +'<br>')
// 
// document.writeln(` 5*5=`,5*5 +'<br>')
// 
// document.writeln(` 5*6=`,5*6 +'<br>')
// 
// document.writeln(` 5*7=`,5*7 +'<br>')
// 
// document.writeln(` 5*8=`,5*8 +'<br>')
// 
// document.writeln(` 5*9=`,5*9 +'<br>')
// document.writeln(` 5*10=`,5*10)


//Q:5

// 
// document.writeln('<center>------Marksheet------</center><hr>')
// var userName=prompt('enter your name')
// 
// var bio=+prompt('enter bio numbers')
// 
// var phy=+prompt('enter phy numbers')
// 
// var chem=+prompt('enter chem numbers')
// 
// var eng=+prompt('enter eng numbers')
// 
// var urdu=+prompt('enter urdu numbers')
// 
// var obtainedMarks=(bio+phy+chem+eng+urdu)
// 
// var perc=(obtainedMarks/500)*100
// 
// var grade;
// 
// 
// 
// if(perc>=90 && perc<101){
// 
    // grade='A+'
// 
// }
// 
// else if(perc>=80){
// 
    // grade='A'
// 
// }
// 
// else if(perc>=70){
// 
    // grade='B'
// 
// }
// 
// else if(perc>=60){
// 
    // grade='C'
// 
// }
// 
// else if(perc>=50){
// 
    // grade='D'
// 
// }
// 
// else if(perc<40){
// 
    // grade='F'
// 
// }
// 
// document.writeln(
// 
    // `
// 
    // <table border=''>
// 
    // <tr>
// 
    // <th> userName </th>
// 
    // <th> bio </th> 
// 
    // <th> phy </th> 
// 
    // <th> chem </th> 
// 
    // <th> eng </th> 
// 
    // <th> urdu </th> 
// 
    // <th> obtainedMarks</th> 
// 
    // <th> perc </th> 
// 
    // <th> grade </th> 
// 
    // </tr>
// 
    // <tr>
// 
    // <td>${userName} </td>
// 
    // <td>${bio} </td>
// 
    // <td>${phy} </td>
// 
    // <td>${chem} </td>
// 
    // <td>${eng} </td>
// 
    // <td>${urdu} </td>
// 
    // <td>${obtainedMarks} </td>
// 
    // <td>${perc} </td>
// 
    // <td>${grade} </td>
// 
    // </tr>
// 
    // </table>
    // `
// )

//                   chapter 6 t0 9 is completed                         //
//         ----------------------------------------------------- //

// ch:9 to 11 (user input and conditional statements)
//Q:1
// var city=prompt('enter a city')
// if(city=='karachi'){
// alert('welcome to city of lights')
// }

//Q:2
// var gender=prompt('enter your gender')
// if(gender=="male"){
    // document.writeln(`good morning sir!`)
// }
// else if(gender=='female'){
    // document.writeln(`good morning Mam!`)
// }

//Q:3
// var color=prompt('enter any color')
// if(color=='red'){
    // document.writeln(`must stop`)
// }
// else if(color=='yellow'){
    // document.writeln(`ready to move`)
// }
// else if(color=='green'){
    // document.writeln(`move Now`)
// }

//Q:4
// var fuel=prompt('enter remaining fuel')
// if(fuel==0.25){
    // document.writeln(` “Please refill the fuel in your car”`)
// }

//Q:5
// ( part a)
// var a = 4;
// if (++a === 5){
    // alert("given condition for variable a is true");
// }

// ( part b)
//  var b = 82;
//  if (b++ === 83){
    // alert("given condition for variable b is true");
//  }

// ( part c)
//  var c = 12;
// if (c++ === 13){
    // alert("condition 1 is true");
    // }
    // if (c === 13){
        // alert("condition 2 is true");
    // }
    // if (++c < 14){
        // alert("condition 3 is true");}
        // if(c === 14){
            // alert("condition 4 is true");
        // }

// ( part d)
//  var materialCost = 20000;
//  var laborCost = 2000;
//  var totalCost = materialCost + laborCost;
//  if (totalCost === laborCost + materialCost){
    // alert("The cost equals");
//  }

//  if("car" < "cat"){
    // alert("car is smaller than cat");
//  }

// Q:6
// var sub1=prompt('enter name of sub 1')
// var sub2=prompt('enter name of sub 2')
// var sub3=prompt('enter name of sub 3')
// var totalmarks=300;
// var obsub1=+prompt('enter obtained marks of 1 sub')
// var obsub2=+prompt('enter obtained marks of 2 sub')
// var obsub3=+prompt('enter obtained marks of 3 sub')
// var sub1perc=(obsub1/100*100)
// var sub2perc=(obsub2/100*100)
// var sub3perc=(obsub3/100*100)
// var obtainedmarks=obsub1+obsub2+obsub3;
// var totalperc=(obtainedmarks/totalmarks)*100
// document.writeln(`<h2>result</h2><br>
    // <table border='1px groove'>
    // <tr>
    // <th>subject</th>
    // <th>total marks</th>
    // <th>obtained marks</th>
    // <th>percentage</th>
    // </tr>
    // <tr>
    // <td>${sub1}</td>
    // <td>100</td>
    // <td>${obsub1}</td>
    // <td>${sub1perc}</td>
    // </tr>
        // <tr>
    // <td>${sub2}</td>
    // <td>100</td>
    // <td>${obsub2}</td>
    // <td>${sub2perc}</td>
    // </tr>
            // <tr>
    // <td>${sub3}</td>
    // <td>100</td>
    // <td>${obsub3}</td>
    // <td>${sub3perc}</td>
    // </tr>
    // </table>
    // `)
// 
// 

//                   chapter 9 t0 11 is completed                         //
//         ----------------------------------------------------- //

//Ch:12-13
//Q:1
// var input = prompt("Enter a single character:");
// 
// if (!input || input.length !== 1) {
//   alert("Please enter only ONE character.");
// } else {
//   var ascii = input.charCodeAt(0);
// 
//   if (ascii >= 48 && ascii <= 57) {
    // document.writeln("Input is a Number");
//   }
//   else if (ascii >= 65 && ascii <= 90) {
    // document.writeln("Input is an Uppercase Letter");
//   }
//   else if (ascii >= 97 && ascii <= 122) {
    // document.writeln("Input is a Lowercase Letter");
//   }
//   else {
    // document.writeln("Input is neither a number nor a letter");
//   }
// }

//Q:2
// var num1=+prompt('enter no 1')
// var num2=+prompt('enter no 2')
// if(num1>num2){
    // document.writeln(`the largest no from ${num1} and ${num2} is ${num1}`)
// }
// else if(num2>num1){
    // document.writeln(`the largest no from ${num1} and ${num2} is ${num2}`)
// }
// else {
    // document.writeln(`numbers are equal`)
// }

//Q:3
// var num=+prompt('enter a no')
// if(num>0){
    // document.writeln(`the ${num} is positive no`)
// }
// else if(num<0){
    // document.writeln(`the ${num} is negative no`)
// }
// else{
    // document.writeln(`no is zero`)
// }

//Q:4
// var ch=prompt('enter a single character')
// var result;
// if(ch==='a'){
    // result=true;
// }
// else if(ch==='e'){
    // result=true;
// }
// else if(ch==='i'){
    // result=true;
// }
// else if(ch==='o'){
    // result=true;
// }
// else if(ch==='u'){
    // result=true;
// }
// else{
    // result=false;
// }
// document.writeln(result);

//Q:5
// var correctpassword='abc123'
// var userpassword=prompt('enter a password')
// if(userpassword===''||userpassword===null){
    // alert('please enter your password')
// }
// else if(userpassword===correctpassword){
    // alert('the password is correct')
// }
// else{
    // alert('incorrect password')
// }

//Q:6
// var greeting;
// var hour = 13;
// if (hour < 18) {
    // greeting = "Good day";
// }
// else {
        // greeting = "Good evening";
    // }
    // document.writeln(greeting)

//Q:7
// var time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):");
// if (time >= 0 && time < 1200) {
//   document.writeln("Good Morning!");
// }
// else if (time >= 1200 && time < 1700) {
//   document.writeln("Good Afternoon!");
// }
// else if (time >= 1700 && time < 2100) {
//   document.writeln("Good Evening!");
// }
// else if (time >= 2100 && time <= 2359) {
//   document.writeln("Good Night!");
// }
// else {
//   document.writeln("Invalid time! Please enter between 0000 and 2359.");
// }

//                   chapter 12 t0 13 is completed                         //
//         ----------------------------------------------------- //
//ch :arrays
//Q:1
// var studentnames=[];

//Q:2
                // declaration
// var arr=[];
               //initialization
// var fruits=['apple','mango','grapes']

//Q:3
                // declaration
// var numarrray=[];
               //initialization
// var numarray=[12,6,78,56];

//Q:4
                // declaration
// var booleanarray=[];
               //initialization
// var booleanarray=[true,false]

//Q:5
                // declaration
// var mixedarray=[];
               //initialization
// var mixedarray=['ayesha',18,true,'abc']

//Q:6
// var qualificatons=['SSC','HSC','BCS','BS','BCOM','MS','M.Phil','PHD'];
//  document.writeln(`
    // <h2>Qualifications</h2>
    // <ol>
    // <li>${(qualificatons[0])}</li>
    // <li>${(qualificatons[1])}</li>
    // <li>${(qualificatons[2])}</li>
    // <li>${(qualificatons[3])}</li>
    // <li>${(qualificatons[4])}</li>
    // <li>${(qualificatons[5])}</li>
    // <li>${(qualificatons[6])}</li>
    // <li>${(qualificatons[7])}</li>
    // </ol>
    // `)

//Q:7
// var studentsname=['ali','sana','umer']
// var scores=[480,320,239]
// var totalmarks=500;
// percofali=(480/500)*100
// percofsana=(320/500)*100
// percofumer=(239/500)*100
// document.writeln(`
    // score of ali is 320 and percentage is ${percofali}<br>
    // score of sana is 320 and percentage is ${percofsana}<br>
    // score of umer is 320 and percentage is ${percofumer}
    // `)

//Q:8
// Initialize array with color names
// var colors = ["Red", "Green", "Blue"];
// document.write("<b>Initial Colors:</b> " + colors + "<br><br>");
// 
// a) Add color to the beginning
// var addStart = prompt("Which color do you want to add to the beginning?");
// colors.unshift(addStart);
// document.write("<b>After adding to beginning:</b> " + colors + "<br><br>");
// 
// b) Add color to the end
// var addEnd = prompt("Which color do you want to add to the end?");
// colors.push(addEnd);
// document.write("<b>After adding to end:</b> " + colors + "<br><br>");
// 
// c) Add two more colors to the beginning
// colors.unshift("Purple", "Orange");
// document.write("<b>After adding two colors to beginning:</b> " + colors + "<br><br>");
// 
// d) Delete the first color
// colors.shift();
// document.write("<b>After deleting first color:</b> " + colors + "<br><br>");
// 
// e) Delete the last color
// colors.pop();
// document.write("<b>After deleting last color:</b> " + colors + "<br><br>");
// 
// f) Add color at user-defined index
// var indexAdd = +prompt("At which index do you want to add a color?");
// var colorName = prompt("Enter color name:");
// colors.splice(indexAdd, 0, colorName);
// document.write("<b>After adding color at index:</b> " + colors + "<br><br>");
// 
// g) Delete color(s) from user-defined index
// var indexDelete = +prompt("At which index do you want to delete color(s)?");
// var deleteCount = +prompt("How many colors do you want to delete?");
// colors.splice(indexDelete, deleteCount);
// document.write("<b>After deleting colors:</b> " + colors + "<br><br>");



//Q:9
// Store student scores in an array
// var scores = [320, 230, 480, 120];

// Display original array
// document.write("<b>Original Scores:</b> " + scores + "<br><br>");

// Sort the array in ascending order
// scores.sort(function(a, b) {
    // return a - b;
// });

// Display sorted array
// document.write("<b>Sorted Scores (Ascending):</b> " + scores);


//Q:10
// var cities=['karachi','lahore','islamabad','quetta','peshawar']
// document.writeln(cities)
// var selcities=cities.slice(2,4)    
// document.writeln(`<br>`)
// document.writeln(selcities)

//Q:11
// Given array
// var arr = ["This ", " is ", " my ", " cat"];

// Create a single string using join method
// var sentence = arr.join("");

// Display result
// document.write("<b>Resulting String:</b> " + sentence);

//Q:12
// Create a new empty array
// var queue = [];

// Store values one by one (enqueue)
// queue.push("Apple");
// queue.push("Banana");
// queue.push("Mango");

// Display stored values
// document.write("<b>Queue after adding values:</b> " + queue + "<br><br>");

// Access values in FIFO order (dequeue)
// var firstItem = queue.shift();
// document.write("<b>Removed (First In):</b> " + firstItem + "<br><br>");

// document.write("<b>Queue after removal:</b> " + queue);

//Q:13
// Create a new empty array
// var stack = [];

// Store values one by one (push)
// stack.push("Book");
// stack.push("Pen");
// stack.push("Notebook");

// Display stored values
// document.write("<b>Stack after adding values:</b> " + stack + "<br><br>");

// Access values in LIFO order (pop)
// var lastItem = stack.pop();
// document.write("<b>Removed (Last In):</b> " + lastItem + "<br><br>");

// document.write("<b>Stack after removal:</b> " + stack);

//Q:14
// Store phone manufacturers in an array
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Display dropdown menu
// document.write("<select>");

// Loop through array to create options
// for (var i = 0; i < manufacturers.length; i++) {
    // document.write("<option>" + manufacturers[i] + "</option>");
// }

// document.write("</select>");
