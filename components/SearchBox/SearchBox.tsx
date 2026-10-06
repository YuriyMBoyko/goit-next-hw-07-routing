import { ChangeEvent } from 'react';
import css from './SearchBox.module.css'

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBox({ value, onChange }: SearchBoxProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  }


  return (
    <input 
      className={css.input} 
      value={value}
      type='text'
      placeholder='Search notes'
      onChange={handleChange}
    />
  );
}
