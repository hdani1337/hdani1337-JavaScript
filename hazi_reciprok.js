﻿function vel(a,b){
  return Math.floor(Math.random() * (b-a+1)+a);
}

function kiir(u){
	var x = document.getElementById("hazi");
	if(u==""){
		x.value += "\n";
	}

	else{
		x.value += u + "\n";
	}
}

function helyiertek_1(){//adjuk össze egy random szám számjegyeit addig, amíg nem kapunk egyetlen számjegyet
	var n = vel(100,999);
	var n_temp = Math.floor(n);
	kiir("A háromjegyű szám: " + n_temp);

  var szazas = Math.floor(n/100);

  var tizes = Math.floor(n/10);
  tizes = Math.floor(tizes%10);

  var egyes = Math.floor(n/1);
  egyes = Math.floor(egyes%10);

			kiir("Helyi értékek külön: " + szazas + " " + tizes + " " + egyes); //Helyi értékek külön

		var m = szazas+tizes+egyes;
			kiir("Helyi értékek összeadva: " + m); //Helyi értékek összeadva

		var mtizes = Math.floor(m/10); //második számnak a tizes helyi értéke

		var megyes = m%10; //második számnak az egyes helyi értéke
		m = m/10;
		m = m-megyes/10;
		var o = mtizes+megyes;
			kiir("Második szám helyi értékeinek összeadva: " + o + "\n");
		}

function helyiertek_2(){//háromjegyű számból négyjegyűt úgy, hogy a középső számjegyet megduplázzuk
	var n = vel(100,999);

	var szazas = Math.floor(n/100); //n-nek a százas helyi értéke

  var tizes = Math.floor(n/10);
  tizes = Math.floor(tizes%10);

  var egyes = Math.floor(n/1);
  egyes = Math.floor(egyes%10);

		kiir("Az eredeti háromjegyű szám: " + szazas + "" + tizes + "" + egyes);
		kiir("A megduplázott tízes helyiértékű szám: " + szazas + "" + tizes + "" + tizes + ""+ egyes + "\n");
}

function elso(){
  for(i=100;i<999;i++){
    if(i%5==0){
      if(i%2==1){
        kiir("Öttel végződő szám ez is: " + i);
      }
    }
  }
  kiir("\n");
}

function helyiertek_3(){
  var n = vel(1000,9999)
  kiir("A négyjegyű szám: " + n);

  var ezres = Math.floor(n/1000);

  var szazas = Math.floor(n/100);
  szazas = Math.floor(szazas%10);

  var tizes = Math.floor(n/10);
  tizes = Math.floor(tizes%10);

  var egyes = Math.floor(n/1);
  egyes = Math.floor(egyes%10);

  var osszeg = ezres+szazas+tizes+egyes;

  kiir("A számjegyek külön: " + ezres + " " + szazas + " " + tizes + " " + egyes);
  kiir("A számjegyek összege: " + osszeg + "\n");
}
