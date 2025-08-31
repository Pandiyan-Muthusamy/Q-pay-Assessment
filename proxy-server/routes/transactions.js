const express = require("express");
const axios = require("axios");
const https = require("https");
const { API_URL, TOKEN } = require("../config/apiConfig");

const router = express.Router();

const axiosInstance = axios.create({
  baseURL: API_URL,
  httpsAgent: new (require("https").Agent)({
    rejectUnauthorized: false,
  }),
});

router.get("/", async (req, res) => {
  try {
    const { service_id, page } = req.query;
    const response = await axiosInstance.get(`/transaction_history`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      params: { service_id, page },
    });
    res.json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.error("Proxy Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch transactions",
      details: error.response?.data || error.message,
    });
  }
});

module.exports = router;
