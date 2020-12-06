import React from "react";
import { TiEye } from "react-icons/ti";
import { GoChecklist } from "react-icons/go";

function Dashboard() {
  return (
    <>
      <header className="is-flex-direction-row is-justify-content-flex-start columns py-5 has-background-grey">
        <a href="/dashboard" className="column is-3 is-size-3 has-text-white ml-3">Invoicing App</a>
        <nav className="column is-8 has-text-right">
          <a href="/signin" className="has-text-white is-size-4">
            Logout
          </a>
        </nav>
      </header>
      <div className="dashboard is-flex-direction-row is-justify-content-flex-start columns px-3">
        <aside className="aside-nav has-background-grey-dark column is-2">
          <ul className="has-text-white ">
            <li className="py-3">
              <TiEye className="mx-2" />
              DashBoard
            </li>
            <li className="py-3">
              <GoChecklist className="mx-2" />
              Invoices
            </li>
          </ul>
        </aside>
        <div className="invoice-body column is-12 panel">
          <form>
            <h1 className="is-size-4 has-text-weight-semibold panel-block py-5">
              Add New Invoice
            </h1>
            <div className="panel-block columns py-4">
              <h2 className="column is-2 has-text-weight-semibold ">
                Client Name
              </h2>
              <select className="column is-6 mt-2">
                <option>Select client</option>
                <option>Adidas</option>
                <option>Nike</option>
                <option>Puma</option>
              </select>
            </div>
            <div className="panel-block columns">
              <h4 className="column is-1">Invoice no</h4>
              <input type="text" className="column is-1" />
              <input
                type="number"
                className="column is-1 mx-2"
                placeholder="1"
              />
              <h4 className="column is-1 mx-2">Invoice Date</h4>
              <input type="date" className="px-2 py-2 mx-2" />
              <h4 className="column is-1 ml-2">Due Date</h4>
              <input type="date" className="px-2 py-2" />
            </div>
            <div className="panel-block">
              <h4 className="has-text-weight-semibold ">Invoice</h4> <br />
            </div>
            <div className="panel-block columns">
              <table className="table">
                <thead className="has-background-grey-dark">
                  <tr>
                    <th className="has-text-white">No</th>
                    <th className="has-text-white">Item Name</th>
                    <th className="has-text-white">Unit</th>
                    <th className="has-text-white">Quantity</th>
                    <th className="has-text-white">Price</th>
                    <th className="has-text-white">Discount(%)</th>
                    <th className="has-text-white">Tax</th>
                    <th className="has-text-white">Total</th>
                    <th className="has-text-white">Edit</th>
                    <th className="has-text-white">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td className="item-name-dropdown">
                      <select>
                        <option>Select item</option>
                        <option>Adidas SOAR running shoes</option>
                        <option>Nike running shoes</option>
                        <option>Puma running shoes</option>
                        <option>Adidas SOAR running shoes</option>
                      </select>
                    </td>
                    <td className="unit-dropdown">
                      <select>
                        <option>nos</option>
                        <option>kilogram</option>
                        <option>crates</option>
                        <option>dozens</option>
                      </select>
                    </td>
                    <td>
                      <input type="number" value="1" className="quantity" />
                    </td>
                    <td>
                      <input
                        type="number"
                        placeholder="Price"
                        className="price"
                      />
                    </td>
                    <td>
                      <input type="number" className="is-3 discount" />
                    </td>
                    <td className="tax">
                      <select>
                        <option>Service Tax 14%</option>
                      </select>
                    </td>
                    <td className="total">1650</td>
                    <td className="total">
                      <a href="##" className="is-info">
                        Edit
                      </a>
                    </td>
                    <td className="total has-text-danger">X</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="panel-blocks columns is-flex-direction-row is-justify-content-space-between ">
              <div className="payment-option columns column is-6 is-flex-direction-row is-justify-content-space-around">
                <h4 className="column is-4">Payment Options</h4>
                <select className="column is-8 my-0 mt-3 py-0 ">
                  <option>select payment option</option>
                  <option>UPI ID</option>
                  <option>Debit Card</option>
                  <option>Credit card</option>
                </select>
              </div>
              <div className="column is-6 has-text-weight-semibold">
                <div className="panel-block">
                  <h4>
                    Subtotal : ₹<span>0.00</span>
                  </h4>
                </div>
                <div className="panel-block">
                  <h4>
                    Service Tax : ₹<span>0.00</span>
                  </h4>
                </div>
                <div className="is-success panel-block">
                  <h4 className="has-text-success">
                    Total : ₹<span>0.00</span>{" "}
                  </h4>
                </div>
              </div>
            </div>
          </form>
        </div>
        <span className="panel-icon"></span>
      </div>
    </>
  );
}

export default Dashboard;
