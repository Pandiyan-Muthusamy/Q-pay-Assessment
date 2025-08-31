import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ apiUrl, columns, children }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchPage = async (page = 0) => {
    setLoading(true);
    try {
      const res = await axios.get(`${apiUrl}?service_id=${111}&page=${page}`);
      const result = res.data || [];
      if (result.data.data) {
        setData(result.data.data || []);
        setTotal(result.data.totalPages || 0);
        setPage(page);
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPage(page);
  }, [apiUrl]);

  return (
    <DataContext.Provider
      value={{ data, page, total, loading, fetchPage, columns }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
