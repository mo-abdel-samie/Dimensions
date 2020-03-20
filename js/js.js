var names=document.getElementById('names'),
    phone=document.getElementById('phone'),
    pass=document.getElementById('pass'),
    confirmPass=document.getElementById('confirm_pass'),
    submit=document.getElementById('submit'),
    error=document.getElementById('error');

function check_name(x)
{
    if(x.value.length <6)
    return false ;
    else
    return true;
}

names.addEventListener('keyup',function(){
    if(check_name(names))
    error.innerHTML='';
    else
    {
        error.innerHTML='invalid name' ;
        error.style.color='red';
    }
});

function check_phone(x)
{
    var ph =[01552177276,01111346560,01113531567,01117652457];
    ph.foreach(i);
    function i(f)
    {
        if(
            f==x.value
            )
            return false ;
            else
            return true;

    };

}
phone.addEventListener('keyup',function(){
    if(check_phone(phone))
    error.innerHTML='';
    else
    {
        error.innerHTML='The number is present' ;
        error.style.color='red';
    }
});


/* check length of password */
function check_pass(x)
{ 
    if(x.value.length <4)
    return false;
    else
    return true;
}

pass.addEventListener('keyup',function()
{
    if(check_pass(pass))
    error.innerHTML='';
    else
    {error.innerHTML='invalid password' ;
    error.style.color='red';}
});


/* password confirmation */
function confirm_pass(x,y)
{
    if(x.value==y.value)
    return true;
    else
    return false;
}

confirmPass.addEventListener('keyup',function()
{
    if(confirm_pass(pass,confirmPass))
    error.innerHTML='';
    else
   { error.innerHTML='unmatched password' ;
    error.style.color='red';}

});

function show_Pass()
{
    if(pass.type=='password')
    {
        pass.type= 'text';
        confirmPass.type='text';
    }
    else if (pass.type=='text')
    {
        pass.type='password';
        confirmPass.type='password';
    }
}


/*button enable*/
window.addEventListener('keyup',function()
{
    if( error.innerHTML.length<2 && names.value.length>1 && phone.value.length>1 )
    submit.disabled=false;
else 
   { submit.disabled=true;}


});