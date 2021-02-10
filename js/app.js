'use srict'




qsn1 ();
qsn2 ();
qsn3 ();
qsn4 ();
qsn5 ();
qsn6 ();
qsn7 ();






 function qsn1 () {
let userName =prompt("Enter your name please :","name ..");
alert("Welcome to my website "+userName);

let userAnswer1 = prompt("Do you think that I am a good football player  ??"," yes , no ?");
// Converting the answer to Lower case 
userAnswer1 = userAnswer1.toLocaleLowerCase();

// checking the answer (yes / no )
if ((userAnswer1 === 'yes')||(userAnswer1==='y'))
{
    alert ("Thank you , but I am not :) "+ userName)
}
 else
 {
     if((userAnswer1 === 'no')||(userAnswer1==='n'))
     { alert ("That is right , I am the worst player in th world  "+userName)}
// to check if the answer is not related ..
  else 
  {
    alert ("This answer is not related ")
  }
 }
}




function qsn2 () {

let userAnswer2 = prompt("Do you think that I have high GBA in university ? "," yes , no ?");
userAnswer2 = userAnswer2.toLocaleLowerCase();
if ((userAnswer2 === 'yes')||(userAnswer2==='y'))
{
    alert ("I am happy that you think like this , but acctualy I have low GPA :( ")
}
else
{if((userAnswer2 === 'no')||(userAnswer2==='n')) 
    {alert ("Right I my GPA is very low  :( ")}
    else 
    {
      alert ("This answer is not related ")
    }
}

}

function qsn3 () {

let userAnswer3 = prompt("Do you think that I like to travile  ?"," yes , no ?");
userAnswer3 = userAnswer3.toLocaleLowerCase();
if ((userAnswer3 === 'yes')||(userAnswer3==='y'))
{alert ("Sure  ,I love traviling ")}

else
{ if ((userAnswer3 === 'no')||(userAnswer3==='n'))

    {alert ("WRONG !!! ,Staying at home is really borning ")}
    else 
    {
      alert ("This answer is not related ")
    }
}

}

function qsn4 () {

let userAnswer4 = prompt("Do you think that I am going to pass my scholership ?"," yes , no ?");
userAnswer4 = userAnswer4.toLocaleLowerCase();
if ((userAnswer4 === 'yes')||(userAnswer4==='y'))
{alert ("Thank you for your trust " )}
else
{
    if ((userAnswer4 === 'no')||(userAnswer4==='n'))
    {alert ("You dont know me yet , I am going to do it . ")}
    else 
    {
      alert ("This answer is not related ")
    }

}    
}
 
function qsn5 () {

let userAnswer5 = prompt("Do you think that I love MANSAF ??"," yes , no ?");
userAnswer5 = userAnswer5.toLocaleLowerCase();
if ((userAnswer5 === 'yes')||(userAnswer5 ==='y'))
{
    alert ("SURE. I am Joradnian  ")
}
else
{ if ((userAnswer5 === 'no')||(userAnswer5==='n'))
  {alert ("WRONG!! , I love it  ")}
  else 
  {
   alert ("This answer is not related ")
  }


}

}



function qsn6 () {

 for (let i =0 ; i <= 3 ; i++ )
{
    let myAge = prompt("How old am I ? ","")
    parseInt(myAge);

    if (myAge == 30 )
    {
    alert ("Right answer ")
    rightAnswers++
    break 
    }else 
    {
        if (myAge <30 )
        {alert ("too low ")}
        else
        {
            if (myAge>30 )
            {alert ("Too high")}
        }
    }
    if (i == 3 )
    {
        alert ("You did not giss , I am 30 years old ");
    }
}
}



function qsn7 () {

let myFave =["heat","fight club","departed", "shutter island"];
let c=0
for (let i = 0 ; i<=5 ; i++)
{
    // Taking answers from user 
    let answer= prompt("Guess on of my favarit movies: ")
    
    // to convert them to lower case 
    answer =answer.toLowerCase();

  

    // check if the answer is true or not 
    for (let x =0 ; x<= myFave.length; x++)
    {

        if (answer == myFave[x])
        {alert ("Great , it seems like you know me well ")
        c++;

        rightAnswers++;
        alert ("That was one of my faverate movies , Here is my short list of them ")
        
         alert(myFave);
        break ;
            
        }
        
    }
    
    if (i == 5 )
    {
        alert ("You did not guess any of them , Here is my short list of my faverat movies ")
       alert( myFave)
        
    }
    if (c== 1)
    break ;

}
alert("You have "+rightAnswers+ "right answer out of 7 ")
}


