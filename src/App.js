import React, { useState } from 'react';
import './App.css';
import building from './assets/building.jpg';
import advent_logo from './assets/advent-health-logo.png';
import amber_waves_logo from './assets/amber-waves-logo.jpg';
import amy_krause_design from './assets/amy-krause-design.webp';
import auto_risk_logo from './assets/AutoRisk-Logo.png';
import cabin_securities_logo from './assets/Cabin-Securites-logo.jpg';
import carlson_financial_logo from './assets/carson-financial-logo.png';
import cci_accounting_logo from './assets/CCI-accounting-logo.jpeg';
import deckorators_logo from './assets/deckorators-logo.webp';
import deer_creek_logo from './assets/Deer-creek-logo.jpg';
import enable_care_logo from './assets/enable-care-logo.jpg';
import flexman_cpa_logo from './assets/flexman-cpa-logo.webp';
import geowealth_logo from './assets/geowealth-logo.png';
import haynes_logo from './assets/haynes-logo.webp';
import kimbrell_estate_planning_logo from './assets/Kimbrell-Estate-Planing-Logo.webp';
import kpm_logo from './assets/KPM-logo.png';
import legacy_investments_logo from './assets/legacy-investments-logo.png';
import lpl_financial_logo from './assets/LPL-finanacial-logo.jpg';
import midwest_hyperbaric_logo from './assets/midwest-hyperbaric-logo.png';
import pulse_electrolysis_logo from './assets/pulse-electrolysis-logo.png';
import prospera_logo from './assets/Prospera_Financial_Logo.jpg';
import rees_kincaid_logo from './assets/REES-KINCAID-STANFIELD-LOGO.jpg';
import roth_davies_logo from './assets/roth-davies-logo.png';
import topline_steel_logo from './assets/topline-steel-logo.png';

const dummyCompanies = [
  { id: 1, name: 'Advent Health', floor: '1st Floor', suite: '150', logo: advent_logo },
  { id: 20, name: 'Amber Waves Electrology', floor: '', suite: '' , logo: amber_waves_logo },
  { id: 2, name: 'Amy Krause Design, LLC.', floor: '2nd Floor', suite: '200' , logo: amy_krause_design },
  { id: 3, name: 'Auto Risk', floor: '2nd Floor', suite: '200' , logo: auto_risk_logo },
  { id: 4, name: 'Cabin Securities', floor: '2nd Floor', suite: '200' , logo: cabin_securities_logo },
  { id: 8, name: 'Deer Creek Behavioral Health', floor: '2nd Floor', suite: '200' , logo: deer_creek_logo },
  { id: 7, name: 'Deckorators', floor: '2nd Floor', suite: '200' , logo: deckorators_logo },
  { id: 9, name: 'Dezines LLC', floor: '2nd Floor', suite: '200'  },
  { id: 12, name: 'Flexman CPA', floor: '2nd Floor', suite: '200' , logo: flexman_cpa_logo },
  { id: 13, name: 'GeoWealth Management', floor: '2nd Floor', suite: '200' , logo: geowealth_logo },
  { id: 10, name: 'Haynes Health and Wellness', floor: '2nd Floor', suite: '200' , logo: haynes_logo },
  { id: 14, name: 'Kimbrell Estate Planning', floor: '1st Floor', suite: '100' , logo: kimbrell_estate_planning_logo },
  { id: 15, name: 'KPM Advantage', floor: '2nd Floor', suite: '200' , logo: kpm_logo },
  { id: 16, name: 'Legacy Investments', floor: '1st Floor', suite: '175' , logo: legacy_investments_logo },
  { id: 17, name: 'LPL Financial', floor: '2nd Floor', suite: '200' , logo: lpl_financial_logo },
  { id: 18, name: 'Midwest Hyperbaric', floor: '2nd Floor', suite: '200' , logo: midwest_hyperbaric_logo },
  { id: 21, name: 'Pulse Electrolysis', floor: '1st Floor', suite: '100' , logo: pulse_electrolysis_logo },
  { id: 22, name: 'Rees Kincaid Stanfield', floor: '1st Floor', suite: '100' , logo: rees_kincaid_logo },
  { id: 24, name: 'Roth Davies LLC', floor: '2nd Floor', suite: '250' , logo: roth_davies_logo },
  { id: 5, name: 'Carlson Financial', floor: '2nd Floor', suite: '200' , logo: carlson_financial_logo },
  { id: 6, name: 'CCI Accounting', floor: '2nd Floor', suite: '200' , logo: cci_accounting_logo },
  { id: 11, name: 'Enable Care LLC', floor: '2nd Floor', suite: '200' , logo: enable_care_logo },
  { id: 19, name: 'Prospera Financial Advisors', floor: '1st Floor', suite: '100' , logo: prospera_logo },
  { id: 23, name: 'Topline Steel', floor: '2nd Floor', suite: '200' , logo: topline_steel_logo },
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
            <img src={company.logo} alt={`${company.name} logo`} className="company-logo" />
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
