import "../styles/AccountsFinance.css";

const AccountsFinance = () => {
  return (
    <section id="accounts-finance" className="accounts">
      <div className="accounts-container">
        {/* Title */}
        <h1 className="accounts-title">Accounts & Finance Automation</h1>

        {/* Content */}
        <div className="accounts-list">
          <div className="accounts-item">
            <span>01</span>
            <p>
              <strong>Expense tracking & approvals</strong> – Automate financial
              processes for efficiency.
            </p>
          </div>

          <div className="accounts-item">
            <span>02</span>
            <p>
              <strong>Tax compliance & reporting</strong> – Ensure smooth tax
              filing and regulatory compliance.
            </p>
          </div>

          <div className="accounts-item">
            <span>03</span>
            <p>
              <strong>Real-time financial dashboards</strong> – Keep track of
              revenue, expenses, and profits easily.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="accounts-buttons">
          <button className="accounts-btn">Book For Demo</button>
          <button className="accounts-btn">Go To Home Page</button>
        </div>
      </div>
    </section>
  );
};

export default AccountsFinance;
