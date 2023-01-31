function funcRElement(){
         console.log(arguments);
         let min = arguments[0];
         let max = arguments[0];
         for (const funRandomElement of arguments) {
             if (funRandomElement > max) max = funRandomElement;
             if (funRandomElement < min) max = funRandomElement;
         };
         console.log("max ",max);
         return min;
     };
     const min = funcRElement(2,3,4,5,6,7,8);
     console.log("min ",min);
