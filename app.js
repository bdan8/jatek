var jatekosPont = 0;
var szamitogepPont = 0;
const jatekosPont_span = document.getElementById("jatekos-pont");
const szamitogepPont_span = document.getElementById("szamitogep-pont");
const eredmenyTabla_div = document.querySelector(".eredmeny-tabla");
const eredmeny_p = document.querySelector(".eredmeny > p");
const ko_div = document.getElementById("k");
const papir_div = document.getElementById("p");
const ollo_div = document.getElementById("o");

function szamitogepValasztasa(){
	const valasztasok=['k','p','o'];
	const veletlenSzam = Math.floor(Math.random() * 3);
	return valasztasok[veletlenSzam];
}

function szoKonvertalas(betu){
	if(betu === "k") return "A kő";
	if(betu === "p") return "A papír";
	return "Az olló";
}

function szoKonvertalas2(betu){
	if(betu === "k") return "A követ";
	if(betu === "p") return "A papírt";
	return "Az ollót";
}

function szoKonvertalas3(betu){
	if(betu === "k") return "A kővel";
	if(betu === "p") return "A papírral";
	return "Az ollóval";
}

function nyer(jatekosValasztasa, gepValasztasa){
	jatekosPont++;
	jatekosPont_span.innerHTML = jatekosPont;
	szamitogepPont_span.innerHTML = szamitogepPont;
	eredmeny_p.innerHTML = `${szoKonvertalas(jatekosValasztasa)} (játékos) legyőzi ${szoKonvertalas2(gepValasztasa)} (számítógép) . Nyertél!`;
	document.getElementById(jatekosValasztasa).classList.add('zold-villanas');
	setTimeout(function() {document.getElementById(jatekosValasztasa).classList.remove('zold-villanas')},400);
}
function veszit(jatekosValasztasa, gepValasztasa){
	szamitogepPont++;
	szamitogepPont_span.innerHTML = szamitogepPont;
	jatekosPont_span.innerHTML = jatekosPont;
	eredmeny_p.innerHTML = `${szoKonvertalas(gepValasztasa)} (számítógép) legyőzi ${szoKonvertalas2(jatekosValasztasa)} (játékos) . Vesztettél...`;
	document.getElementById(jatekosValasztasa).classList.add('piros-villanas');
	setTimeout(function() {document.getElementById(jatekosValasztasa).classList.remove('piros-villanas')},400);
}
function dontetlen(jatekosValasztasa, gepValasztasa){
	szamitogepPont_span.innerHTML = szamitogepPont;
	jatekosPont_span.innerHTML = jatekosPont;
	eredmeny_p.innerHTML = `${szoKonvertalas(jatekosValasztasa)} (játékos) megegyezik ${szoKonvertalas3(gepValasztasa)} (számítógép) . Döntetlen.`;
	document.getElementById(jatekosValasztasa).classList.add('sarga-villanas');
	setTimeout(function() {document.getElementById(jatekosValasztasa).classList.remove('sarga-villanas')},400);
}

function jatek(jatekosValasztasa){
	const gepValasztasa = szamitogepValasztasa();
	switch (jatekosValasztasa + gepValasztasa){
		case "ko":
		case "pk":
		case "op":
			nyer(jatekosValasztasa,gepValasztasa);
			break;
		case "kp":
		case "po":
		case "ok":
			veszit(jatekosValasztasa,gepValasztasa);
			break;
		case "kk":
		case "pp":
		case "oo":
			dontetlen(jatekosValasztasa,gepValasztasa);
			break;
	}
}

function main(){
	ko_div.addEventListener('click', function(){
	  jatek("k");
	})
	papir_div.addEventListener('click', function(){
	  jatek("p")
	})
	ollo_div.addEventListener('click', function(){
	  jatek("o")
	})
}

main();