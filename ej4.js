function conversor (num) {
  
   var binario=[];

    while (num != 0) {
        
      
        binario.push(num%2);
        num =Math.floor(num/2);
        

    }

    console.log(binario.reverse().join('') );
}