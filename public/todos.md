att göra kod:

- STÄDA KOD!!!!!
- alla kommentarer på engelska!

- När iklickad KLAR - isComplete = TRUE;
    - Om true addera klassen .checked 
            (som stryker över all text!)

- se till att bock- i- ruta SYNS!

- ibockade KLARA-rutan ej sparade i localStorage!!! fixa!)

- Få till _ Hitta hela LI-elemntet som ka ändra färg/blurras vid ✅!

- i printTaskList - läggs till
                            - längst ner på en lista,
                                sortera isComplete false/true
- validera inputs?
    - ska man kunna lägga in todo's utan Kategori? (NEJ i dagsläget, men jag visar ingen validering)
    - ska man kunna lägga in todo's utan deadline? (ja i dagsläget men visar ingen validering)
        - OM JA - ska de hamna sist på lista vid sortering av deadline-datum.
        - skriva ut texten - ingen deadline eller liknande?
        -antal bokstäver max?
            -annars fixa CSS så fungerar fint med flera rader

- RESET ALL -knapp lista? (töm taskList samt localStorage?)


- IF-satser VG
    OM uppgift klar:
        visuellt SYNS klar och läggs längst ner i listan

    OM deadline passerats
        annan färg/ annat utseende SYNAS

    OM deadline inom 5 dagar
        test/färg förfaller snart

BUGGAR:
    - du kan lägga till flera av exakt samma todo. detta ska ej gå.
    (kontrollera if-satsen och villkoren!)

    - Kategorier iklickade... nollställ!
    NU GÅR alla att klicka i och får visuell förändring men ej ur.

CSS
- lägg allt i en centrerad container så designen håller sig enhållig vid förstoring/förminskning
- styla todo-LI-elementen _NÄR_ ikoner och allt printas som de ska.
- styla kategori-valen!
- styla checkboxen, både bock + default-färg...
- GÅ IGENOM CSS STRUKTUREN!

SAKER JAG VILL HA MED men ej prio:
    - Mörkt läge toggle
    - animation
    - byta bakgrund beroende på årstid?

*GLÖM EJ:
- aria-label på knappar
- TYPESCRIPT
- STÄDA KOD!!!!!!!!


LÄNKTIPS:
Typescript och localStorage.
https://www.youtube.com/watch?v=jBmrduvKl5w

systematiskt steg för steg element TodoList (enkel).
https://thecodingpie.medium.com/how-to-build-a-todo-list-app-with-javascript-and-local-storage-a884f4ea3ec


FUNDERINGAR: 

- när klickad - check, add klass -överstruken text. 
SAMTIDIGT här så vill jag att objektets isComplete = true? hur?

 - localStorage - hur får jag till att bocken håller i sig vid både uppdatering av sida + samtidigt vara kvar lägga till ny artikel?



- HUR tänka checked - isComplete: false, och sortera dem utifrån det? 


...

 - if checked - add class , if else return, vid checkbox + radiobuttons?  ibockad en färg, annars inte.