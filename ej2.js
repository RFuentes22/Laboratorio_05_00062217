function ordenamiento (arr) {

    var i;
    var j;
    
    var array = arr.split('');
    for ( i = 0; i < array.lenght-1 ; i++)
    {
            key=array[i];
             j=i-1;
            while (j>0 && key [j]) {
            array[j+1]=array[j];
            j=i-1;
            array[j+1]=key;
    }
        }

    console.log(array);

}