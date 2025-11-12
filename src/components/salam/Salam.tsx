import React, { useState } from 'react';
import styles from './Salam.module.css';

interface SalamProps {
  description: string;
}

interface InputProps {
  id: string;
  cellNo: string;
  content: string;
  inputType: string;
  hasLabel: boolean;
  inputName: string;
  componentType: string;
  order: number;
}

const Salam: React.FC<SalamProps> = ({ description }) => {
  const [salam, setSalam] = useState<string>('');

  const handleSalamChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalam(e.target.value);
  };

  return (
    <div className={styles.salamContainer}>
      <label htmlFor="salam" className={styles.salamLabel}>salam:</label>
      <input
        type="text"
        id="salam"
        name="salam"
        className={styles.salamInput}
        value={salam}
        onChange={handleSalamChange}
      />
      <p className={styles.description}>Description: {description}</p>
    </div>
  );
};

export default Salam;
