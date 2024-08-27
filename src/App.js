import React, { useState } from 'react';
import './App.css';

const dummyCompanies = [
  { id: 1, name: 'Company A', floor: '', suite: '' },
  { id: 2, name: 'Company B', floor: '', suite: '' },
  { id: 3, name: 'Company C', floor: '', suite: '' },
  { id: 4, name: 'Company D', floor: '', suite: '' },
  { id: 5, name: 'Company E', floor: '', suite: '' },
  { id: 6, name: 'Company F', floor: '', suite: '' },
  { id: 7, name: 'Company G', floor: '', suite: '' },
  { id: 8, name: 'Company H', floor: '', suite: '' },
  { id: 9, name: 'Company I', floor: '', suite: '' },
  { id: 10, name: 'Company J', floor: '', suite: '' },
  { id: 11, name: 'Company K', floor: '', suite: '' },
  { id: 12, name: 'Company L', floor: '', suite: '' },
  { id: 13, name: 'Company M', floor: '', suite: '' },
  { id: 14, name: 'Company N', floor: '', suite: '' },
  { id: 15, name: 'Company O', floor: '', suite: '' },
  { id: 16, name: 'Company P', floor: '', suite: '' },
  { id: 17, name: 'Company Q', floor: '', suite: '' },
  { id: 18, name: 'Company R', floor: '', suite: '' },
  { id: 19, name: 'Company S', floor: '', suite: '' },
  { id: 20, name: 'Company T', floor: '', suite: '' },
  { id: 21, name: 'Company U', floor: '', suite: '' },
  { id: 22, name: 'Company V', floor: '', suite: '' },
  { id: 23, name: 'Company W', floor: '', suite: '' },
  { id: 24, name: 'Company X', floor: '', suite: '' },
  { id: 25, name: 'Company Y', floor: '', suite: '' },
  { id: 26, name: 'Company Z', floor: '', suite: '' },

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
