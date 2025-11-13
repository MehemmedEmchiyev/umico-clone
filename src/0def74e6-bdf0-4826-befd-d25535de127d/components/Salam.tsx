import React, { useState } from 'react';
import styles from './Salam.module.css';
import { SalamTypes } from '../types/SalamTypes';

const Salam: React.FC<SalamTypes> = () => {
  const [create, setCreate] = useState(false);
  const [salam, setSalam] = useState('dawdaw');

  const handleCreateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreate(e.target.checked);
  };

  const handleSalamChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalam(e.target.value);
  };

  return (
    <div className={styles.salamContainer}>
      <div className={styles.gridCell6}>
        <label htmlFor="salam">Salam:</label>
        <input
          type="text"
          id="salam"
          name="salam"
          value={salam}
          onChange={handleSalamChange}
        />
      </div>
      <div className={styles.gridCell6}>
        <label htmlFor="create">Create:</label>
        <input
          type="checkbox"
          id="create"
          name="create"
          checked={create}
          onChange={handleCreateChange}
        />
      </div>
    </div>
  );
};

export default Salam;
