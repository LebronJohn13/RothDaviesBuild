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

import alex_hammersley_por from './assets/portraits/alex_hammersley.png';
import amber_stevens_por from './assets/portraits/amber_stevens.png';
import amy_krause_por from './assets/portraits/amy_krause.jpg';
//import abbas_haideri_por from './assets/portraits/abbas_haideri.jpg';
import brandan_davies_por from './assets/portraits/brandan_davies.webp';
import brian_candler_por from './assets/portraits/brian_candler.jpeg';
import brenda_black_por from './assets/portraits/brenda_black.jpg';
//import charlie_isaacson_por from './assets/portraits/charlie_isaacson.jpg';
import cody_schwope_por from './assets/portraits/cody_schwope.jpeg';
import collin_huerter_por from './assets/portraits/collin_huerter.webp';
import david_baker_por from './assets/portraits/david_baker.jpg';
import david_goeglein_por from './assets/portraits/david_goeglein.jpg';
import dr_victoria_haynes_por from './assets/portraits/victoria_haynes.jpeg';
import jack_hannah_por from './assets/portraits/jack_hannah.png';
import jason_roth_por from './assets/portraits/jason_roth.jpeg';
import jeff_mize_por from './assets/portraits/jeff_mize.jpeg';
import jennifer_brown_por from './assets/portraits/jennifer_brown.webp';
//import jim_flexman_por from './assets/portraits/jim_flexman.jpg';
//import jimmy_flexman_por from './assets/portraits/jimmy_flexman.jpg';
import jonathan_brobst_por from './assets/portraits/jonathon_brobst.png';
import jon_stanfield_por from './assets/portraits/jon_stanfield.jpg';
//import julie_kincaid_por from './assets/portraits/julie_kincaid.jpg';
import kassandra_johns_por from './assets/portraits/kassandra_johns.webp';
//import landon_tarvin_por from './assets/portraits/landon_tarvin.jpg';
import lauren_fields_por from './assets/portraits/lauren_fields.webp';
import lisa_blue_por from './assets/portraits/lisa_blue_por.jpeg';
import matthew_swan_por from './assets/portraits/matthew_swan.webp';
import nathalie_cabensag_por from './assets/portraits/nathalie_cabensag.jpeg';
import pat_ryan_por from './assets/portraits/pat_ryan.jpg';
//import robert_dieterle_por from './assets/portraits/robert_dieterle.jpg';
//import scott_swimmer_por from './assets/portraits/scott_swimmer.jpg';
import silverus_kimeli_por from './assets/portraits/silverus_kimeli.jpg';
import terry_rees_por from './assets/portraits/terry_rees.jpg';
import tiffany_hamm_por from './assets/portraits/tiffany_hamm.jpg';
import zach_thomas_por from './assets/portraits/zach_thomas.webp';

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
  { id: 1, name: 'Jennifer Brown, MD', company: 'Advent Health' , floor: '1st Floor', suite: '150', portrait: jennifer_brown_por},
  { id: 2, name: 'Matthew Swan, MD', company: 'Advent Health' , floor: '1st Floor', suite: '150', portrait: matthew_swan_por},
  { id: 3, name: 'Kassandra Johns, APRN', company: 'Advent Health' , floor: '1st Floor', suite: '150', portrait: kassandra_johns_por},
  { id: 4, name: 'Amy Krause', company: 'Amy Krause Design LLC' , floor: '2nd Floor', suite: '200', portrait: amy_krause_por},
  { id: 5, name: 'Scott Swimmer', company: 'Auto Risk' , floor: '2nd Floor', suite: '200', portrait: ''},
  { id: 6, name: 'Brian Candler', company: 'Cabin Securities' , floor: '2nd Floor', suite: '200', portrait: brian_candler_por},
  { id: 7, name: 'Jonathan Brobst', company: 'Carlson Finanical' , floor: '2nd Floor', suite: '200', portrait: jonathan_brobst_por},
  { id: 8, name: 'Alex Hammersley', company: 'Carlson Finanical' , floor: '2nd Floor', suite: '200', portrait: alex_hammersley_por},
  { id: 9, name: 'Charlie Isaacson', company: 'CCI Accounting' , floor: '2nd Floor', suite: '200', portrait: ''},
  { id: 10, name: 'Landon Tarvin', company: 'Deckorators' , floor: '2nd Floor', suite: '200', portrait: ''},
  { id: 11, name: 'Silverus Kimeli', company: 'Deer Creek Behavioral Health' , floor: '2nd Floor', suite: '200', portrait: silverus_kimeli_por},
  { id: 12, name: 'Abbas Haideri', company: 'Dezines LLC' , floor: '2nd Floor', suite: '200', portrait: ''},
  { id: 13, name: 'Dr. Victoria Haynes', company: 'Haynes Health and Wellness' , floor: '2nd Floor', suite: '200', portrait: dr_victoria_haynes_por},
  { id: 14, name: 'Robert Dieterle', company: 'Enable Care LLC' , floor: '2nd Floor', suite: '200', portrait: ''},
  { id: 15, name: 'Jim Flexman', company: 'Flexman CPA' , floor: '2nd Floor', suite: '200', portrait: ''},
  { id: 16, name: 'Jimmy Flexman', company: 'Flexman CPA' , floor: '2nd Floor', suite: '200', portrait: ''},
  { id: 17, name: 'Jack Hannah', company: 'GeoWealth Management', floor: '2nd Floor', suite: '200' , portrait: jack_hannah_por},
  { id: 18, name: 'Jessica Kimbrell', company: 'Kimbrell Estate Planning' , floor: '1st Floor', suite: '100', portrait: ''},
  { id: 19, name: 'Julie Kincaid', company: 'KPM Advantage' , floor: '2nd Floor', suite: '200', portrait: ''},
  { id: 20, name: 'Brenda Black', company: 'Legacy Investments' , floor: '1st Floor', suite: '175', portrait: brenda_black_por},
  { id: 21, name: 'David Baker', company: 'Legacy Investments' , floor: '1st Floor', suite: '175', portrait: david_baker_por},
  { id: 22, name: 'David Goeglein', company: 'Legacy Investments' , floor: '1st Floor', suite: '175', portrait: david_goeglein_por},
  { id: 23, name: 'Nathalie Cabensag', company: 'Legacy Investments' , floor: '1st Floor', suite: '175', portrait: nathalie_cabensag_por},
  { id: 24, name: 'Brain Wall', company: 'LPL Financial' , floor: '2nd Floor', suite: '200', portrait: ''},
  { id: 25, name: 'Jeff Mize', company: 'Midwest Hyperbaric' , floor: '2nd Floor', suite: '200', portrait: jeff_mize_por},
  { id: 26, name: 'Tiffany Hamm', company: 'Midwest Hyperbaric' , floor: '2nd Floor', suite: '200', portrait: tiffany_hamm_por},
  { id: 27, name: 'Pat Ryan', company: 'Prospera Financial Advisors' , floor: '1st Floor', suite: '100', portrait: pat_ryan_por},
  { id: 28, name: 'Amber Stevens', company: 'Amber Waves Electrology' , floor: '', suite: '' , portrait: amber_stevens_por},
  { id: 29, name: 'Lisa Blue', company: 'Pulse Electrolysis' , floor: '1st Floor', suite: '100', portrait: lisa_blue_por},
  { id: 30, name: 'Jon Stanfield', company: 'Rees Kincaid Stanfield' , floor: '1st Floor', suite: '100', portrait: jon_stanfield_por},
  { id: 31, name: 'Terry Rees', company: 'Rees Kincaid Stanfield' , floor: '1st Floor', suite: '100', portrait: terry_rees_por},
  { id: 32, name: 'Cody Schwope', company: 'Topline Steel' , floor: '2nd Floor', suite: '200', portrait: cody_schwope_por},
  { id: 33, name: 'Brandan Davies', company: 'Roth Davies LLC' , floor: '2nd Floor', suite: '250', portrait: brandan_davies_por},
  { id: 34, name: 'Jason Roth', company: 'Roth Davies LLC' , floor: '2nd Floor', suite: '250', portrait: jason_roth_por},
  { id: 35, name: 'Collin Huerter', company: 'Roth Davies LLC' , floor: '2nd Floor', suite: '250', portrait: collin_huerter_por},
  { id: 36, name: 'Lauren Fields', company: 'Roth Davies LLC' , floor: '2nd Floor', suite: '250', portrait: lauren_fields_por},
  { id: 37, name: 'Zach Thomas', company: 'Roth Davies LLC' , floor: '2nd Floor', suite: '250', portrait: zach_thomas_por},

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
    <div className="person-list">
      <BackButton onBack={onBack} />
      <h2>People in the Building</h2>
      <div className="person-cards-container">
        {people.map((person) => (
          <div key={person.id} onClick={() => onSelectPerson(person)} className="person-card">
            <img
              src={person.portrait || 'default-portrait.jpg'} // Fallback to default portrait if not available
              alt={`${person.name}'s portrait`}
              className="person-card-portrait"
            />
            <div className="person-card-name">{person.name}</div>
          </div>
        ))}
      </div>
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
          <>
          <p>Floor: {selectedItem.floor || 'N/A'}</p>
          <p>Suite: {selectedItem.suite || 'N/A'}</p>
          </>
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
