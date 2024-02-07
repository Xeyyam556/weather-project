const inp=document.querySelector('.inp');
const btn=document.querySelector('.btn');
const yeniden=document.querySelector('.yeniden')

btn.addEventListener('click',function(meluamat){
    
    document.querySelector('.section2').style.display='none'
    document.querySelector('.section3').style.display='block'
    const yazi=inp.value
  

    
  const netice = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${yazi}&units=metric&appid=178a3c934b2df7d2d100f80914ef03a1`)
    const hava=document.querySelector('.hava')
const temp=document.querySelector('.temp')
const kul=document.querySelector('.kul')
const rut=document.querySelector('.rut')
const basliq=document.querySelector('.basliq')

    netice.then(function (netice) {
        return netice.json()
    }).then(function(melumat){
        basliq.innerHTML=melumat.name
        hava.innerHTML=`Hava durumu:${melumat.weather[0].main}`
        temp.innerHTML=`Temperatur:${melumat.main.temp.toFixed(1)}°`
        kul.innerHTML=`Küləyin sürəti:${melumat.wind.speed.toFixed(1)}km/sa`
        rut.innerHTML=`Rütubət:${melumat.main.humidity}%`
    })

})
yeniden.addEventListener('click',function(){
    inp.value=" "
    document.querySelector('.section2').style.display='block'
    document.querySelector('.section3').style.display='none'
})
window.addEventListener("keyup",function(e){
    if(e.key=="Enter"){

    }
})
