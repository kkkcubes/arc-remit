# ArcRemit 🚀

Realtime Ripple (XRPL) Powered Stablecoin Settlement Infrastructure

ArcRemit is a realtime blockchain remittance dashboard powered by the XRP Ledger (XRPL).  
It enables instant cross-border payments, live settlement tracking, realtime analytics, websocket-based transaction feeds, and XRPL explorer integration.

---

# 🌍 Features

## ✅ Realtime XRPL Integration

- Live XRPL blockchain connection
- Realtime ledger updates
- Instant payment settlement
- XRPL websocket streaming

---

## ⚡ Realtime Dashboard

- Live settlement monitoring
- Live validated ledger tracking
- Live transaction count
- Realtime wallet balance updates
- Blockchain network status

---

## 📊 Analytics Dashboard

- Live TPS monitoring
- Payment volume tracking
- Ledger growth tracking
- Realtime transaction analytics
- XRPL metrics dashboard

---

## 💸 Payments

- Send XRP payments instantly
- Realtime confirmation
- XRPL explorer verification
- Transaction success animations
- Live transaction feed

---

## 🔗 XRPL Explorer Integration

Transactions are automatically linked to:

https://livenet.xrpl.org/

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- Socket.IO Client
- Axios
- Recharts
- Framer Motion

---

## Backend

- Node.js
- Express.js
- XRPL.js
- Socket.IO
- dotenv

---

# 📂 Project Structure

```bash
arc-remit/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AnalyticsDashboard.jsx
│   │   │   ├── EventTicker.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── LiveActivity.jsx
│   │   │   ├── LiveDashboard.jsx
│   │   │   ├── MetricsGrid.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NetworkStatus.jsx
│   │   │   ├── RecentTransactions.jsx
│   │   │   ├── RealtimeCharts.jsx
│   │   │   ├── SenderWallet.jsx
│   │   │   ├── SendMoney.jsx
│   │   │   ├── SuccessModal.jsx
│   │   │   ├── SystemStatus.jsx
│   │   │   └── TransactionStatus.jsx
│   │   │
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── socket.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   │   └── xrplClient.js
│   │
│   ├── controllers/
│   │   ├── paymentController.js
│   │   ├── transactionController.js
│   │   └── xrplController.js
│   │
│   ├── routes/
│   │   ├── paymentRoutes.js
│   │   ├── transactionRoutes.js
│   │   └── xrplRoutes.js
│   │
│   ├── services/
│   │   └── rippleService.js
│   │
│   ├── data/
│   │   └── transactions.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

# 1. Clone Repository

```bash
git clone https://github.com/kkkcubes/arc-remit.git
```

---

# 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 3. Backend Setup

```bash
cd backend
npm install
node server.js
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 🔐 Environment Variables

Create:

```bash
backend/.env
```

Add:

```env
XRPL_SEED=YOUR_TESTNET_SECRET
PORT=5000
```

---

# 🧪 XRPL Test Wallet

Generate XRPL Testnet Wallet:

https://xrpl.org/xrp-testnet-faucet.html

---

# 📡 API Endpoints

## Send Payment

```http
POST /api/send
```

Request:

```json
{
  "destination": "rXXXXXXXXXXXXXXXX",
  "amount": 2
}
```

---

## Get Transactions

```http
GET /api/transactions
```

---

## Get Ledger Data

```http
GET /api/ledger
```

---

# 🔥 Realtime Features

## Socket.IO Events

### Transaction Broadcast

```js
socket.emit("newTransaction")
```

### Ledger Updates

```js
socket.emit("ledgerUpdate")
```

### Wallet Balance Updates

```js
socket.emit("walletUpdate")
```

---

# 📈 Live Features

- Realtime TPS graph
- Live payment volume graph
- Live ledger growth chart
- Live XRPL explorer links
- Live transaction feed
- Wallet balance synchronization
- Instant settlement verification

---

# 🖥️ Screenshots

## Dashboard

(Add screenshot here)

---

## Analytics

(Add screenshot here)

---

## Live Transactions

(Add screenshot here)

---

# 🚀 Future Improvements

- Multi-wallet support
- Stablecoin payments
- WalletConnect integration
- QR payments
- AI fraud detection
- Exchange rate conversion
- KYC onboarding
- Docker deployment
- AWS deployment
- Kubernetes scaling

---

# 🌐 XRPL Resources

## XRPL Official

https://xrpl.org/

## XRPL Explorer

https://livenet.xrpl.org/

## XRPL JS SDK

https://github.com/XRPLF/xrpl.js

---

# 👨‍💻 Author

KKKCUBES

Email:
kcube731@gmail.com

---

# ⭐ Why ArcRemit?

ArcRemit demonstrates:

- Realtime blockchain architecture
- XRPL integration
- Websocket engineering
- Modern React dashboards
- Fintech infrastructure systems
- Realtime analytics
- Production-style frontend/backend separation

---

# 📜 License

MIT License