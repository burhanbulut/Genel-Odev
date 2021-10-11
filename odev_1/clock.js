function isim(){
   let inputName= prompt("İsim Giriniz","Burhan")
   document.getElementById("Isim").innerText = inputName
}

function clock(){
    var date = new Date();
    var s =date.getSeconds();
    var m =date.getMinutes();
    var h =date.getHours();
    var gun1 =date.getDate()
    var gun = gun1 % 10
    if(gun == 1 ){
        gun = "Pazartesi"
    }else if(gun == 2){
        gun = "Salı"
    }else if (gun ==3){
        gun = "Çarşamba"
    }else if (gun == 4){
        gun = "Perşembe"
    }else if (gun == 5){
        gun = "Cuma"
    }else if (gun == 6){
        gun = "Cumartesi"
    }else if (gun == 7){
        gun = "Pazar"
    }


h = (h < 10 ) ? "0" + h : h
m = (m < 10 ) ? "0" + m : m
s = (s < 10 ) ? "0" + s : s

let time = h + ":" + m + ":" + s + " " + gun
document.getElementById("myClock").innerText = time
document.getElementById("myClock").textContent = time
setTimeout(clock,1000)
}
isim();
clock();