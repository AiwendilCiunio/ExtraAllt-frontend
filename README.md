# Stocksimulator – Frontend

Det här är frontänds‑delen av **Stocksimulator**, en applikation som simulerar aktiemarknaden i realtid.  
Användaren kan följa påhittade bolag, köpa aktier och se prisförändringar uppdateras direkt via WebSocket.

---

## Tekniker

- **Angular 20** (med Angular Material och CDK)  
- **TypeScript / RxJS / Zone.js**  
- **@stomp/stompjs** för realtidsdata via WebSocket  
- **@stripe/stripe‑js** för betalningsflöde via Stripe Checkout  

---

## Köra applikationen lokalt

### Förutsättningar
- **Node.js 22.13.0**
- **npm 11.2.0**
- En backend‑server som körs lokalt på `http://localhost:8080`

### Steg för steg
1. Klona detta repo:

    ```bash
    git clone https://github.com/AiwendilCiunio/ExtraAllt-frontend
    ```

2. Klona och starta backend repo (instruktioner finns i repos readme):

    ```bash
    git clone https://github.com/AiwendilCiunio/ExtraAllt-backend
    ```

2. Installera beroenden:

    ```bash
    npm install
    ```

3. Starta utvecklingsservern:

    ```bash
    ng serve
    ```

4. Öppna webbläsaren på **http://localhost:4200**

---

## Miljöinställningar

Under utveckling förutsätter frontend att backend finns på `http://localhost:8080`.  
Bas‑URL kan ändras i `src/environments/environment.ts` om det behövs.

---

## Utvecklaranteckning

Vid produktion byggs applikationen med:

```bash
ng build --configuration production

Utdata publiceras i dist/stocksimulator-frontend/browser/.