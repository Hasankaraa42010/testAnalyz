import React, { useState, useEffect } from 'react';
import './FormPage.css'; // CSS dosyasını import ettik

const FormPage = () => {
  const [activeTab, setActiveTab] = useState('documentData');
  const [isTableDataSubmitted, setIsTableDataSubmitted] = useState(false);

  const handleTabClick = (tabName) => {
    if (!isTableDataSubmitted && tabName !== 'documentData') {
      alert('Öncelikle "Doküman Bilgileri" bölümünü doldurup göndermelisiniz.');
      return;
    }
    setActiveTab(tabName);
  };

  return (
    <div className="container">
      <h2>Form Bölümleri</h2>

      {/* Sekme Başlıkları */}
      <div className="tab-header">
        <button
          className={activeTab === 'documentData' ? 'active-tab' : 'tab'}
          onClick={() => handleTabClick('documentData')}
        >
          Doküman Bilgileri
        </button>
        <button
          className={activeTab === 'attachedDocuments' ? 'active-tab' : 'tab'}
          onClick={() => handleTabClick('attachedDocuments')}
        >
          Ekli Dokümanlar
        </button>
        <button
          className={activeTab === 'personalInfo' ? 'active-tab' : 'tab'}
          onClick={() => handleTabClick('personalInfo')}
        >
          Kişisel Bilgiler
        </button>
      </div>

      {/* Sekme İçerikleri */}
      <div className="tab-content">
        {activeTab === 'documentData' && (
          <DocumentData onSubmit={() => setIsTableDataSubmitted(true)} />
        )}
        {activeTab === 'attachedDocuments' && <AttachedDocuments />}
        {activeTab === 'personalInfo' && <PersonalInfo />}
      </div>
    </div>
  );
};

const DocumentData = ({ onSubmit }) => {
  const [errors, setErrors] = useState({});
  const [errorMessages, setErrorMessages] = useState({});
  const [country, setCountry] = useState('');
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newErrors = {};
    const newErrorMessages = {};

    // Validation
    if (!formData.get('documentName')) {
      newErrors.documentName = true;
      newErrorMessages.documentName = 'Döküman İsmi alanı zorunludur';
    }
    if (country && !formData.get('city')) {
      newErrors.city = true;
      newErrorMessages.city = 'Şehir, ülke seçildiyse zorunludur';
    }
    if (!formData.get('date')) {
      newErrors.date = true;
      newErrorMessages.date = 'Tarih alanı zorunludur';
    }

    setErrors(newErrors);
    setErrorMessages(newErrorMessages);

    if (Object.keys(newErrors).length === 0) {
      onSubmit();
      alert('Doküman Bilgileri başarıyla gönderildi!');
    }
  };

  useEffect(() => {
    if (country === 'Turkey') {
      setCities(['İstanbul', 'Ankara', 'İzmir']);
    } else if (country === 'USA') {
      setCities(['New York', 'Los Angeles', 'Chicago']);
    } else if (country === 'Germany') {
      setCities(['Berlin', 'Hamburg', 'Munich']);
    } else {
      setCities([]);
    }
  }, [country]);

  return (
    <form onSubmit={handleSubmit}>
      <h3>Doküman Bilgileri</h3>
      <label>
        Döküman İsmi:
        <input
          type="text"
          name="documentName"
          className={errors.documentName ? 'error' : ''}
        />
        {errors.documentName && <div className="error-message">{errorMessages.documentName}</div>}
      </label>
      <br />
      <label>
        Ülke:
        <select 
          name="country" 
          value={country} 
          onChange={(e) => setCountry(e.target.value)} 
          className={errors.country ? 'error' : ''}
        >
          <option value="">Seçiniz</option>
          <option value="Turkey">Türkiye</option>
          <option value="USA">ABD</option>
          <option value="Germany">Almanya</option>
        </select>
      </label>
      <br />
      <label>
        Şehir:
        <select 
          name="city" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          className={errors.city ? 'error' : ''} 
          disabled={!country}
        >
          <option value="">Seçiniz</option>
          {cities.map((cityOption) => (
            <option key={cityOption} value={cityOption}>
              {cityOption}
            </option>
          ))}
        </select>
        {errors.city && <div className="error-message">{errorMessages.city}</div>}
      </label>
      <br />
      <label>
        Tarih:
        <input
          type="date"
          name="date"
          className={errors.date ? 'error' : ''}
        />
        {errors.date && <div className="error-message">{errorMessages.date}</div>}
      </label>
      <br />
      <button type="submit">Gönder</button>
    </form>
  );
};

const AttachedDocuments = () => {
  const [errors, setErrors] = useState({});
  const [errorMessages, setErrorMessages] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newErrors = {};
    const newErrorMessages = {};

    // Validation
    if (!formData.get('serial')) {
      newErrors.serial = true;
      newErrorMessages.serial = 'Seri alanı zorunludur';
    }
    if (!formData.get('number')) {
      newErrors.number = true;
      newErrorMessages.number = 'Numara alanı zorunludur';
    }
    if (!formData.get('fieldName')) {
      newErrors.fieldName = true;
      newErrorMessages.fieldName = 'Alan Adı zorunludur';
    }

    setErrors(newErrors);
    setErrorMessages(newErrorMessages);

    if (Object.keys(newErrors).length === 0) {
      alert('Ekli Dokümanlar başarıyla gönderildi!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Ekli Dokümanlar</h3>
      <label>
        Seri:
        <input type="text" name="serial" className={errors.serial ? 'error' : ''} />
        {errors.serial && <div className="error-message">{errorMessages.serial}</div>}
      </label>
      <br />
      <label>
        Numara:
        <input type="text" name="number" className={errors.number ? 'error' : ''} />
        {errors.number && <div className="error-message">{errorMessages.number}</div>}
      </label>
      <br />
      <label>
        Alan Adı:
        <input type="text" name="fieldName" className={errors.fieldName ? 'error' : ''} />
        {errors.fieldName && <div className="error-message">{errorMessages.fieldName}</div>}
      </label>
      <br />
      <button type="submit">Gönder</button>
    </form>
  );
};

const PersonalInfo = () => {
  const [errors, setErrors] = useState({});
  const [errorMessages, setErrorMessages] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newErrors = {};
    const newErrorMessages = {};

    // Validation
    if (!formData.get('firstName')) {
      newErrors.firstName = true;
      newErrorMessages.firstName = 'İsim alanı zorunludur';
    }
    if (!formData.get('lastName')) {
      newErrors.lastName = true;
      newErrorMessages.lastName = 'Soyisim alanı zorunludur';
    }
    if (!formData.get('age')) {
      newErrors.age = true;
      newErrorMessages.age = 'Yaş alanı zorunludur';
    }
    if (!formData.get('email')) {
      newErrors.email = true;
      newErrorMessages.email = 'Email alanı zorunludur';
    }

    setErrors(newErrors);
    setErrorMessages(newErrorMessages);

    if (Object.keys(newErrors).length === 0) {
      alert('Kişisel Bilgiler başarıyla gönderildi!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Kişisel Bilgiler</h3>
      <label>
        Ad:
        <input type="text" name="firstName" className={errors.firstName ? 'error' : ''} />
        {errors.firstName && <div className="error-message">{errorMessages.firstName}</div>}
      </label>
      <br />
      <label>
        Soyad:
        <input type="text" name="lastName" className={errors.lastName ? 'error' : ''} />
        {errors.lastName && <div className="error-message">{errorMessages.lastName}</div>}
      </label>
      <br />
      <label>
        Yaş:
        <input type="number" name="age" className={errors.age ? 'error' : ''} />
        {errors.age && <div className="error-message">{errorMessages.age}</div>}
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" className={errors.email ? 'error' : ''} />
        {errors.email && <div className="error-message">{errorMessages.email}</div>}
      </label>
      <br />
      <button type="submit">Gönder</button>
    </form>
  );
};

export default FormPage;
