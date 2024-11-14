function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente');
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       res.innerHTML = `Idade calculada:  ${idade}`
       var genero = ''

       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
        img.style.textAlign = 'center'
       
       if(fsex[0].checked){
            genero = 'homem'
            if(idade >=0 && idade < 12){
                //criança
                img.setAttribute('src','assets/crianca-h.jpg' )
            }else if(idade >=12 && idade < 21){
                //jovem
                img.setAttribute('src','assets/jovem-h.jpg')
            }else if(idade < 50 ){
                //adulto
                img.setAttribute('src','assets/adulto-h.jpg')

            }else{
                //idoso
                img.setAttribute('src','assets/idoso-h.jpg')

            }
            
       }else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >=0 && idade < 12){
                //criança
                img.setAttribute('src','assets/crianca-m.jpg')

            }else if(idade >=12 && idade < 21){
                //jovem
                img.setAttribute('src','assets/jovem-m.jpg')

            }else if(idade < 50 ){
                //adulto
                img.setAttribute('src','assets/adulto-m.jpg')

            }else{
                //idoso
                img.setAttribute('src','assets/idosa-m.jpg')

            }
       }
       res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) //adicionar elemento
    }
}

