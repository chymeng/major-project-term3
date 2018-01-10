import React from "react";
import { Link } from "react-router-dom";

function SideBar({ signedIn }) {
   return (
      <nav className="col-sm-3 col-md-2 bg-light sidebar" style={{borderRight: "1px solid lightgray"}}>
         <ul className="nav nav-pills flex-column">
            <li className="nav-item" style={{display: "inline"}}>
               <Link to="/new-sales" className="nav-link">
                  New Sales
               </Link>
            </li>

            <li className="nav-item">
               <Link
                  to="#reportSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="nav-link"
               >
                  Report
               </Link>
               <ul className="collapse list-unstyled" id="reportSubmenu">
                  <li className="nav-item">
                     <Link to="/report-daily" className="nav-link ml-3">
                        Daily
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/report-weekly" className="nav-link ml-3">
                        Weekly
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/report-monthly" className="nav-link ml-3">
                        Monthly
                     </Link>
                  </li>
               </ul>
            </li>
            <li className="nav-item">
               <Link to="/sales" className="nav-link" >
                  Sales
               </Link>
            </li>
            <li className="nav-item">
               <Link to="/products" className="nav-link">
                  Products
               </Link>
            </li>
            <li className="nav-item">
               <Link to="/customers" className="nav-link">
                  Customers
               </Link>
            </li>
            {/* <li className="nav-item">
               <Link to="/tools" className="nav-link" style={{textDecoration: "line-through"}}>
                  Tools
               </Link>
            </li> */}
         </ul>
      </nav>
   );
}

export default SideBar;
