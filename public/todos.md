att göra kod:

- STÄDA KOD!!!!!
- alla kommentarer på engelska!

- i printTaskList - läggs till
                            - bocka i klart
                                -stryka över task samtidigt?
                                -_NÅGON_ visuell förändring + längst ner på listan
- validera inputs?
    - ska man kunna lägga in tasks utan deadline?
        - OM JA - ska de hamna sist på lista vid sortering av deadline-datum.
        - skriva ut texten - ingen deadline eller liknande?

- RESET ALL -knapp lista? (töm taskList samt localStorage?)

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

BUGGAR:
    - du kan lägga till flera av exakt samma todo. detta ska ej gå.
    (kontrollera if-satsen och villkoren!)

    - Kategorier default-läge = senast klickad... nollställ!

    - markera klickat kategori! (add class?)

CSS
- lägg allt i en centrerad container så designen håller sig enhållig vid förstoring/förminskning
- styla todo-LI-elementen _NÄR_ ikoner och allt printas som de ska.
- styla kategori-valen!

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
