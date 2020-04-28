import { useState } from 'react';

export default (intialValue) => {
  const [value, setValue] = useState(intialValue);
  const handleChange = (e) => setValue(e.target.value);
  const reset = () => setValue('');
  return [value, handleChange, reset];
};
