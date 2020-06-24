function challengeNumber (num) {
    console.log ('#########' + 'Challenge ' + num +  '#########' )
    
    
    
    }
    
    challengeNumber (1)
    
    function countToFive () {
    let count = 0 
    let trueCount=true;  
    while (trueCount) {
    count = count + 1; 
    
    console.log (count);
    
    if (count >= 5) {
     trueCount=false;   
    }
    }  
    }
    
    countToFive (); 
    
    challengeNumber(2)
    
    function countUpToSix (num) {
    let count=0;
    let trueCount=true;
    
    while (trueCount) {
    count = count + 1; 
    
    
    console.log (count)
    
    if (count >= num) {
        trueCount=false;
    }
    }
    }
    
    countUpToSix (6)
    
    challengeNumber (3)
    
    function countRange (numero1,numero2) {
    let count = numero1-1;
    let trueCount=true;
    
    while (trueCount) {
        count =count +1;
    
    console.log (count);   
    
    
    if (count >= numero2) {
        trueCount=false
    
    }
    }
    }
    countRange(3,10)
    
    challengeNumber (4)
    
    function evenOrOdd (num) {
    let count = 0
    let trueCount=true
    
    while (trueCount){
    
    count = count + 1
    
    if (count >= num) {
    trueCount=false
    
    }
    
    if (count % 2 === 0){
    console.log (count + ' Even')
    }
    
    if (count % 2 !==0) {console.log (count + ' Odd')
    
    }
    }
    
    }
    evenOrOdd (5);
    
    challengeNumber(5)
    
    function countby2 (num) {
        let count = 0
        let trueCount=true
        
        while (trueCount){
        
        count = count + 1
        
        if (count >= num) {
        trueCount=false
        
        }
        
        if (count % 2 === 0){
        console.log (count)
        }
    }
    }
    
    countby2 (11)
    
    challengeNumber(6)
    function countDown (num){
        let count = num + 1
            let trueCount=true
            
            while (trueCount){
            
            count = count - 1
            
            if (count === 1) {
            trueCount=false; 
            }
            console.log (count) 
        
            }
        }
        countDown(10)
    
    
    challengeNumber(7)
    
    function rocketLaunch (num){
        let count = num + 1
            let trueCount=true
            
            while (trueCount){
            
            count = count - 1
            
            if (count === 2) {
            trueCount=false; 
            }
            console.log (count) 
        
            }
            count=count - 1 + ' Blast Off!'
        
            console.log (count)
        }
        
        rocketLaunch(10); 
    
        challengeNumber (8)
    
        function downBy3 (num){
            let count = num + 3
                let trueCount=true
                
                while (trueCount){
                
                count = count - 3
                
                if (count <= 2) {
                trueCount=false; 
                }
                console.log (count); 
            
                }
            }
    downBy3(20)
    
    challengeNumber(9)
    
    function hello () {
        let startNum = 1;
        while (startNum <= 7){
        console.log(startNum + '. Hello!');
        startNum = startNum + 1;
        }
    }
    
    hello()
    
    challengeNumber(10)
    
    function saySomethingSevenTimes (str){
    
    let startNum = 1;
    while (startNum <= 7)
        {console.log(startNum + '.' + str);
    startNum = startNum + 1;
    }
    }
    
    saySomethingSevenTimes ('rasengan')
    
 challengeNumber(11)  
 
 function repeatXTimes (str, num){

    let count =0

while (count <= num){


count ++
console.log(str)

if (count >= num){
    trueCount = false}
}
 }
 

 repeatXTimes('Good-bye', 4)

 repeatXTimes('Get out!', 6)

 challengeNumber(12)

 function printString(str){

    let i =0

    while(i< str.length){

        console.log(str[i])
        i++
    }
 }
    
 printString('think')   
  challengeNumber(13) 

  function printEveryOtherChar(str){

    let i =1

    while(i< str.length){

        console.log(str[i])
        i= i+2
    }
 }

 printEveryOtherChar('Nobody')

 challengeNumber(14)

 function printStringBackwards(str){

    let i = str.length -1

    while(i >= 0){
    console.log(str[i])
    i--
 }
 }
 printStringBackwards('radar')

 challengeNumber(15)

 function fizzBuzz(num){

    let count =1

    while(count <=num ){

        


        if (count% 3 === 0 && count % 5 !== 0){
        console.log ("Fizz")}

        else if (count % 5 === 0 && count %3 !== 0){

            console.log ("Buzz")}

        else if (count % 3 === 0 && count % 5 === 0){
            console.log ("FizzBuzz")
        }  
       else console.log(count)
        count ++
    } 
 }

 fizzBuzz(15)
 
 
 challengeNumber(16)

 function fibonacci(num){
let fibStart = [0,1]
    let start =1 


 }