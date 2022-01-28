        let btnEsp = document.getElementById("btnESP");
        let btnEng = document.getElementById("btnENG");



        let nombreUsuario = document.getElementById('usuario');
        var usuario = prompt("Escribe tu nick: ");
        nombreUsuario.innerHTML = usuario;




        window.addEventListener('load', function () {
            arrSrc.sort(function () { return Math.random() - 0.5 });
            document.getElementById("godplayer").innerHTML=localStorage.getItem("topUsuario");
            document.getElementById("godmistakes").innerHTML=localStorage.getItem("topErrores");

        });


        let carta1 = document.getElementById('carta1');
        let carta2 = document.getElementById('carta2');
        let carta3 = document.getElementById('carta3');
        let carta4 = document.getElementById('carta4');
        let carta5 = document.getElementById('carta5');
        let carta6 = document.getElementById('carta6');
        let carta7 = document.getElementById('carta7');
        let carta8 = document.getElementById('carta8');
        let carta9 = document.getElementById('carta9');
        let carta10 = document.getElementById('carta10');
        let carta11 = document.getElementById('carta11');
        let carta12 = document.getElementById('carta12');

        let arrCartas = [
            carta1, carta2, carta3, carta4, carta5, carta6,
            carta7, carta8, carta9, carta10, carta11, carta12
        ];

        let arrSrc = [
            "url(imagenes/mtg1.jpg)", "url(imagenes/mtg2.jpg)", "url(imagenes/mtg3.jpg)",
            "url(imagenes/mtg4.jpg)", "url(imagenes/mtg5.jpg)", "url(imagenes/mtg6.jpg)",
            "url(imagenes/mtg1.jpg)", "url(imagenes/mtg2.jpg)", "url(imagenes/mtg3.jpg)",
            "url(imagenes/mtg4.jpg)", "url(imagenes/mtg5.jpg)", "url(imagenes/mtg6.jpg)"
        ];
        let marcador = document.getElementById('marcador');

        let sel1 = '';
        let sel2 = '';

         
        let errores = document.getElementById("fallos");
        let puntuacion = document.getElementById("marcador");
        puntuacion = 0;
        errores = 0;




        arrCartas[0].addEventListener('click', function () {
            arrCartas[0].style.backgroundImage = arrSrc[0];
        });
        arrCartas[1].addEventListener('click', function () {
            arrCartas[1].style.backgroundImage = arrSrc[1];
        });


        arrCartas[2].addEventListener('click', function () {
            arrCartas[2].style.backgroundImage = arrSrc[2];
        });
        arrCartas[3].addEventListener('click', function () {
            arrCartas[3].style.backgroundImage = arrSrc[3];
        });

        arrCartas[4].addEventListener('click', function () {
            arrCartas[4].style.backgroundImage = arrSrc[4];
        });
        arrCartas[5].addEventListener('click', function () {
            arrCartas[5].style.backgroundImage = arrSrc[5];
        });

        arrCartas[6].addEventListener('click', function () {
            arrCartas[6].style.backgroundImage = arrSrc[6];
        });
        arrCartas[7].addEventListener('click', function () {
            arrCartas[7].style.backgroundImage = arrSrc[7];
        });

        arrCartas[8].addEventListener('click', function () {
            arrCartas[8].style.backgroundImage = arrSrc[8];
        });
        arrCartas[9].addEventListener('click', function () {
            arrCartas[9].style.backgroundImage = arrSrc[9];
        });

        arrCartas[10].addEventListener('click', function () {
            arrCartas[10].style.backgroundImage = arrSrc[10];
        });
        arrCartas[11].addEventListener('click', function () {
            arrCartas[11].style.backgroundImage = arrSrc[11];
        });


        arrCartas.forEach(element => {



            element.addEventListener('click', function comparar(e) {

                if (sel1 == '') {
                    sel1 = e.target;

                } else {
                    if (sel1 == e.target) {

                    } else {
                        sel2 = e.target;
                        if (sel1.style.backgroundImage === sel2.style.backgroundImage) {
                            let info = document.getElementById("informacion");
                            info.innerHTML = "Son pareja";
                            sel1.removeEventListener('click', comparar);
                            sel2.removeEventListener('click', comparar);
                            
                            sel1.style.visibility = 'inherit';
                            sel1.style.visibility = 'inherit';
                            sel1 = '';
                            sel2 = '';
                            puntuacion++;
                            marcador.value = puntuacion;
                            if (marcador.value == 6) {
                                
                                
                                if (localStorage.getItem("topErrores") > errores){
                                    localStorage.setItem("topUsuario", usuario);
                                    localStorage.setItem("topErrores", errores);

                                    document.getElementById("godplayer").innerHTML=usuario;
                                    document.getElementById("godmistakes").innerHTML=errores;
                                }else{
                                   
                                }


                                alert("Has ganado máquina con un total de: " + errores);
                                location.reload();
                            }
                        } else {

                            setTimeout(() => {
                                if (sel1.style.visibility == 'inherit') {
                                    sel2.style.backgroundImage = 'url(imagenes/dorso.jpg)';
                                } else if (sel2.style.visibility == 'inherit') {
                                    sel1.style.backgroundImage = 'url(imagenes/dorso.jpg)';
                                } else {
                                    sel1.style.backgroundImage = 'url(imagenes/dorso.jpg)';
                                    sel2.style.backgroundImage = 'url(imagenes/dorso.jpg)';
                                }

                                sel1 = '';
                                sel2 = '';
                                let info = document.getElementById("informacion");
                                info.innerHTML = "no son pareja";
                                errores++;
                                fallos.value = errores;
                            }, 500);
                            //TODO que no se pueda hacer nada mientras se muestran las dos 

                        }
                    }
                }

            })
        });



        

        let paginaESP = document.getElementsByClassName("esp");
        let paginaENG = document.getElementsByClassName("eng");


        for (i = 0; i < paginaENG.length; i++) {
            paginaENG[i].classList.add('ocultar');
        }

        btnEsp.addEventListener('click', idiomaESP);
        btnEng.addEventListener('click', idiomaENG);





        function idiomaESP() {
            for (i = 0; i < paginaENG.length; i++) {
                paginaENG[i].classList.add('ocultar');
            }
            for (i = 0; i < paginaESP.length; i++) {
                paginaESP[i].classList.remove('ocultar');
            }
            localStorage.setItem("idioma", "español");
        }


        function idiomaENG() {
            for (i = 0; i < paginaESP.length; i++) {
                paginaENG[i].classList.remove('ocultar');
            }
            for (i = 0; i < paginaENG.length; i++) {
                paginaESP[i].classList.add('ocultar');
            }
            localStorage.setItem("idioma", "ingles");
        }


        if (localStorage.getItem("idioma") == "ingles") {
            idiomaENG();
        }
        if (localStorage.getItem("idioma") == "español") {
            idiomaESP();
        }




