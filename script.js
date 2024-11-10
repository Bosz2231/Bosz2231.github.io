//let score = Number(prompt("What's Your Test Score?"));
if(score >= 0 && score < 50){
    console.log("Your grade is F");
}else if(score >= 50 && score < 60){
    console.log("Your grade is D");
}else if(score >= 60 && score < 70){
    console.log("Your grade is C");
}else if(score >= 70 && score < 80){
    console.log("Your grade is B");
}else if(score >= 80 && score <= 100){
    console.log("Your grade is A");
}else{
    console.log("Error!");
}
