let result = 85;

if (result >= 80 && result <= 100){
    console.log('You have got A+');
}
else if(result >= 70 && result < 80){
    console.log('You have got A');
}
else if(result >= 60 && result < 70){
    console.log('You have got A-');
}
else if(result >= 50 && result < 60){
    console.log('You have got B');
}
else if(result >= 40 && result < 50){
    console.log('You have got C');
}
else if(result >= 33 && result < 40){
    console.log('You have got D');
}
else{
    console.log('You failed');
}