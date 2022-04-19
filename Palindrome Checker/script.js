function reverseString(str){
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
    //return str.split("").reverse().join("");
}
function palindromeCheck(){
  let msg = document.getElementById("msg").value; 
  let ans = document.getElementById("answer");
  if(msg=="")
  {
    alert("Please enter any string");
  }else{
  msg = msg.toLowerCase();
  if(msg == reverseString(msg)){
      ans.innerHTML = "It's Palindrome!";
  }else{
    ans.innerHTML = "It's not Palindrome!";
  }
  }
}

