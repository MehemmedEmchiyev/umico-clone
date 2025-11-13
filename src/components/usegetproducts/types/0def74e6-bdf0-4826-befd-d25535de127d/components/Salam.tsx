import React, { useState } from 'react';
import styles from './Salam.module.css';
import { SalamTypes222 } from '../types/SalamTypes222';

const Salam: React.FC<SalamTypes222> = () => {
  const [salam, setSalam] = useState<string>('');
  const [create, setCreate] = useState<string>('');

  const handleSalamChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalam(e.target.value);
  };

  const handleCreateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreate(e.target.value);
  };

  return (
    <div className={styles.salamContainer}>
      <div className={styles.formGroup} style={{ gridColumn: 'span 6' }}>
        <label htmlFor="salam" className={styles.label}>
dawdaw
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

      <div className={styles.formGroup} style={{ gridColumn: 'span 6' }}>
        <label htmlFor="create" className={styles.label}>
          Create
        </label>
        <input
          type="text"
          id="create"
          name="Create"
          className={styles.input}
          value={create}
          onChange={handleCreateChange}
        />
      </div>
    </div>
  );
};

export default Salam;
