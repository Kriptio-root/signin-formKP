//inputs
const inputEmail=document.getElementById('email'),
    inputPhone=document.getElementById('phone'),
    inputUsername=document.getElementById('username'),
    inputCity=document.getElementById('city'),
    inputAddress=document.getElementById('address'),
    inputState=document.getElementById('state'),
    inputZip=document.getElementById('zip'),
    inputs=[inputEmail,inputPhone,inputUsername,inputCity,inputAddress,inputState,inputZip];
    inputsForHidden=[inputZip,inputState,inputCity,inputAddress,inputPhone,inputEmail,inputUsername,];
//////////////
if (document.querySelector(".submit"))
{
document.querySelector(".submit").addEventListener("click", function (event) {
    event.preventDefault();
    const form = document.querySelector('#form');

    hiddenInput(inputsForHidden);

    let queryString=serialize(form),
        url;

    queryString=new URLSearchParams(queryString);
    url = 'report.htm?name='+queryString;
    changeUrl(url);
    redirectMe();
});
}
/////////////////////////
if(document.querySelector("#submit"))
{
document.querySelector("#submit").addEventListener("click", function (event) {
    event.preventDefault();
    const form = document.querySelector('#form');
    let result= onSubmit(inputs),
        url;
    if (result==true){
        let queryString=serialize(form);
        console.log(queryString);
        queryString=new URLSearchParams(queryString);
        for (let p of queryString) {
            console.log(p);
        }
        console.log(decodeURIComponent(queryString.toString()));
        url = 'order2.htm?name='+queryString;
        changeUrl(url);
        redirectMe();
    }
});
}
//////////////////
function redirectMe() {
    document.querySelector(".redirect").click();
    return false;
}
function changeUrl(url){
    document.querySelector(".redirect").href=url;
}
