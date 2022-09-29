Målet med min hemsida var att bygga en filmbaserad hemsida med betyg och trailers vilket jag kan säga att jag 
lyckats med helt och hållet. 

Jag började med att designa hemsidan då jag inte hittade någon fungerande api. Jag lyckades få till en rätt bra design och skapade en dark mode switch som jag fixa med i javascript. När jag kände att jag hade en okej design fick jag en rekommenderad 
api som heter movieglu. Denna api hade mycket problem i alla fall i mina försök att implementera den och jag sökte därför vidare 
efter andra apier och hittade omdb som har det mesta från imdbs databas. 

Jag gjorde en sökruta via ett input element och fixade så att javascript tog in det man sökte som ett värde. Vid det här laget hade jag en onkeyup attribut som jag sedan skulle ta bort och därför limita jag hur lite man kunde söka för, för att limita apirequests. 

Jag fetchade apin i en async funktion för att kunna använda await och skickade vidare datan ifrån apin genom alla kommande funktioner. I displayMov så displayade jag ut namn, år och poster för alla filmer med samma eller liknande värde till det man söker på och loadmovdet kollade om man klickat på en av posterna(eller namn och år) för att sedan skicka vidare detaljer av den filmen till dismov som skulle displaya alla information av filmen. Vad jag märkte vid detta lager var att apin inte hade någon trailer. 

Jag försökte söka runt på apis med trailers men kom inte fram till något. Sen kom jag på att man kan använda youtubes api och bara lägga till "trailer" som sökord efter filmnamnet och därför gick jag in på cloud.google och hämtade en api key för youtube och satt in apin i javascript koden. Jag placerade in apin i dismov men märkte att sättet jag hade hämtat api på innan inte funkade i funktionen och det tog mig ett tag att lista ut men jag kom sedan på att jag bara behövde sätta async framför funktionen. Jag använde display.Title och display.Year kombinerat med "trailer" för att hitta rätt trailer för just filmen eller spelet man klickat in sig på. 

Efter detta var javascript koden och den mesta html koden klar så nu fokuserade jag bara på designen som var helt röd och lite kaotisk i min åsikt. Jag gjorde om allting till mörka färger som inte skar sig med varandra och jag gjorde om lightmode till en helt vit design med svarta kanter och text.

I sammanfattning gjorde jag allt jag ville få gjort i detta projekt förutom kanske att ha en nav som skulle kunna sortera filmer eller något liknande men rent generellt gick detta projekt bra och jag lärde mig bland annat hur man hämtar api via fetch, vad async och await är och hur dem fungerar och blev även bättre på att förstå apis rent generellt. 