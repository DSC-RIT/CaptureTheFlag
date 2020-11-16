function PlantSeed()
{
    var seedstring = document.getElementById("seed").value; 
    localStorage.setItem("myseed", seedstring);
    Math.seedrandom(seedstring);
    var random1=Math.random().toFixed(2);
    var random2=Math.random().toFixed(2);
    var random3=Math.random().toFixed(2);
    var random4=random1+random2+random3;
    window.alert(random4);
}
function DisplayFlag()
{
    var myflag=document.getElementById("myhash").value;
    window.alert("Here is your flag: DSC{"+myflag+"}");
}