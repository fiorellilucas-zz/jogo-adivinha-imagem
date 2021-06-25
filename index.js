btnAvancar = document.getElementById("avancar");
btnAvancar.addEventListener("mouseover", mouseOver);

txtAvancar = document.getElementById("txt_avancar");
txtAvancar.addEventListener("mouseover", mouseOver);

btnAvancar.addEventListener("mouseout", mouseOut);
txtAvancar.addEventListener("mouseout", mouseOut);

pag = 0;
resultado = 0;

function mouseOver() {
	btnAvancar.style.backgroundColor = "white";
	txtAvancar.style.color = "black";
}

function mouseOut() {
	btnAvancar.style.backgroundColor = "black";
	txtAvancar.style.color = "white";
}

function final(resultado) {
	subtitulo = document.getElementById("subtitulo");
	subtitulo.textContent = "O animal que você escolheu é";
	divCartela = document.getElementsByClassName("cartela")[0];
	divCartela.innerHTML = '';

	divBotoes = document.getElementsByClassName("div-botoes")[0];
	divBotoes.innerHTML = '';

	newImg = document.createElement("img");
	newImg.className = "col img-final";
	newImg.src = "imagens/"+imgArr[resultado - 1]+".png";
	divCartela.appendChild(newImg);
}

btnAvancar.onclick = function (event) {
	pag++;
	for (i = 1; i <= 3; i++) {
		row = document.getElementById(i);
		row.innerHTML = '';
	}
	subtitulo = document.getElementById("subtitulo");
	subtitulo.textContent = "O animal que você escolheu é um desses?";
	
	cont = 0;
	row = "1"
	for (i = 1; i <= cartela1.length; i++) {
		newImg = document.createElement("img");
		newImg.className = "col img-animal";
		newImg.src = "imagens/"+cartela1[i - 1]+".png";
		document.getElementById(row).appendChild(newImg);
		cont++;

		if (cont == 4) {
			row = String(parseInt(row) + 1);
			cont = 0;
		}
	}

	divRowBotoes = document.getElementsByClassName("row-botoes")[0];
	
	divColNao = document.createElement("div");
	divColNao.className = "col";
	divRowBotoes.appendChild(divColNao);

	divColSim = document.createElement("div");
	divColSim.className = "col";
	divRowBotoes.appendChild(divColSim);

	nao = document.createElement("button");
	nao.className = "btn btn-danger btn-lg botoes btn-nao";
	nao.innerText = "NÃO";
	divColNao.appendChild(nao);

	sim = document.createElement("button");
	sim.className = "btn btn-success btn-lg botoes btn-sim";
	sim.innerText = "SIM";
	divColSim.appendChild(sim);

	sim = document.getElementsByClassName("btn-sim")[0];
	nao = document.getElementsByClassName("btn-nao")[0];

	sim.onclick = function (event) {
		pag++;
		if (pag == 2) {
			resultado += 1;
			for (i = 1; i <= 3; i++) {
			row = document.getElementById(i);
			row.innerHTML = '';
			}
			subtitulo = document.getElementById("subtitulo");
			subtitulo.textContent = "O animal que você escolheu é um desses?";
			
			cont = 0;
			row = "1"
			for (i = 1; i <= cartela2.length; i++) { 
				newImg = document.createElement("img");
				newImg.className = "col img-animal";
				newImg.src = "imagens/"+cartela2[i - 1]+".png"; 
				document.getElementById(row).appendChild(newImg);
				cont++;

				if (cont == 4) {
					row = String(parseInt(row) + 1);
					cont = 0;
				}
			}

		}
		else if (pag == 3) {
			resultado += 2;
			for (i = 1; i <= 3; i++) {
			row = document.getElementById(i);
			row.innerHTML = '';
			}
			subtitulo = document.getElementById("subtitulo");
			subtitulo.textContent = "O animal que você escolheu é um desses?";
			
			cont = 0;
			row = "1"
			for (i = 1; i <= cartela3.length; i++) { 
				newImg = document.createElement("img");
				newImg.className = "col img-animal";
				newImg.src = "imagens/"+cartela3[i - 1]+".png"; 
				document.getElementById(row).appendChild(newImg);
				cont++;

				if (cont == 4) {
					row = String(parseInt(row) + 1);
					cont = 0;
				}
			}

		}
		else if (pag == 4) {
			resultado += 4;
			for (i = 1; i <= 3; i++) {
			row = document.getElementById(i);
			row.innerHTML = '';
			}
			subtitulo = document.getElementById("subtitulo");
			subtitulo.textContent = "O animal que você escolheu é um desses?";
			
			cont = 0;
			row = "1"
			for (i = 1; i <= cartela4.length; i++) { 
				newImg = document.createElement("img");
				newImg.className = "col img-animal";
				newImg.src = "imagens/"+cartela4[i - 1]+".png"; 
				document.getElementById(row).appendChild(newImg);
				cont++;

				if (cont == 4) {
					row = String(parseInt(row) + 1);
					cont = 0;
				}
			}
		}
		else {
			resultado += 8;
			final(resultado);
		}
	}
	nao.onclick = function (event) {
		pag++;
		if (pag == 2) {
			for (i = 1; i <= 3; i++) {
			row = document.getElementById(i);
			row.innerHTML = '';
			}
			subtitulo = document.getElementById("subtitulo");
			subtitulo.textContent = "O animal que você escolheu é um desses?";
			
			cont = 0;
			row = "1"
			for (i = 1; i <= cartela2.length; i++) { 
				newImg = document.createElement("img");
				newImg.className = "col img-animal";
				newImg.src = "imagens/"+cartela2[i - 1]+".png";
				document.getElementById(row).appendChild(newImg);
				cont++;

				if (cont == 4) {
					row = String(parseInt(row) + 1);
					cont = 0;
				}
			}

		}
		else if (pag == 3) {
			for (i = 1; i <= 3; i++) {
			row = document.getElementById(i);
			row.innerHTML = '';
			}
			subtitulo = document.getElementById("subtitulo");
			subtitulo.textContent = "O animal que você escolheu é um desses?";
			
			cont = 0;
			row = "1"
			for (i = 1; i <= cartela3.length; i++) { 
				newImg = document.createElement("img");
				newImg.className = "col img-animal";
				newImg.src = "imagens/"+cartela3[i - 1]+".png"; 
				document.getElementById(row).appendChild(newImg);
				cont++;

				if (cont == 4) {
					row = String(parseInt(row) + 1);
					cont = 0;
				}
			}

		}
		else if (pag == 4) {
			for (i = 1; i <= 3; i++) {
			row = document.getElementById(i);
			row.innerHTML = '';
			}
			subtitulo = document.getElementById("subtitulo");
			subtitulo.textContent = "O animal que você escolheu é um desses?";
			
			cont = 0;
			row = "1"
			for (i = 1; i <= cartela4.length; i++) { 
				newImg = document.createElement("img");
				newImg.className = "col img-animal";
				newImg.src = "imagens/"+cartela4[i - 1]+".png"; 
				document.getElementById(row).appendChild(newImg);
				cont++;

				if (cont == 4) {
					row = String(parseInt(row) + 1);
					cont = 0;
				}
			}
		}
		else {
			final(resultado);
		}
	}
}


imgArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

cartela1 = [1, 3, 5, 7, 9, 11, 13, 15];
cartela2 = [2, 3, 6, 7, 10, 11, 14, 15];
cartela3 = [4, 5, 6, 7, 12, 13, 14, 15];
cartela4 = [8, 9, 10, 11, 12, 13, 14, 15];

cont = 0;
row = "1";
for (i = 1; i <= imgArr.length; i++){
	newImg = document.createElement("img");
	newImg.className = "col img-animal";
	newImg.src = "imagens/"+i+".png";
	document.getElementById(row).appendChild(newImg);
	cont++;

	if (cont == 5) {
		row = String(parseInt(row) + 1);
		cont = 0;
	}
}


