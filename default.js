function trocaInfo(btn){
	//Variáveis para uso posterior
  var info = document.querySelector('#info_bg');
  var infoAtivo = window.getComputedStyle(info);
  infoAtivo = infoAtivo.getPropertyValue('display');
  btnAtivo = info.getAttribute('var');
  
	//Verifica se o "info" já está aparecendo.
	//Se não estiver, faz aparecer.
	//Se o mesmo botão for pressionado de novo, desaparece.
  if (infoAtivo == "none"){
	  info.style.height = "420px";
	  info.style.display = "flex";
	  var btnAtivo = btn;
  }else if (infoAtivo == "flex" && btnAtivo == btn){
	  setTimeout(function(){
		info.style.opacity = 0;
		info.style.display = "none";
		info.setAttribute("var", "0");
		window.location.assign("#sobre")
	  },500);
  }
  
	//Animação de fade (sumir)
  info.style.opacity = 0;
  
	//Animação de fade (aparecer) junto da mudança de texto
  setTimeout(function(){ 
	  if (btn == 1){
		document.getElementById("info_titulo").innerHTML = "Passeios"; 
		document.getElementById("info_texto").innerHTML = "Moramos na cidade maravilhosa, conhecê-la é um dever e um prazer. Organizamos passeios e excursões pelo Rio para conhecer seus espaços de cultura, lazer, atrações e pontos turísticos. Assim fortalecemos nos nossos jovens a sensação de pertencimento e os ajudamos ampliar seus horizontes e além de descobrir as belezas da cidade. ";
		document.getElementById("info_img").style.backgroundImage = 'url(midia/logo.gif)';
		info.setAttribute("var", "1");
	  }else if (btn == 2){
		document.getElementById("info_titulo").innerHTML = "Reciclação"; 
		document.getElementById("info_texto").innerHTML = "O Reciclação é uma tecnologia social desenvolvida pelo Grupo PROA em 2013 que investe na coleta de resíduos (garrafa pet, alumínio, caixa tetra pak, plástico duro, papelão) e na educação ambiental.";
		document.getElementById("info_img").style.backgroundImage = 'url(midia/3.jpg)';
		info.setAttribute("var", "2");
	  }else if (btn == 3){
		document.getElementById("info_titulo").innerHTML = "Caminho do graffiti"; 
		document.getElementById("info_texto").innerHTML = "Aprenda a fazer graffiti legalmente";
		document.getElementById("info_img").style.backgroundImage = 'url(midia/2.jpg)';
		info.setAttribute("var", "3");
	  }else if (btn == 4){
		document.getElementById("info_titulo").innerHTML = "Clube jovem"; 
		document.getElementById("info_texto").innerHTML = "Venha fazer parte do nosso clube";
		document.getElementById("info_img").style.backgroundImage = 'url(midia/5.gif)';
		info.setAttribute("var", "4");
	  }else if (btn == 5){
		document.getElementById("info_titulo").innerHTML = "Brigada Mirim "; 
		document.getElementById("info_texto").innerHTML = "Junte-se ao nosso grupo infantil de combate à poluição";
		document.getElementById("info_img").style.backgroundImage = 'url(midia/4.gif)';
		info.setAttribute("var", "5");
	  }else if (btn == 6){
		document.getElementById("info_titulo").innerHTML = "Encontros de sensibilização"; 
		document.getElementById("info_texto").innerHTML = "São encontros acolhedores com grupos de homens, mulheres, adolescentes, jovens mães para falar de assuntos como: uso da camisinha, responsabilidade paterna, o aborto e suas consequências, DST/HIV-Aids, drogas, vida escolar, mercado de trabalho e outras demandas que a Comunidade sugerir.";
		document.getElementById("info_img").style.backgroundImage = 'url(midia/2.jpg)';
		info.setAttribute("var", "6");
	  }else if (btn == 7){
		document.getElementById("info_titulo").innerHTML = "Jardim dos Prazeres"; 
		document.getElementById("info_texto").innerHTML = "É como o nome diz";
		document.getElementById("info_img").style.backgroundImage = 'url(midia/logo.gif)';  
		info.setAttribute("var", "7");
	  }else if (btn == 8){
		document.getElementById("info_titulo").innerHTML = "Camelô educativo"; 
		document.getElementById("info_texto").innerHTML = "Camelô da forma correta!";
		document.getElementById("info_img").style.backgroundImage = 'url(midia/4.gif)';
		info.setAttribute("var", "8");
	  }else if (btn == 9){
		document.getElementById("info_titulo").innerHTML = "Renovação de Vidas"; 
		document.getElementById("info_texto").innerHTML = "Renove sua vida <br><small>*Funciona melhor que a universal</small>";
		document.getElementById("info_img").style.backgroundImage = 'url(midia/2-mob.jpg)';
		info.setAttribute("var", "9");
	  }
      info.style.opacity = 1;
  },500);
}