import { useState } from 'react';

const useFileInput = (initialValue : File | null) => {
  const [file, setFile] = useState(initialValue);
  const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFile(file);
    }
  };

  return [file, onChange] as [
    typeof file,
    typeof onChange
  ];
};
export default useFileInput;