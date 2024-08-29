import React, { useState } from 'react';
import './App.css';
import building from './assets/building.jpg';

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
  // More companies...
];

const dummyPeople = [
  { id: 1, name: 'John Doe', company: 'Company A' },
  { id: 2, name: 'Jane Smith', company: 'Company B' },
  { id: 3, name: 'Alice Johnson', company: 'Company C' },
  // More people...
];

function LandingPage({ onSelectPage }) {
  return (
    <div className="landing-page">
      <h2>Are you here to see a company or a person?</h2>
      <div className="landing-buttons">
        <button onClick={() => onSelectPage('companies')}>See Companies</button>
        <button onClick={() => onSelectPage('people')}>See People</button>
      </div>
    </div>
  );
}

function BackButton({ onBack }) {
  return (
    <div className="back-button">
      <button onClick={onBack}>Back</button>
    </div>
  );
}

function CompanyList({ companies, onSelectCompany, onBack }) {
  return (
    <div className="company-list">
      <BackButton onBack={onBack} />
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

function PersonList({ people, onSelectPerson, onBack }) {
  return (
    <div className="company-list">
      <BackButton onBack={onBack} />
      <h2>People in the Building</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id} onClick={() => onSelectPerson(person)} className="company-item">
            {person.name} - {person.company}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Modal({ selectedItem, onClose, isCompany }) {
  if (!selectedItem) {
    return null;
  }

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
        <h2>{selectedItem.name}</h2>
        {isCompany ? (
          <>
            <p>Floor: {selectedItem.floor || 'N/A'}</p>
            <p>Suite: {selectedItem.suite || 'N/A'}</p>
          </>
        ) : (
          <p>Company: {selectedItem.company || 'N/A'}</p>
        )}
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState(null); // Track the current page (landing, companies, people)
  const [selectedItem, setSelectedItem] = useState(null); // Track the selected company or person

  const renderPage = () => {
    if (page === 'companies') {
      return (
        <CompanyList
          companies={dummyCompanies}
          onSelectCompany={(company) => setSelectedItem(company)}
          onBack={() => setPage(null)}
        />
      );
    } else if (page === 'people') {
      return (
        <PersonList
          people={dummyPeople}
          onSelectPerson={(person) => setSelectedItem(person)}
          onBack={() => setPage(null)}
        />
      );
    } else {
      return <LandingPage onSelectPage={setPage} />;
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <img src={building} alt="Building" className="building-image" />
        <div className="header-overlay">
          <h1 className="header-company">Deer Creek Office</h1>
        </div>
      </header>

      {renderPage()}

      <Modal
        selectedItem={selectedItem}
        onClose={() => setSelectedItem(null)}
        isCompany={page === 'companies'}
      />
    </div>
  );
}

export default App;
