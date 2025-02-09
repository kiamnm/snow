import React, { useState, useEffect } from "react";
import "./Itemsdatagrid.css";
import getallitemadmin from "../../../pages/adminpanel/utils/getallitemadmin";
import { ToastContainer, toast } from "react-toastify";
import Modalcomponent from "../modal/Modal";
import edititem from "../../../pages/adminpanel/utils/edititem";
import { Link } from "react-router-dom";

export default function Itemsdatagrid() {
  const [allitemadmin, setallitemadmin] = useState([]);
  const [isgetallpending, setisgetallpending] = useState(false);
  const [currentpage, setcurrentpage] = useState(1);
  const [rowsperpage, setrowsperpage] = useState(5);

  const [editid, seteditid] = useState(null);
  const [sortedit, setsortedit] = useState(null);
  const [mainedit, setmainedit] = useState(null);
  const [hideedit, sethideedit] = useState(null);
  
  const [textedit, settextedit] = useState(null);
  const [linkedit, setlinkedit] = useState(null);
  const [showsavemodal, setshowsavemodal] = useState(false);
  const [yeseditpending, setyeseditpending] = useState(false);

  useEffect(() => {
    getallitemadmin(setallitemadmin, setisgetallpending);
  }, []);

  const indexOfLastRow = currentpage * rowsperpage;
  const indexOfFirstRow = indexOfLastRow - rowsperpage;
  const currentdata =
    rowsperpage === "all"
      ? allitemadmin
      : allitemadmin.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages =
    rowsperpage === "all" ? 1 : Math.ceil(allitemadmin.length / rowsperpage);

  const handlePageChange = (pageNumber) => setcurrentpage(pageNumber);

  const handlerowsperpageChange = (e) => {
    setrowsperpage(e.target.value === "all" ? "all" : parseInt(e.target.value));
    setcurrentpage(1);
  };
  const notifysuccess = (msg) => {
    toast.success(msg);
  };
  const notifyfailed = (msg) => {
    toast.error(msg);
  };
  const handleclosesavemodal = () => {
    setshowsavemodal(false);
  };

  const handleclickedit = (item) => {
    seteditid(item.id);
    setsortedit(item.index_sort);
    setmainedit(item.is_main);
    sethideedit(item.is_hide);
    settextedit(item.text);
    
    setlinkedit(item.link);
  };

  const handleclickoksavemodal = async () => {
    
    const result = await edititem(
      editid,
      sortedit,
      mainedit,
      hideedit,
      
      textedit,
      linkedit,
      setyeseditpending
    );

    if (!result) {
      notifyfailed("item does not edited successfully");
    } else {
     
      setallitemadmin((prev) =>
        prev.map((item) =>
          item.id === editid
            ? {
                id: editid,
                logo: item.logo,
                unit: item.unit,
                name: item.name,
                type: item.type,
                index_sort: sortedit,
                is_main: mainedit,
                is_hide: hideedit,
                
                text: textedit,
                link: linkedit,
              }
            : item
        )
      );

      seteditid(null);
      setsortedit(null);
      setmainedit(null);
      sethideedit(null);
      settextedit(null);
      
      setlinkedit(null);
      notifysuccess("item edited successfully");

      seteditid(null);
    }
  };

  return (
    <div className="container ">
      <ToastContainer />
      <Modalcomponent
        modaltitle={"Accept edit ? "}
        modalbody={"Are you sure you want edit item?"}
        show={showsavemodal}
        handleclose={handleclosesavemodal}
        onokclick={handleclickoksavemodal}
        yespending={yeseditpending}
      ></Modalcomponent>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <select
          value={rowsperpage}
          onChange={handlerowsperpageChange}
          className="form-select w-auto cursor_pointer"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="all">All</option>
        </select>
      </div>

      {/* جدول */}
      <table className="table table-bordered table-striped ">
        <thead className=" text-center test">
          <tr className="">
            <th className="col-1">#</th>
            <th className="col-1" >ID</th>
            <th className="col-1">Logo</th>
            <th className="col-1">Unit</th>
            <th className="col-2">Name</th>
            <th className="col-1">Type</th>
            <th className="col-1">Sort</th>
            <th className="col-1">IsMain</th>
            <th className="col-1">Hidden</th>
            <th className="col-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentdata.map((item, index) => (
            <>
              <tr key={item.id} className="text-center align-middle">
                <td>
                  {rowsperpage === "all"
                    ? index + 1
                    : indexOfFirstRow + index + 1}
                </td>
                <td>{item.id}</td>
                <td>
                  <img
                    src={item.logo}
                    alt={item.name}
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>{item.unit}</td>
                <td>{item.name}</td>
                <td>
                  {item.type===1 && "Currency"}
                  {item.type===7 && "Gold"}
                  {item.type===3 && "Gold"}
                  {item.type===2 && "Crypto"}

                </td>
                <td>
                  {editid === item.id ? (
                    <input
                      className="w-75 edit-banner-input"
                      type="text"
                      value={sortedit}
                      onChange={(e) => setsortedit(e.target.value)}
                    />
                  ) : (
                    item.index_sort
                  )}
                </td>
                <td>
                  {editid === item.id ? (
                    <select
                      className="w-75 edit-banner-input cursor_pointer"
                      value={mainedit} // مقدار پیش‌فرض برابر با item.is_main
                      onChange={(e) => {
                        setmainedit(e.target.value);
                      }}
                    >
                      <option  value={0}>No</option>
                      <option  value={1}>Yes</option>
                    </select>
                  ) : item.is_main === 1 ? (
                    "Yes"
                  ) : (
                    "No"
                  )}
                </td>
                <td>
                  {editid === item.id ? (
                    <select
                      className="w-75 edit-banner-input cursor_pointer"
                      value={hideedit} // مقدار پیش‌فرض برابر با item.is_main
                      onChange={(e) => {
                        sethideedit(e.target.value);
                      }}
                    >
                      <option value={0}>No</option>
                      <option value={1}>Yes</option>
                    </select>
                  ) : item.is_hide === 1 ? (
                    "Yes"
                  ) : (
                    "No"
                  )}
                </td>

                <td>
                  {editid === item.id ? (
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => setshowsavemodal(true)}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => seteditid(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => handleclickedit(item)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-primary btn-sm me-2"
                        
                      >
                        <Link to="filter" className="delete_link_defult color_white ff_regular" >Filter</Link>
                      </button>
                    </div>
                  )}
                </td>
              </tr>
              {/* ردیف فرعی */}
              <tr className="bg-light">
                <td colSpan="11">
                  <div className="d-flex">
                    <strong className="me-3">Text:</strong>
                    {editid === item.id ? (
                      <input
                        type="text"
                        value={textedit}
                        onChange={(e) => settextedit(e.target.value)}
                        className="form-control"
                      />
                    ) : (
                      <div className="text-break">{item.text}</div>
                    )}
                  </div>
                  <div className="d-flex mt-3">
                    <strong className="me-3">Link:</strong>
                    {editid === item.id ? (
                      <input
                        type="text"
                        value={linkedit}
                        onChange={(e) => setlinkedit(e.target.value)}
                        className="form-control"
                      />
                    ) : (
                      <div className="text-break">{item.link}</div>
                    )}
                  </div>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>







      {/* صفحه‌بندی */}
      {rowsperpage !== "all" && (
        <div className="d-flex justify-content-center">
          <nav>
            <ul className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index + 1}
                  className={`page-item ${
                    currentpage === index + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
