import React, { useState } from 'react';
import './App.css';

const dummyCompanies = [
  { id: 1, name: 'Company A', floor: '', suite: '' },
  { id: 2, name: 'Company B', floor: '', suite: '' },
  { id: 3, name: 'Company C', floor: '', suite: '' },
  { id: 4, name: 'Company D', floor: '', suite: '' },
];

function CompanyList({ companies, onSelectCompany }) {
  return (
    <div className="company-list">
      <h2>Companies in the Building</h2>
      <ul>
        {companies.map((company) => (
          <li key={company.id} onClick={() => onSelectCompany(company)} className="company-item">
            {company.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CompanyModal({ selectedCompany, onClose }) {
  if (!selectedCompany) {
    return null; // Don't render anything if no company is selected
  }

  // Handle clicks on the modal background
  const handleBackgroundClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackgroundClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{selectedCompany.name}</h2>
        <p>Floor: {selectedCompany.floor || 'N/A'}</p>
        <p>Suite: {selectedCompany.suite || 'N/A'}</p>
      </div>
    </div>
  );
}

function App() {
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <div className="app-container">
      <CompanyList
        companies={dummyCompanies}
        onSelectCompany={(company) => setSelectedCompany(company)}
      />
      <CompanyModal
        selectedCompany={selectedCompany}
        onClose={() => setSelectedCompany(null)}
      />
    </div>
  );
}

export default App;
