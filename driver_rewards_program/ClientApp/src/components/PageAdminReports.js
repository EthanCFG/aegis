import React, { useState } from 'react';
import TableUserLogs from './TableUserLogs'
import NavBarAdmin from './NavBarAdmin';

function PageAdminReports () {

	const [listDriverSales, setListDriverSales] = useState()
	const [listSponsorSales, setListSponsorSales] = useState()
	const [listInvoices, setListInvoices] = useState()
	const [listAudits, setListAudits] = useState()

	const handleDriverSalesClick = () => {
		setListDriverSales(true);
		setListSponsorSales(false);
		setListInvoices(false);
		setListAudits(false);
	}

	const handleSponsorSalesClick = () => {
		setListDriverSales(false);
		setListSponsorSales(true);
		setListInvoices(false);
		setListAudits(false);
	}

	const handleInvoiceClick = () => {
		setListDriverSales(false);
		setListSponsorSales(false);
		setListInvoices(true);
		setListAudits(false);
	}

	const handleAuditClick = () => {
		setListDriverSales(false);
		setListSponsorSales(false);
		setListInvoices(false);
		setListAudits(true);
	}

    return (
      <div>
        <NavBarAdmin></NavBarAdmin>
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-9">
              <div class="notification is-white py-6 my-6">

                <section>
                  <div>
                    <div class="container">
                      <h1 class="title">
                        Admin Reports
                      </h1>
                    </div>
                  </div>
                </section>

								<div class="tabs is-centered is-boxed is-medium" style={{marginTop: 30}}>
									<ul>
										<li class={listDriverSales ? "is-active" : ""} onClick={() => handleDriverSalesClick()}>
											<a>
												<span><i class="fas fa-image" aria-hidden="true"></i></span>
												<span>Driver Sales</span>
											</a>
										</li>
										<li class={listSponsorSales ? "is-active" : ""} onClick={() => handleSponsorSalesClick()}>
											<a>
												<span><i class="fas fa-music" aria-hidden="true"></i></span>
												<span>Sponsor Sales</span>
											</a>
										</li>
										<li class={listInvoices ? "is-active" : ""} onClick={() => handleInvoiceClick()}>
											<a>
												<span><i class="fas fa-music" aria-hidden="true"></i></span>
												<span>Invoices</span>
											</a>
										</li>
										<li class={listAudits ? "is-active" : ""} onClick={() => handleAuditClick()}>
											<a>
												<span><i class="fas fa-music" aria-hidden="true"></i></span>
												<span>Audits</span>
											</a>
										</li>
									</ul>
								</div>

								<div class="columns">
                  {listDriverSales ? 
                  <div class="column is-6 py-6" style={{marginLeft: 110}}>
                    <p>Driver Sales</p>
                  </div> : null}
									{listSponsorSales ?
									<div class="column is-6 py-6" style={{marginLeft: 110}}>
										<p>Sponsor Sales</p>
									</div> : null}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PageAdminReports;