function fibonacci (n){
   
    var a=0,b=1,c;
    console.log('0');
    console.log('1');

    for( i=0;i<=n-2;i++){
        c=a+b;
        b=a;
        a=c;

        console.log(a);
    }
    
    

}