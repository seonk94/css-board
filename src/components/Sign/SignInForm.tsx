import { Box, Button, Card, CardContent, makeStyles, Modal, TextField, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { firebaseAuth } from 'src/provider/AuthProvider';

const useStyles = makeStyles({
  card : {
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
  modal : {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center'
  }
});

function SignInForm() {

  const classes = useStyles();

  const [signUpModal, setSignUpModal] = useState(false);
  const [inputs, setInputs] = useState({
    email : '',
    password : ''
  });

  const { signIn } = useContext(firebaseAuth);

  const handleSubmit = () => {
    signIn(inputs.email, inputs.password);
  };

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name] : value }));
  };

  const handleSignUp = () => {
    setSignUpModal(true);
  };

  return (
    <>
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
            SignIn
              </Button>
            </Box>
          </form>
          <Box className={classes.linebox}>
            <hr className={classes.line}/>
            <p className={classes.paragraph}>or</p>
            <hr className={classes.line}/>
          </Box>
          <Box>
            <Button 
              variant="contained" 
              color="primary" 
              className={classes.blockbutton}
              onClick={handleSignUp}
            >
          SignUp
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Modal open={signUpModal}
        className={classes.modal}>
        <div>
            
        </div>
      </Modal>
    </>
  );
}
export default SignInForm;