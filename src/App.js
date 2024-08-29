import React, { useState } from 'react';
import './App.css';
import building from './assets/building.jpg';

const dummyCompanies = [
  { id: 1, name: 'Company A', floor: '', suite: '' },
  { id: 2, name: 'Company B', floor: '', suite: '' },
  // More companies...
];

const dummyPeople = [
  { id: 1, name: 'John Doe', title: 'Lawyer' },
  { id: 2, name: 'Jane Smith', title: 'Doctor' },
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
            {person.name} - {person.title}
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
          <p>Title: {selectedItem.title || 'N/A'}</p>
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
          <h1 className="header-title">Deer Creek Office</h1>
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
