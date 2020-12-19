import { Box, Button, Card, CardContent, makeStyles, Modal, Paper, TextField, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { firebaseAuth } from 'src/provider/AuthProvider';
import { SignUpForm } from './';
import { NeumorphismBox } from 'src/style/Neumorphism';

const useStyles = makeStyles({
  card : {
    maxWidth : '480px',
    margin : '1rem',
    ...NeumorphismBox
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
  },
  errortypo : {
    color : 'red'
  }
});

function SignInForm() {

  const classes = useStyles();
  
  const history = useHistory();
  const [signUpModal, setSignUpModal] = useState(false);
  const [inputs, setInputs] = useState({
    email : '',
    password : ''
  });

  const { signIn, error } = useContext(firebaseAuth);

  const handleSubmit = async () => {
    const result = await signIn(inputs.email, inputs.password);
    if (result) {
      history.push('/');
    }
  };

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name] : value }));
  };

  const handleKeyPress = (e : React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSignUp = () => {
    setSignUpModal(true);
  };

  const handleClose = () => {
    setSignUpModal(false);
  };

  return <>
    <Paper className={classes.card}>
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
              onKeyPress={handleKeyPress}
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
              로그인
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
            회원가입
          </Button>
        </Box>
      </CardContent>
    </Paper>
    <Modal 
      open={signUpModal}
      onClose={handleClose}
      className={classes.modal}
      aria-labelledby="회원가입"
    >
      <div>
        <SignUpForm></SignUpForm>            
      </div>
    </Modal>
  </>;
}
export default React.memo(SignInForm);