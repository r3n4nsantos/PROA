function trocaInfo(btn){
  if (btn == 1){
	document.getElementById("info_titulo").innerHTML = "Passeios"; 
	document.getElementById("info_texto").innerHTML = "São passeios bem legais";
	document.getElementById("info_img").style.backgroundImage = 'url(midia/logo.gif)';
  }else if (btn == 2){
	document.getElementById("info_titulo").innerHTML = "Reciclação"; 
	document.getElementById("info_texto").innerHTML = "Nossos projetos de ajuda ao meio ambiente";
	document.getElementById("info_img").style.backgroundImage = 'url(midia/3.jpg)';
  }else if (btn == 3){
	document.getElementById("info_titulo").innerHTML = "Caminho do graffiti"; 
	document.getElementById("info_texto").innerHTML = "Aprenda a fazer graffiti legalmente";
	document.getElementById("info_img").style.backgroundImage = 'url(midia/2.jpg)';
  }else if (btn == 4){
	document.getElementById("info_titulo").innerHTML = "Clube jovem"; 
	document.getElementById("info_texto").innerHTML = "Venha fazer parte do nosso clube";
	document.getElementById("info_img").style.backgroundImage = 'url(midia/5.gif)';
  }else if (btn == 5){
	document.getElementById("info_titulo").innerHTML = "Brigada Mirim "; 
	document.getElementById("info_texto").innerHTML = "Junte-se ao nosso grupo infantil de combate à poluição";
	document.getElementById("info_img").style.backgroundImage = 'url(midia/4.gif)';
  }else if (btn == 6){
	document.getElementById("info_titulo").innerHTML = "Encontros de sensibilização"; 
	document.getElementById("info_texto").innerHTML = "São encontros acolhedores com grupos de homens, mulheres, adolescentes, jovens mães para falar de assuntos como: uso da camisinha, responsabilidade paterna, o aborto e suas consequências, DST/HIV-Aids, drogas, vida escolar, mercado de trabalho e outras demandas que a Comunidade sugerir.";
	document.getElementById("info_img").style.backgroundImage = 'url(midia/2.jpg)';
  }else if (btn == 7){
	document.getElementById("info_titulo").innerHTML = "Jardim dos Prazeres"; 
	document.getElementById("info_texto").innerHTML = "É como o nome diz";
	document.getElementById("info_img").style.backgroundImage = 'url(midia/logo.gif)';  
  }else if (btn == 8){
	document.getElementById("info_titulo").innerHTML = "Camelô educativo"; 
	document.getElementById("info_texto").innerHTML = "Camelô da forma correta!";
	document.getElementById("info_img").style.backgroundImage = 'url(midia/4.gif)'; 
  }else if (btn == 9){
	document.getElementById("info_titulo").innerHTML = "Renovação de Vidas"; 
	document.getElementById("info_texto").innerHTML = "Renove sua vida <br><small>*Funciona melhor que a universal</small>";
	document.getElementById("info_img").style.backgroundImage = 'url(midia/2-mob.jpg)';
  }
}
