# React-Quiz

1. Write a react function that takes the following input:  
```
rooms = [
    { room_type: "Queen", vacant_rooms: 5, price: 100 },
    { room_type: "Double", vacant_rooms: 3, price: 75 },
    { room_type: "Twin", vacant_rooms: 8, price: 60 }
  ];
```
And produces the following output:  
```
<ol><li>Queen, 5, $100</li><li>Double, 3, $75</li><li>Twin, 8, $60</li></ol>
```


  
 
2. Write a function in Javascript, which receives NUMBER and has the next logic:  
a) it prints "foo" if NUMBER is divisible by 2;  
b) it prints "bar" if NUMBER is divisible by 7;  
c) it prints "foobar" if NUMBER is divisible by 14;  
d) it prints NUMBER value for other cases;  
note: NUMBER is a positive integer number;  
 
 
3. Let's say you have a file with a following structure:  
"id,name,value  
1,Dan,150  
2,Peter,300  
3,Mark,400  
4,Victor,600"  

Write a function in node.js that reads this file and returns the number, which is a sum of all "value" numbers from the file;  

4. Refactor the code below.  
(do not create functions or constants, code refactor is required only)  

 Original:
```
if (province == 'ONTARIO') {
   rate = ONTARIO_RATE;
   amt = base * ONTARIO_RATE;
   calc = 2 * basis(amt) + extra(amt) * 1.05;
} else if ((province == 'QUEBEC') || (province == 'ALBERTA')) {
   rate = (province == 'QUEBEC') ? QUEBEC_RATE : ALBERTA_RATE;
   amt = base * rate;
   calc = 2 * basis(amt) + extra(amt) * 1.05;
   if (province == 'QUEBEC') {
       points = 2;
   }
} else {
   rate = 1;
   amt = base;
   calc = 2 * basis(amt) + extra(amt) * 1.05;
}
```
Refactored:
```
switch(province){
   case 'ONTARIO':{
      rate = ONTARIO_RATE;
      break;
   }
   case 'ALBERTA':{
      rate = ALBERTA_RATE;
      break;
   }
   case 'QUEBEC':{
      rate = QUEBEC_RATE;
      points = 2;
      break;
   }
   default:{
      rate = 1;
      break;
   }
}
amt = base * rate;
calc = 2 * basis(amt) + extra(amt) * 1.05;
```


5. Write a small react or react native app that uses this weather api:  
`https://www.metaweather.com/api/`
Your app should allow the user to search for a city and see that day's forecast.  
Styling is not important, you can use default browser styles.  
