import React, { useState } from 'react';
import styles from './Salam.module.css';
import { SalamTypes } from '../types/SalamTypes';

const Salam: React.FC<SalamTypes> = () => {
  const [salam, setSalam] = useState<string>('dawdaw');
  const [create, setCreate] = useState<boolean>(false);

  const handleSalamChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalam(e.target.value);
  };

  const handleCreateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreate(e.target.checked);
  };

  return (
    <div className={styles.salamContainer}>
      <div className={styles.formGroup} style={{ gridColumn: '1 / span 6' }}>
        <label htmlFor="salam" className={styles.label}>
          salam
        </label>
        <input
          type="text"
          id="salam"
          name="salam"
          className={styles.input}
          value={salam}
          onChange={handleSalamChange}
        />
      </div>

      <div className={styles.formGroup} style={{ gridColumn: '7 / span 6' }}>
        <label htmlFor="create" className={styles.label}>
          Create
        </label>
        <input
          type="checkbox"
          id="create"
          name="create"
          className={styles.checkbox}
          checked={create}
          onChange={handleCreateChange}
        />
      </div>
    </div>
  );
};

export default Salam;
