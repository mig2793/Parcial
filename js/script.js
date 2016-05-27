window.onload = function()
{
	//INICIO PRIMER EJERCICIO....
	var numeroAleatorio = 0;
	//Para obtener el número aleatorio...
	nom_div("nuevoNumero").addEventListener('click', function(event)
    {
        console.log("Generar número aleatorio");
        //OBTENER UN NÚMERO ALEATORIO DE 1 - 10...
        //Esto puede realizarse a través de la función random()
        numeroAleatorio = random(10);
        //Recuerden que se adiciona 1 para que el valor de NumeroMaximo 
        //sea incluyente
    });

    //Para validar si el valor ingresado por el usuario es igual...
    nom_div("validaAdivina").addEventListener('click', function(event)
    {
        var numeroUsuario = Number(nom_div("adivinaNumero").value);
        if(numeroAleatorio > 0){
	        if(numeroUsuario > 0 && numeroUsuario <=10){
		        if(numeroAleatorio == numeroUsuario ){
		        	nom_div("mensajeAdivina").innerHTML = "Buen trabajo el numero es "+ numeroAleatorio;
		        }else{
		        	nom_div("mensajeAdivina").innerHTML = "Te equivocaste!!";
		        }
	    	}else{
	    		nom_div("mensajeAdivina").innerHTML = "El numero debe estar entre 1 y 10";
	    	}
    	}else{
    		nom_div("mensajeAdivina").innerHTML = "Primero genera un numero aleatorio";
    	}
    });

    function random(max){
    	return Math.floor(Math.random() * max) + 1;
    }
	//FIN DEL PRIMER EJERCICIO...

	/* ------------------------------------------------------------ */
	/* ------------------------------------------------------------ */
	/* ------------------------------------------------------------ */

	//INICIO SEGUNDO EJERCICIO...
	var truncateString = function()
	{
		var texto 	  = nom_div("stringTruncate").value, 
			valMaximo = Number(nom_div("numberTruncate").value);
		console.log(texto, valMaximo);
		//El div donde se mostrará el mensaje es: mensajeTruncate
		var resultado = texto.substring(0, valMaximo);
		valMaximo <= resultado.length ? nom_div("mensajeTruncate").innerHTML = resultado + "..." : nom_div("mensajeTruncate").innerHTML = resultado;
	};

	//Para capturar los eventos de teclado...
	nom_div("stringTruncate").addEventListener("keyup", function (event)
	{
		truncateString();
  	});
	//Para capturar el valor máximo del string...
	nom_div("numberTruncate").addEventListener("change", function (event)
	{
		truncateString();
  	});
	//FIN DEL SEGUNDO EJERCICIO....

	/* ------------------------------------------------------------ */
	/* ------------------------------------------------------------ */
	/* ------------------------------------------------------------ */

	//INICIO TERCER EJERCICIO...
	var estudiantes = [{
							nombre : "Juan", 
							nota   : 80
					   }, 
					   {
							nombre : "María", 
							nota   : 77
					   }, 
					   {
							nombre : "Carlos", 
							nota   : 88
					   }, 
					   {
							nombre : "Miriam", 
							nota   : 95
					   }, 
					   {
							nombre : "Pedro", 
							nota   : 68
					   }, 
					   {
							nombre : "ivan", 
							nota   : 1
					   }, 
					   {
							nombre : "carol", 
							nota   : 2
					   }];
	
	var grados = [{
						rango : 60, 
						grado : "F", 
				  }, 
				  {
						rango : 70, 
						grado : "D", 
				  }, 
				  {
						rango : 80, 
						grado : "C", 
				  }, 
				  {
						rango : 90, 
						grado : "B", 
				  }, 
				  {
						rango : 100, 
						grado : "A", 
				  }];
	var imprimeDatos = (function()
	{
		var txtEstudiantes = txtGrados = ""; 
		for(var i = 0; i < estudiantes.length; i++)
		{
			txtEstudiantes += "<li>"+estudiantes[i].nombre + " = " + 
							  "<input type = 'number' value = '"+(estudiantes[i].nota)+"' class = 'notUser' id = 'nota_"+(i + 1)+"'>" + 
							  "</li>";
		}
		txtEstudiantes = "<ol>"+(txtEstudiantes)+"</ol>";
		nom_div("listadoUsuarios").innerHTML = txtEstudiantes;
		//Para loe eventos de escucha...
		var inputs = document.getElementsByClassName("notUser");
		for(var i = 1; i <= inputs.length; i++)
		{
			nom_div("nota_" + i).addEventListener('change', function(event)
			{
				var ind = Number(this.id.split("_")[1]) - 1;
				estudiantes[ind].nota = Number(this.value);
				calculaPromedioCurso();
			});
		}
		//Para imprimir los grados...
		for(var i = 0; i < grados.length; i++)
		{
			txtGrados += "<li> <= "+grados[i].rango + " = <b>"+grados[i].grado+"</b></li>";
		}
		txtGrados = "<ul>"+(txtGrados)+"</ul>";
		nom_div("listadoGrados").innerHTML = txtGrados;
	})();
	var promedio = 0
	var calculaPromedioCurso = function()
	{
		var lengthNota = estudiantes.length;
		var lengthGrado = grados.length;
		var sumatoria = 0;
		for(var i = 0 ; i < lengthNota; i++)
		{
			sumatoria += estudiantes[i].nota;
		}
		console.log(sumatoria);
		promedio = Math.round(sumatoria/lengthNota);

		for(i=0;i<lengthGrado;i++){
			if(promedio <= grados[i].rango){
				nom_div("mensajePromedio").innerHTML = "El promedio es "+promedio+" el grado es " + grados[i].grado;
				break;
			}
		}
		
	};

	nom_div("calculaPromedio").addEventListener('click', function(event)
	{
		calculaPromedioCurso();
	});
	//FIN DEL EJERCICIO TRES

	//Para imprir elementos en el HTML...
    function nom_div(div)
    {
        return document.getElementById(div);
    }
};
