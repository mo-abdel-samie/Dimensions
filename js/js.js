var names=document.getElementById('name'),
    phone=document.getElementById('phone'),
    pass=document.getElementById('pass'),
    confirm_pass=document.getElementById('confirm_pass'),
    btnid=document.getElementById('btn_id')
    error=document.getElementById('error');

function check_name(x)
{
    if(x.value.length<3)
    {
        return false ;
    }
    else
    {
        return true ;
    }
}

names.addEventListener('keyup' , function(){ /*(keyup)when your hand leave the key bord*/
    if(check_name(names))
    {
        error.innerHTML='';
    }
    else
    {
        error.innerHTML= "invalid name" ;
        error.style.color= "red";
    }
})
// check legth of password
function check_pass(x)
{
    if(x.value.length <4)
        return false;
    else
        return true;
}

pass.addEventListener('keyup',function(){

    if(check_pass(pass))
    error.innerHTML='';
    else
    {
        error.innerHTML  ='invalid pass' ;
        error.style.color='red';
    }
})

function confirm(x,y)
{
    if(x.value==y.value)
    {
        return true;
    }
    else
    {
        return false;
    }
}

confirm_pass.addEventListener('keyup',function(){

    if(confirm(pass,confirm_pass))
    error.innerHTML='';
    else
    {
        error.innerHTML    ='unmachet password' ;
        error.style.color='red';
    }

})

function show_pass()
{
    if(pass.type=='password')
    {
        pass.type='text';
        confirm_pass.type='text';
    }
    else if(pass.type=='text')
    {
        pass.type='password';
        confirm_pass.type='password';
    }
}

//button enable
window.addEventListener('keyup',function(){

    if((error.innerHTML.length<2))
    {
        btnid.disabled=false;
    }
    else
    {
        btnid.disabled=true;
    }
})

