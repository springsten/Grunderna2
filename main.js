function mySecondFunction(){
    let myName = 'Sakarias';
    console.log(myName);

    let x = 5;
    let y = 10;
    console.log(x+y); // 15
    console.log(myName + x); // Sakarias5
    console.log(x-y);
    console.log(x*y);
    console.log(x/y);
    console.log(x%y);
    x++;
    console.log(x);
    y--;
    console.log(y);

    function myAwesomeFunction(){
        console.log('Min första funktion');
    }
    myAwesomeFunction();
}