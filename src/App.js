import React, { useState } from 'react';
import './App.css';
import building from './assets/building.jpg';

const dummyCompanies = [
  { id: 1, name: 'Advent Health', floor: '1st Floor', suite: '150' },
  { id: 20, name: 'Amber Waves Electrology', floor: '', suite: '' },
  { id: 2, name: 'Amy Krause Design, LLC.', floor: '2nd Floor', suite: '200' },
  { id: 3, name: 'Auto Risk', floor: '2nd Floor', suite: '200' },
  { id: 4, name: 'Cabin Securities', floor: '2nd Floor', suite: '200' },
  { id: 8, name: 'Deer Creek Behavioral Health', floor: '2nd Floor', suite: '200' },
  { id: 7, name: 'Deckorators', floor: '2nd Floor', suite: '200' },
  { id: 9, name: 'Dezines LLC', floor: '2nd Floor', suite: '200' },
  { id: 12, name: 'Flexman CPA', floor: '2nd Floor', suite: '200' },
  { id: 13, name: 'GeoWealth Management', floor: '2nd Floor', suite: '200' },
  { id: 10, name: 'Haynes Health and Wellness', floor: '2nd Floor', suite: '200' },
  { id: 14, name: 'Kimbrell Estate Planning', floor: '1st Floor', suite: '100' },
  { id: 15, name: 'KPM Advantage', floor: '2nd Floor', suite: '200' },
  { id: 16, name: 'Legacy Investments', floor: '1st Floor', suite: '175' },
  { id: 17, name: 'LPL Financial', floor: '2nd Floor', suite: '200' },
  { id: 18, name: 'Midwest Hyperbaric', floor: '2nd Floor', suite: '200' },
  { id: 21, name: 'Pulse Electrolysis', floor: '1st Floor', suite: '100' },
  { id: 22, name: 'Rees Kincaid Stanfield', floor: '1st Floor', suite: '100' },
  { id: 24, name: 'Roth Davies LLC', floor: '2nd Floor', suite: '250' },
  { id: 5, name: 'Carlson Financial', floor: '2nd Floor', suite: '200' },
  { id: 6, name: 'CCI Accounting', floor: '2nd Floor', suite: '200' },
  { id: 11, name: 'Enable Care LLC', floor: '2nd Floor', suite: '200' },
  { id: 19, name: 'Prospera Financial Advisors', floor: '1st Floor', suite: '100' },
  { id: 23, name: 'Topline Steel', floor: '2nd Floor', suite: '200' },
  // More companies...
].sort((a, b) => a.name.localeCompare(b.name));

const dummyPeople = [
  { id: 1, name: 'Jennifer Brown, MD', company: 'Advent Health' },
  { id: 2, name: 'Matthew Swan, MD', company: 'Advent Health' },
  { id: 3, name: 'Kassandra Johns, APRN', company: 'Advent Health' },
  { id: 4, name: 'Amy Krause', company: 'Amy Krause Design LLC' },
  { id: 5, name: 'Scott Swimmer', company: 'Auto Risk' },
  { id: 6, name: 'Brian Candler', company: 'Cabin Securities' },
  { id: 7, name: 'Jonathan Brobst', company: 'Carlson Finanical' },
  { id: 8, name: 'Alex Hammersley', company: 'Carlson Finanical' },
  { id: 9, name: 'Charlie Isaacson', company: 'CCI Accounting' },
  { id: 10, name: 'Landon Tarvin', company: 'Deckorators' },
  { id: 11, name: 'Silverus Kimeli', company: 'Deer Creek Behavioral Health' },
  { id: 12, name: 'Abbas Haideri', company: 'Dezines LLC' },
  { id: 13, name: 'Dr. Victoria Haynes', company: 'Haynes Health and Wellness' },
  { id: 14, name: 'Robert Dieterle', company: 'Enable Care LLC' },
  { id: 15, name: 'Jim Flexman', company: 'Flexman CPA' },
  { id: 16, name: 'Jimmy Flexman', company: 'Flexman CPA' },
  { id: 17, name: 'Jack Hannah', company: 'GeoWealth Management'},
  { id: 18, name: 'Jessica Kimbrell', company: 'Kimbrell Estate Planning' },
  { id: 19, name: 'Julie Kincaid', company: 'KPM Advantage' },
  { id: 20, name: 'Brenda Black', company: 'Legacy Investments' },
  { id: 21, name: 'David Baker', company: 'Legacy Investments' },
  { id: 22, name: 'David Goeglein', company: 'Legacy Investments' },
  { id: 23, name: 'Nathalie Cabensag', company: 'Legacy Investments' },
  { id: 24, name: 'Brain Wall', company: 'LPL Financial' },
  { id: 25, name: 'Jeff Mize', company: 'Midwest Hyperbaric' },
  { id: 26, name: 'Tiffany Hamm', company: 'Midwest Hyperbaric' },
  { id: 27, name: 'Pat Ryan', company: 'Prospera Financial Advisors' },
  { id: 28, name: 'Amber Stevens', company: 'Amber Waves Electrology' },
  { id: 29, name: 'Lisa Blue', company: 'Pulse Electrolysis' },
  { id: 30, name: 'Jon Stanfield', company: 'Rees Kincaid Stanfield' },
  { id: 31, name: 'Terry Rees', company: 'Rees Kincaid Stanfield' },
  { id: 32, name: 'Cody Schwope', company: 'Topline Steel' },
  { id: 33, name: 'Brandan Davies', company: 'Roth Davies LLC' },
  { id: 34, name: 'Jason Roth', company: 'Roth Davies LLC' },
  { id: 35, name: 'Collin Huerter', company: 'Roth Davies LLC' },
  { id: 36, name: 'Lauren Fields', company: 'Roth Davies LLC' },
  { id: 37, name: 'Zach Thomas', company: 'Roth Davies LLC' },

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
