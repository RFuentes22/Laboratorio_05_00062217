
function palindrome (palabra ){

    var res = palabra.split('').reverse().join(''); 


    if (palabra==res){
        console.log ("Es palindrome");
     } else {
       console.log ("No es palindrome");
    
    }

}


