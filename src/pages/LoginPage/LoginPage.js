import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, makeStyles, TextField, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { validateEmail, validatePassword } from '../../services/validateService';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../redux/auth/authActions';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
  
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        "&:hover":{
            backgroundColor : '#2b2b2b'
        }
    },
}));

const LoginPage = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false)

    const classes = useStyles();
    const dispatch = useDispatch();

    const emailChangeHandler = event => { setEmail(event.target.value) }
    const passwordChangeHandler = event => { setPassword(event.target.value) }

    const onSubmit = async (event) => {
        event.preventDefault();
        if (validateEmail(email) && validatePassword(password))
            dispatch(setLogin(email , password , rememberMe));
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        helperText={email && !validateEmail(email) && "Please enter your Email Address in the format yourname@example.com"}
                        error={( email && !validateEmail(email)) ? true : false}
                        onChange={emailChangeHandler}
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        helperText={password && !validatePassword(password) && "Password required at least one uppercase letter, one digit and length of 8-10 characters "}
                        error={(password && !validatePassword(password))? true : false}
                        onChange={passwordChangeHandler}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password" />
                    <FormControlLabel className={classes.label} control={<Checkbox value="remember" color="primary" onClick={() => setRememberMe(prev => !prev)} />} label="Remember me" />
                    <Button className={classes.submit} startIcon={<VpnKeyIcon/>} fullWidth variant="contained" color="primary" onClick={onSubmit} >
                        Sign In
                    </Button>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    )
}
const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright by Dudi Levi © '}
            {/* <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '} */}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default LoginPage;