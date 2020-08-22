import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ProfileButton from './ProfileButton';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Menu() {
    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const navigateTo = (path) => {
        history.push(path);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Keycloak Based SPA
                    </Typography>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                    >
                        <Tab label="Home" onClick={() => navigateTo('/')} />
                        <Tab label="Users" onClick={() => navigateTo('/users')} />
                    </Tabs>
                    <ProfileButton />
                </Toolbar>
            </AppBar>
        </div>
    );
}
