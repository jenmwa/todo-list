att göra kod:

- STÄDA KOD!!!!!

- JUST NU - flera knapptryck samma todos lägger till samma todo - _FIXA IF-SATS_
- function för kategori - när du trycker på knapp - den symbolen skickas med in i objectet.
    - OM klickat i nån kategori - invertera färgerna så det syns vem som är iklickad
            // SPANA in filmerna om el-områdes-labben vi hade (olika områden, olika utslag)

- i printTaskList - läggs till
                            - kategori 
                            - bocka i klart
                                -stryka över task samtidigt?
                                -_NÅGON_ visuell förändring + längst ner på listan
- validera inputs?
    - ska man kunna lägga in tasks utan deadline?
        - OM JA - ska de hamna sist på lista vid sortering av deadline-datum.
        - skriva ut texten - ingen deadline eller liknande?

- RESET ALL -knapp lista? (töm taskList samt localStorage?)
        
- NÄR jag fått in kategorier i todo:listan
    - STYLA CSS:en

- sakerna i lista ska gå att sorteras på:
	inlagt datum
	namn
	Deadline

- IF-satser
    OM uppgift klar:
        visuellt SYNS klar och läggs längst ner i listan

    OM deadline passerats
        annan färg/ annat utseende SYNAS

    OM deadline inom 5 dagar
        test/färg förfaller snart


CSS
- lägg allt i en centrerad container så designen håller sig enhållig vid förstoring/förminskning
- styla todo-LI-elementen _NÄR_ ikoner och allt printas som de ska.

SAKER JAG VILL HA MED men ej prio:
    - Mörkt läge toggle
    - animation
    - byta bakgrund beroende på årstid?

*GLÖM EJ:
- aria-label på knappar
- TYPESCRIPT
- STÄDA KOD!!!!!!!!

    todo + datum + deadline + kategori i ett objekt.
    vid klick på LÄGG TILL
     objekt till printList array
     och listan till
        localstorage

LÄNKTIPS:
Typescript och localStorage.
https://www.youtube.com/watch?v=jBmrduvKl5w
