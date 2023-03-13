# opta
Övningssajt för att optimera en sajt helt. 

## Har jag inte gjort det här?
Du tittar på en lösning på blogg-uppgiften. Jag vill att alla ha samma kod att starta i för att kunna öva på optimering på ett bra sätt. 

Att använda bilder som är lagom stora är en mycket viktig del för att optimera sin sajt. Grundregeln är att skapa några olika versioner av varje bild beroende på storlek - tittar på du på en mobil så kommer bilden sällan vara mer än 600px bred medan en vanlig skärm ofta kan ha en bild på 1200px i bredd. Bilden på 600px är generellt 1/4 av den på 1200px och då verkar det ju dumt att ladda hem för mycket data. 

Vi utgår här från att bilderna redan har rätt bildförhållande, alltså förhållandet bredd-höjd, och att det vi behöver göra är att skapa omskalade versioner i moderna filformat.

## Steg 1. Vilka storlekar behövs?
Vi måste veta vad vi behöver innan vi sätter igång med programmeringen

Skapa en enkel textfil där du skriver ned vilka breakpoints du har och vilka bilder som ska vara i vilka bredder på dem. 

Exempelvis
pic10.jpg
780px (mobil)
550px (1200+)
1120px (platta)


## Steg 2. Skapa omskalade kopior med sharp.js
Du kan givetvis skapa bilderna manuellt med ett bildbehandlingsprogram men nu kan vi ju programmera så låt oss göra det med kod istället. Fördelen med det är att du kan lägga till fler bilder i en mapp och sedan köra programmet igen och då skapa nya versioner av alla bilder som finns i en viss mapp. 

Se till nodejs är installerat och då gärna den senaste LTS-versionen. 

Använd npm för att installera sharp.js
https://sharp.pixelplumbing.com/install




## Steg 3. Använda olika bildstorlekar med picture

- Använd picture-taggen
- Skriv source-taggar från minsta till största
- Avsluta med en vanlig img för äldre browsers

https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images




## Resurser

