Per includere la direttiva, scrivere:

    <feedback></feedback>

Al momento sono previsti solo 2 size del feedback "box" e "banner" che possono essere settati come attributo dell'elemento: 

    <feedback size="box/banner"></feedback>

La direttiva accetta un title (che definirà il titolo del feedback in caso lo shape sia box)

    <feedback title="lorem ipsum"></feedback>
  
La direttiva può accettare 4 tipi di colori / avvisi: "error, advice, success, info" che possono essere settati come attributo dell'elemento

    <feedback type="error/success/advice/info"></feedback>
 
La direttiva può accettare un testo dell'elemento che deve essere scritto all'interno dei tag 

    <feedback>lorem ipsum dolor docet...</feedback>


### TODO:
- svincolare il css
- svingolare il template html
