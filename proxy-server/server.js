process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const express = require("express");
const cors = require("cors");
const transactionRoutes = require("./routes/transactions");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/transactions", transactionRoutes);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Proxy server running on port ${PORT}`);
});
