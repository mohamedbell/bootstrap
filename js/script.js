function view() {
	document.getElementById("empty").style.display="none";
	document.getElementById("faux").style.display="none";
	document.getElementById("i").style.display="none";
	document.getElementById("n").style.display="none";
	document.getElementById("d").style.display="none";
	document.getElementById("p").style.display="none";
	val=document.getElementById("code").value;
	 var tab = {
	 				"11" : { "img" :"img/img1.jpg","name":"Pc Portable HP OMEN 15-ce001nk" ,"des" : "i5 7e Gen 12Go 1To ","price":2789},
					"12": {"img":"img/img2.jpg","name":"iPhone X","des":"64 GO / SPACE GREY RAM : 3 Go - Appareil photo 12 Mp ( Arriere )  7 Mp ( Frontale )","price":3050} 
				};

	if (val.length==0) { document.getElementById("empty").style.display="block"; }
	else { 	
			found=false;
			for (key in tab)
			{
				if(val==key){	
								document.getElementById("i").style.display="block";
								document.getElementById("n").style.display="block";
								document.getElementById("d").style.display="block";
								document.getElementById("p").style.display="block";
								found=true;
								document.getElementById("im").src=tab[key]["img"];
								document.getElementById("name").innerHTML=tab[key]["name"];
								document.getElementById("des").innerHTML=tab[key]["des"];
								document.getElementById("price").innerHTML=tab[key]["price"];

							}
		
			}
			if (!found) {document.getElementById("faux").style.display="block";}

		}

}