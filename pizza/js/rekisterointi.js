document.addEventListener("DOMContentLoaded", alku);

function alku()
{ 
    if(localStorage.getItem("kirjaudutaan")==="kylla")
    {
        document.getElementById("kirrek_lista").style.display = "none";
        document.getElementById("kirjautumis_lista");
        document.getElementById("peruutakir_lista");
    }
    else
    {
        document.getElementById("kirrek_lista");
        document.getElementById("kirjautumis_lista").style.display = "none";
        document.getElementById("peruutakir_lista").style.display = "none";
    }

    if(localStorage.getItem("rekisteroidaan")==="kylla")
    {
        document.getElementById("rekisterointi_lista");
        document.getElementById("kirrek_lista").style.display = "none";
        document.getElementById("peruutarek_lista");
    }
    else
    {
        document.getElementById("rekisterointi_lista").style.display = "none";
        document.getElementById("peruutarek_lista").style.display = "none";
    }

    if(localStorage.getItem("kirnimi")===localStorage.getItem("rekkayttajanimi") && localStorage.getItem("kirsalasana")===localStorage.getItem("reksalasana"))
    {
        localStorage.setItem("kirjauduttu", "kylla");
        localStorage.setItem("kirnimi", "");
        localStorage.setItem("kirsalasana","");

        
    }
    else 
    {

    }
    if(localStorage.getItem("kirjauduttu")==="kylla")
    {
        document.getElementById("kirjautuminenon_lista");
        document.getElementById("rekisterointi_lista").style.display = "none";
        document.getElementById("peruutarek_lista").style.display = "none";
        document.getElementById("kirrek_lista").style.display = "none";
        document.getElementById("kirjautumis_lista").style.display = "none";
        document.getElementById("peruutakir_lista").style.display = "none";
        document.getElementById("paluukoti_lista").style.display = "none";
        document.getElementById("hide_lista").style.display = "none";
    }
    else
    {
        document.getElementById("kirjautuminenon_lista").style.display = "none";
        document.getElementById("hide_lista");
    }

}

function kirjaudu()
{
    localStorage.setItem("kirjaudutaan", "kylla");

}

function rekisteoi()
{
    localStorage.setItem("rekisteroidaan", "kylla");
}

function rekisteroidytty()
{
    localStorage.setItem("rekkayttajanimi", document.getElementById("kayttajanimi").value);
    localStorage.setItem("reksalasana", document.getElementById("password").value);
    localStorage.setItem("rekisteroidaan", "");
    localStorage.setItem("kirjauduttu", "kylla");
    
}

function peruutarek()
{
    localStorage.setItem("rekisteroidaan", "");
}

function peruutakir()
{
    localStorage.setItem("kirjaudutaan", "");
}

function kirjaudutan()
{
    localStorage.setItem("kirnimi", document.getElementById("kayttajanimien").value);
    localStorage.setItem("kirsalasana", document.getElementById("passwords").value);
    localStorage.setItem("kirjaudutaan", "");
}

function varmis()
{
    localStorage.setItem("kirnimi", "");
    localStorage.setItem("kirsalasana","");
}

