import './Form.css';

import React, { useState } from 'react';

function Form() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [siape, setSiape] = useState('');
  const [unit, setUnit] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName('');
    setEmail('');
    setSiape('');
    setUnit('');
    setPhone('');
    setDescription('');
  };

  return (
    <div className="FormWrapper">
      <div className="FormInsideWrapper">
        <form onSubmit={handleSubmit}>
          <p class='main-p'>Nome completo:</p>
          <input
            type="text"
            className="single-line-input"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <p class='main-p'>Email:</p>
          <input
            type="text"
            className="single-line-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p class='main-p'>SIAPE/Matrícula:</p>
          <input
            type="text"
            className="single-line-input"
            value={siape}
            onChange={(e) => setSiape(e.target.value)}
          />

          <p class='main-p'>Unidade solicitante:</p>

          <label className='form-label'>
            <input
              type="radio"
              name="unit"
              className='form-label-input'
              value="Arapiraca"
              checked={unit === "Arapiraca"}
              onChange={(e) => setUnit(e.target.value)}
              required
              />
              <p class="radio-button-p">Arapiraca</p>
          </label>

          <label className='form-label'>
            <input
              type="radio"
              name="unit"
              className='form-label-input'
              value="Penedo"
              checked={unit === "Penedo"}
              onChange={(e) => setUnit(e.target.value)}
              />
              <p class="radio-button-p">Penedo</p>
          </label>

          <label className='form-label'>
            <input
              type="radio"
              name="unit"
              className='form-label-input'
              value="Palmeira dos índios"
              checked={unit === "Palmeira dos índios"}
              onChange={(e) => setUnit(e.target.value)}
              />
              <p class="radio-button-p">Palmeira dos índios</p>
          </label>

          <p class='main-p'>Telefone:</p>
          <input
            type="text"
            className="single-line-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <p class='main-p'>Descrição:</p>
          <input
            type="text"
            className="multiple-line-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button id="form-submit-button"type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
