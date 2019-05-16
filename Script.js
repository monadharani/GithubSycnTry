var loginBtn=document.getElementById("LoginBtn");
var mailId=document.getElementById("UsernameTxt");
var pwd=document.getElementById("PasswordTxt");

loginBtn.addEventListener("click",function()
{
	if(CheckItsMe())
	{
		console.log("Logged in");
		alert("Logged in");
	}
	else
	{
		console.log("U r not MP");
	}
})

function CheckItsMe()
{
	if(mailId.value.toUpperCase().includes("MOHANAPRIYA"))
	{
		return true;
	}
	else
	{
		return false;
	}
}

