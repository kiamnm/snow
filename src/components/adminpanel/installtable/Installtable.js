import React, { useState, useEffect } from 'react';
import './Installtable.css';

export default function Installtable({ userinstall }) {
  const [rowpertable, setrowpertable] = useState(15); // تعداد ردیف‌ها در هر جدول
  const [totalrow, settotalrow] = useState(0); // تعداد کل ردیف‌ها
  const [numtables, setnumtables] = useState(1); // تعداد جداول
  const [tables, settables] = useState([]); // داده‌ها برای جداول

  useEffect(() => {
    // کپی کردن داده‌ها و معکوس کردن آنها فقط یکبار
    const reversedData = [...userinstall].reverse();

    settotalrow(reversedData.length); // تعیین تعداد کل ردیف‌ها
    setnumtables(reversedData.length <= rowpertable ? 1 : Math.ceil(reversedData.length / rowpertable)); // تعیین تعداد جداول

    // تقسیم داده‌ها به جداول
    const newTables = [];
    for (let i = 0; i < numtables; i++) {
      const start = i * rowpertable;
      const end = start + rowpertable;
      newTables.push(reversedData.slice(start, end)); // داده‌ها را برای هر جدول تقسیم می‌کنیم
    }

    settables(newTables); // به روز رسانی جداول
  }, [userinstall, rowpertable, numtables]);

  return (
    <div className="install-table-component-container">
      <div className="container">
        {numtables === 1 ? (
          // اگر یک جدول است
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th className='text-center '>Date</th>
                <th className='text-center'>Total</th>
                <th className='text-center'>iOS</th>
                <th className='text-center'>Android</th>
              </tr>
            </thead>
            <tbody>
              {tables[0] &&
                tables[0].map((row, index) => (
                  <tr key={index}>
                    <td>{row.date}</td>
                    <td>{row.count}</td>
                    <td>{row.ios}</td>
                    <td>{row.android}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          // اگر چند جدول است
          <div className="row">
            {tables.map((tabledata, index) => (
              <div className="col-md-6" key={index}>
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th className='text-center'>Date</th>
                      <th className='text-center'>Total</th>
                      <th className='text-center'>iOS</th>
                      <th className='text-center'>Android</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tabledata.map((row, index) => (
                      <tr key={index}>
                        <td className='text-center'>{row.date}</td>
                        <td className='text-center'>{row.count}</td>
                        <td className='text-center'>{row.ios}</td>
                        <td className='text-center'>{row.android}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
