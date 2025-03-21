
## Teorihandbok Backendutveckling och API:er del 1

**1. Beskriv skillnaden mellan frontend och backend.**

Skillnaden mellan front-end och back-end är helt enkelt, front-end är vad användarna vanligtvis interagerar med ett appprogram, saker som är visuella mest som ett program, en webbplats eller en telefonapp bland annat. Backend å andra sidan är saker som körs bakom mestadels mellan dessa mjukvaror och servrar där data och information hämtas och skickas

**2. Vad är Node.js? Vad används Node.js till?**

Node.js är en runtime-miljö där javascript kan beräknas utanför webbläsarna som förr i tiden då javascript lanserades. Den är byggd på krom v8-motor som ska användas.

**3. Vad erbjuder ramverket Express.js för backendutveckling i Javascript?**

Express.js-ramverket ställer in servern mellan backend och frontend, det hjälper till att ställa in routing, mellanprogram, HTTP-förfrågningar och svar, felhantering och säkerhetsfunktioner. Det hjälper till att smidiga integrationen med bibliotek för backend-utveckling i javascript 

**4. Beskriv vad som utmärker en relationsdatabas. Ge exempel utifrån den SQL-form du arbetat med under kursen (d.v.s MySQL, PostgreSQL etc)**

**5. Vad menas med "one-to-one", "one-to-many", "many-to-many" inom relationsdatabaser?**

 i relationsdatabaser hänvisar dessa termer till hur entiteter är relaterade till varandra. Dessa termer representeras vanligtvis med siffror eller tecken med visuella representationer av dessa enheter i ett diagram. one-to-one  betyder att endast minst en och maximalt av en av varje entitet är relaterade till varandra, där som one-to-many representerar att en entity kan ha minst en till obegränsat antal av den entitet som den relaterar till och slutligen, många-till-många representerar var och en av enheterna kan ha många av varandra.

**6. Vad är fördelen med att utveckla ett API för backend?**

Fördelen med att utveckla ett API för backend är att det tillåter olika applikationer och tjänster att kommunicera med varandra, oavsett vilket programmeringsspråk eller plattform de använder. Det ger flexibilitet, återanvändbarhet och gör det lättare att bygga och skala system.

**7. Vad innebär routing?**

Routing innebär att definiera hur en webbtjänst eller API-hanterare inkommande förfrågning baseras på URL:er och HTTP-metoder (t.ex. GET, POST). Det innebär att skapa regler för vilka funktioner eller resurser som ska anropas när användare besöker en viss adress på servern.

**9. Vad är REST?**

REST (Representational State Transfer) är en arkitektonisk stil för att designa nätverksanslutna applikationer. Den förlitar sig på tillståndslös kommunikation och använder vanliga HTTP-metoder (som GET, POST, PUT, DELETE) för att interagera med resurser (som data) som identifieras av URL.

Enkelt uttryckt gör REST det enkelt för olika programvarusystem att kommunicera över webben genom att använda vanliga HTTP-förfrågningar för att hantera resurser.

**10. Vilka kriterier ska uppfyllas för att ett API ska anses vara RESTful? Redogör enligt Richardson Maturity Model.**

**11. . Vad är en HTTP-statuskod? Beskriv några av de viktigaste.**

 En HTTP-statuskod är ett nummer som skickas av en server för att indikera resultatet av en begäran från en klient (t.ex. webbläsare eller API). Här är några av de viktigaste statuskoderna:
 
|Status Code| Beskriv  |
|--|--|
| 200 OK | Begäran har lyckats, och servern har returnerat ett svar.  |
| 201 Created | Begäran har lyckats, och en ny resurs har skapats (t.ex. när du skapar ett nytt objekt via en POST-begäran).  |
| 400 Bad Request| Servern kan inte bearbeta begäran på grund av felaktig syntax eller ogiltiga data.  |
| 401 Unauthorized | Begäran kräver autentisering (t.ex. användarnamn och lösenord).  |
| 200 OK | Begäran har lyckats, och servern har returnerat ett svar.  |
| 404 Not Found | Begäran har lyckats, och servern har returnerat ett svar.  |
| 500 Internal Server Error | Ett generellt serverfel har inträffat, och servern kan inte hantera begäran.  |


**13. Vad är CORS? Hur kan man sätta olika inställningar i CORS i Express?**