import { Box, Button } from '@material-ui/core';
import React, { useRef } from 'react';

function FileInputBox({ file, onChange, classes } : any) {
  const fileInputRef = useRef<any>();
  return (
    <Box>
      <input 
        type="file"
        style={{ display : 'none'}}
        onChange={onChange}
        ref={fileInputRef}/>
      <Button 
        className={classes}
        variant="outlined"
        onClick={() => fileInputRef.current.click()}>
        { file ? file.name : '사진 선택' }
      </Button>
    </Box>
  );
}

export default FileInputBox;
