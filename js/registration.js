function validate(form){
  let ufname=form.fname.value;
  console.log(ufname);
  let ulname=form.lname.value;
  var radios = document.querySelectorAll('input[type="radio"]:checked');
  var value = radios.length>0? radios[0].value: null;
  let uemail=form.email.value;
  let uorg=form.organisation.value;
  let ucnt=form.phone.value;
  let flag =true;
  if(ufname==null||ufname==""){
    document.getElementById("name_error").innerHTML="*This feild is required!";
    flag=false;
  }
  else if(!allLetter(ufname)){
    document.getElementById("name_error").innerHTML="*Enter a valid name!";
    flag=false;
  }
  else{
    document.getElementById("name_error").style="display: none;";

  }
  if(ulname==null||ulname==""){
    document.getElementById("lname_error").innerHTML="*This feild is required!";
    flag=false;
  }
  else if(!allLetter(ulname)){
    document.getElementById("lname_error").innerHTML="*Enter a valid name!";
    flag=false;
  }
  else{
    document.getElementById("lname_error").style="display: none;";

  }
  if(value==null){
    document.getElementById("empl_error").innerHTML="*This feild is required!";
    flag=false;
  }
  else{
    document.getElementById("empl_error").style="display: none;";
  }
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(uemail==null||uemail==""){
    document.getElementById("email_error").innerHTML="*This feild is required!";
    flag=false;
  }
  else if(!re.test(uemail)){
    document.getElementById("email_error").innerHTML="*Enter a valid email!";
    flag=false;
  }
  else{

    document.getElementById("email_error").style="display: none;";
  }
  if(uorg==null||uorg==""){
    document.getElementById("org_error").innerHTML="*This feild is required!";
    flag=false;
  }
  else if(!alpha(uorg)){
    document.getElementById("org_error").innerHTML="*Invalid Organisation name!";
    flag=false;
  }
  else{
    document.getElementById("org_error").style="display: none;";
  }
  if(ucnt==null||ucnt==""){

    document.getElementById("cnt_error").innerHTML="*This feild is required!";
    flag=false;
  }
  else if(!numb(ucnt)){
    document.getElementById("cnt_error").innerHTML="*Invalid Contact number!";
    flag=false;
  }
  else{
    document.getElementById("cnt_error").style="display: none;";
  }
  return flag;
}


function allLetter(ufname){
  // var letters = /^[A-Za-z]+$/;
  if (/^[a-zA-Z]*$/.test(ufname)){
      return true;
  }
  else{


      // ufname.focus();
     return false;
  }
}
function alpha(TCode){

  for(var i=0; i<TCode.length; i++)
  {
    var char1 = TCode.charAt(i);
    var cc = char1.charCodeAt(0);

    if((cc>47 && cc<58) || (cc>64 && cc<91) || (cc>96 && cc<123))
    {
      continue;
    }
     else {
  //    alert('Input is not alphanumeric');
     return false;
     }
  }
  return true;
}


function numb(TCode){

  for(var i=0; i<TCode.length; i++)
  {
    var char1 = TCode.charAt(i);
    var cc = char1.charCodeAt(0);

    if((cc>47 && cc<58) )
    {
      continue;
    }
     else {
  //    alert('Input is not alphanumeric');
     return false;
     }
  }
  return true;
}
