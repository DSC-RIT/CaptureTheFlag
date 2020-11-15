function getData()
{
    var myusername = document.getElementById("user").value;
    var mypassword= document.getElementById("pass").value; 
    localStorage.setItem("item1", myusername);
    localStorage.setItem("item2", mypassword);
}
