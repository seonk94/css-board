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
  }
});


function SignUpForm() {
  const classes = useStyles();

  const [inputs, setInputs] = useState({
    email : '',
    password : ''
  });

  const { signUp } = useContext(firebaseAuth);

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name] : value }));
  };

  const handleSubmit = () => {
    signUp(inputs.email, inputs.password);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Box>
          <Typography variant="h4">
        Login
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
          <Box>
            <Button 
              variant="contained" 
              color="primary" 
              className={classes.blockbutton}
              onClick={handleSubmit}
            >
          SignUp
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
}
export default SignUpForm;