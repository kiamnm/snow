import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "./Test.css"
export default function TestBox() {
  const [data, setData] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [modifyMinPrice, setModifyMinPrice] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api1.arzparz.com/api/currency/detail/1/1"
        );
        const parseResponse = await response.json();
        const rowData = parseResponse.data;
        const mainData = rowData.all_prices;

        setData(mainData);

        const min = Math.min(...mainData.map((item) => item.price));
        const max = Math.max(...mainData.map((item) => item.price));
        const modifiedMin = min - (max - min);

        setMinPrice(min);
        setMaxPrice(max);
        setModifyMinPrice(modifiedMin);
      } catch (error) {
        console.error("خطا در دریافت داده‌ها:", error);
      }
    };

    getData();
  }, []);

  return (
    <div
    className="rest"
      style={{
        width: "25%",
        height: "300px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* بالای باکس: لوگو و نوشته */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img
          src="https://via.placeholder.com/40"
          alt="Logo"
          style={{ height: "40px", width: "40px" }}
        />
        <span style={{ fontSize: "16px", fontWeight: "bold" }}>Dollar</span>
      </div>

      {/* قیمت در پایین باکس */}
      <div
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          color: "#333",
          textAlign: "center",
          zIndex: "2",
          marginBottom: "10px",
        }}
      >
        $ {maxPrice.toFixed(2)}
      </div>

      {/* نمودار */}
      {data && (
        <div className="yest"
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "50%",
            zIndex: "1",
          }}
        >
          <ResponsiveContainer width="120%" height="110%" className={"resm"} >
            <AreaChart data={data} >
              <Tooltip content={null} />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <XAxis dataKey="period" hide />
              <YAxis hide domain={[modifyMinPrice, maxPrice]} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
