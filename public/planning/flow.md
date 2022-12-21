
tom sida med rubrik TO do lista;

objekt med:
	inputtext
	inlagt datum
	input deadline
	kategori

När samtliga fält är ifyllda
    Klicka på SUBMIT
		LÄGG TILL LISTA

todos börjar byggas på sidan
    Nya saker läggs till i listan fallande.

i listan:
	checkedboxes för OM klara
	task
	ilagt datum
	kategori
	deadline
	ta bort

sakerna i lista ska gå att sorteras på:
	inlagt datum
	namn
	Deadline
	
kategorier
	! (viktigt!) 
    📚 (plugg)
    🛒 (handla)
    ❤️ (viktigt<3)

OM uppgift klar:
	visuellt SYNS klar och läggs längst ner i listan

OM deadline passerats
	annan färg/ annat utseende SYNAS

OM deadline inom 5 dagar
	test/färg förfaller snart

FUNKTIONER:
	Objekt:
	 	input value - dagens datum syns (auto?) - välj datum deadline - kategori - kodat i HTML syns
			vid klick på LÄGG TILL
		 		alla värden push till en ARRAY.

	värden i Array skrivs ut i blocket under:
		HTML struktur i JS
	ska gå att markera:
		klar - läggs längst ner i lista VISUELL FÖRÄNDRING
		ta bort - bort från array

	sortering:
		- inlagd datum fallande + tvärtom
		- namn fallande + tvärtom
		- deadline fallande + tvärtom
		
	if-satser:
		- OM klar - längst ner i listan något VISUELLT (utgråad? stjärna? + inaktiv?)
		- OM passerat deadline - markering FÄRG/ UTSEENDE
		- OM deadline inom 5 dagar -  markering textFÄRG förfaller snart

	kategorier:
		Symboler Google Icons
 
	ÖVRIGT jag vill ha med som jag missade i webshopen:
		ANIMATION

FUNKTIONER:
