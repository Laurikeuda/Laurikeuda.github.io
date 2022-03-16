document.addEventListener("DOMContentLoaded", aloitus);

function aloitus()
{
    if(localStorage.getItem("pizza1") >= 1)
    {
        document.getElementById("poistapizza1_lista");

    }
    else {
        document.getElementById("poistapizza1_lista").style.display = "none"
    }

    if(localStorage.getItem("pizza2") >= 1)
    {
        document.getElementById("poistapizza2_lista");

    }
    else {
        document.getElementById("poistapizza2_lista").style.display = "none"
    }

    if(localStorage.getItem("pizza3") >= 1)
    {
        document.getElementById("poistapizza3_lista");

    }
    else {
        document.getElementById("poistapizza3_lista").style.display = "none"
    }

    if(localStorage.getItem("pizza4") >= 1)
    {
        document.getElementById("poistapizza4_lista");

    }
    else {
        document.getElementById("poistapizza4_lista").style.display = "none"
    }

    if(localStorage.getItem("pizza5") >= 1)
    {
        document.getElementById("poistapizza5_lista");

    }
    else {
        document.getElementById("poistapizza5_lista").style.display = "none"
    }

    if(localStorage.getItem("pizza6") >= 1)
    {
        document.getElementById("poistapizza6_lista");

    }
    else {
        document.getElementById("poistapizza6_lista").style.display = "none"
    }
}

function pizza1()
{
    const pizzaluk1 = parseInt(localStorage.getItem('pizza1') ?? '0')
    localStorage.setItem('pizza1', (pizzaluk1 + 1).toString())
    
}

function pizza2()
{
    const pizzaluk2 = parseInt(localStorage.getItem('pizza2') ?? '0')
    localStorage.setItem('pizza2', (pizzaluk2 + 1).toString())
}

function pizza3()
{
    const pizzaluk3 = parseInt(localStorage.getItem('pizza3') ?? '0')
    localStorage.setItem('pizza3', (pizzaluk3 + 1).toString())
}

function pizza4()
{
    const pizzaluk4 = parseInt(localStorage.getItem('pizza4') ?? '0')
    localStorage.setItem('pizza4', (pizzaluk4 + 1).toString())
}

function pizza5()
{
    const pizzaluk5 = parseInt(localStorage.getItem('pizza5') ?? '0')
    localStorage.setItem('pizza5', (pizzaluk5 + 1).toString())
}

function pizza6()
{
    const pizzaluk6 = parseInt(localStorage.getItem('pizza6') ?? '0')
    localStorage.setItem('pizza6', (pizzaluk6 + 1).toString())
}

function poista1()
{
    const pizzaluk1 = parseInt(localStorage.getItem('pizza1') ?? '0')
    localStorage.setItem('pizza1', (pizzaluk1 - 1).toString())
}

function poista2()
{
    const pizzaluk2 = parseInt(localStorage.getItem('pizza2') ?? '0')
    localStorage.setItem('pizza2', (pizzaluk2 - 1).toString())
}

function poista3()
{
    const pizzaluk3 = parseInt(localStorage.getItem('pizza3') ?? '0')
    localStorage.setItem('pizza3', (pizzaluk3 - 1).toString())
}

function poista4()
{
    const pizzaluk4 = parseInt(localStorage.getItem('pizza4') ?? '0')
    localStorage.setItem('pizza4', (pizzaluk4 - 1).toString())
}

function poista5()
{
    const pizzaluk5 = parseInt(localStorage.getItem('pizza5') ?? '0')
    localStorage.setItem('pizza5', (pizzaluk5 - 1).toString())
}

function poista6()
{
    const pizzaluk6 = parseInt(localStorage.getItem('pizza6') ?? '0')
    localStorage.setItem('pizza6', (pizzaluk6 - 1).toString())
}