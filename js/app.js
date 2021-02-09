'use srict'
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


let userAnswer2 = prompt("Do you think that I have high GBA in university ? "," yes , no ?");
userAnswer2 = userAnswer2.toLocaleLowerCase();
if ((userAnswer1 === 'yes')||(userAnswer1==='y'))
{
    alert ("I am happy that you think like this , but acctualy I have low GPA :( "+ userName)
}
else
{if((userAnswer2 === 'no')||(userAnswer2==='n')) 
    {alert ("Right I my GPA is very low  :( "+ userName)}
    else 
    {
      alert ("This answer is not related ")
    }
}

let userAnswer3 = prompt("Do you think that I like to travile  ?"," yes , no ?");
userAnswer3 = userAnswer3.toLocaleLowerCase();
if ((userAnswer3 === 'yes')||(userAnswer3==='y'))
{alert ("Sure  ,I love traviling "+ userName)}

else
{ if ((userAnswer3 === 'no')||(userAnswer3==='n'))

    {alert ("WRONG !!! ,Staying at home is really borning "+userName)}
    else 
    {
      alert ("This answer is not related ")
    }
}



let userAnswer4 = prompt("Do you think that I am going to pass my scholership ?"," yes , no ?");
userAnswer4 = userAnswer4.toLocaleLowerCase();
if ((userAnswer4 === 'yes')||(userAnswer4==='y'))
{alert ("Thank you for your trust "+ userName)}
else
{
    if ((userAnswer4 === 'no')||(userAnswer4==='n'))
    {alert ("You dont know me yet , I am going to do it . "+userName)}
    else 
    {
      alert ("This answer is not related ")
    }

}    

let userAnswer5 = prompt("Do you think that I love MANSAF ??"," yes , no ?");
userAnswer5 = userAnswer5.toLocaleLowerCase();
if ((userAnswer5 === 'yes')||(userAnswer5 ==='y'))
{
    alert ("SURE. I am Joradnian  "+ userName)
}
else
{ if ((userAnswer5 === 'no')||(userAnswer5==='n'))
  {alert ("WRONG!! , I love it  "+userName)}
  else 
  {
   alert ("This answer is not related ")
  }


}
