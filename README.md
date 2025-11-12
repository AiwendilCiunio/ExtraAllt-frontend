📈 Stocksimulator – Frontend
Det här är frontänds‑delen av Stocksimulator, en applikation som simulerar aktiemarknaden i realtid.
Användaren kan följa påhittade bolag, köpa aktier och se prisförändringar uppdateras direkt via WebSocket.

🧠 Tekniker
Angular 20 (med Angular Material och CDK)
TypeScript / RxJS / Zone.js
@stomp/stompjs för realtidsdata via WebSocket
@stripe/stripe‑js för betalningsflöde via Stripe Checkout
🚀 Köra applikationen lokalt
Förutsättningar
Node.js 22.13.0
npm 11.2.0
En backend‑server som körs lokalt på http://localhost:8080
Steg för steg
Klona detta repo:
Bash

git clone <repo‑url>
cd stocksimulator-frontend
Installera beroenden:
Bash

npm install
Starta utvecklingsservern:
Bash

ng serve
Öppna webbläsaren på http://localhost:4200
Miljöinställningar
Under utveckling förutsätter frontend att backend finns på
http://localhost:8080.
Bas‑URL kan ändras i src/environments/environment.ts om det behövs.

🧱 Projektstruktur (huvuddelar)
Mapp	Innehåll
src/app/pages	Huvudsidor som Dashboard, Portfolio, Payment Success
src/app/services	API‑anrop, WebSocket‑klient, Stripe‑integration
src/environments	Konfiguration för utveckling och produktion
💡 Utvecklaranteckning
Vid produktion byggs applikationen med:

Bash

ng build --configuration production
och utdata publiceras i
dist/stocksimulator-frontend/browser/.
