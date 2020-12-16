import { Box, Button, Card, CardContent, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { firebaseAuth } from 'src/provider/AuthProvider';



const useStyles = makeStyles({
  card : {
    width : '100%',
    maxWidth : '480px',
    margin : 'auto'
  },
  textfield : {
    marginTop : '16px',
    marginBottom : '8px',
    width : '100%'
  },
  blockbutton : {
    width : '100%',
    marginTop : '16px'
  },
  linebox : {
    display : 'flex',
    alignItems : 'center'
  },
  paragraph : {
    margin : '1em'
  },
  line : {
    flexGrow : 1,
    border : 'none',
    height : '1px',
    margin : 0,
    flexShrink : 0,
    backgroundColor : '#212121'
  },
  errortypo : {
    color : 'red'
  }
});


function SignUpForm() {
  const classes = useStyles();

  const [inputs, setInputs] = useState({
    email : '',
    password : ''
  });

  const { signUp, error } = useContext(firebaseAuth);

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name] : value }));
  };

  const handleSubmit = async () => {
    const result = await signUp(inputs.email, inputs.password);
    if (result) {
      
    }
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Box>
          <Typography variant="h4">
            회원가입
          </Typography>
        </Box>
        <form>
          <Box>
            <TextField 
              className={classes.textfield} 
              label="Email" 
              variant="outlined"
              name="email"
              onChange={handleChange}
            />
          </Box>
          <Box>
            <TextField 
              className={classes.textfield} 
              label="Password" 
              variant="outlined"
              name="password"
              type="password"
              onChange={handleChange}
            />
          </Box>
          {error && <Box>
            <Typography 
              variant="body1"
              component="p"
              className={classes.errortypo}
            >
              {error}  
            </Typography>  
          </Box>}
          <Box>
            <Button 
              variant="contained" 
              color="primary" 
              className={classes.blockbutton}
              onClick={handleSubmit}
            >
              SIGNUP
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
}
export default React.memo(SignUpForm);