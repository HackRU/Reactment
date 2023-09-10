import React, { useState } from "react";
import PropTypes from "prop-types";
import HackRUlogoURI from "./images/HackRUlogo.jpg";
import Fade from "react-reveal/Fade";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = theme => ({
    navbar: {
        margin: '0px 10px 0px 0px',
        zIndex: '1000',
    },
    paper: {
        background: "#c85151",
    },
});


const withMediaQuery = (...args) => Component => props => {
    const mediaQuery = useMediaQuery(...args);
    return <Component mediaQuery={mediaQuery} {...props} />;
};

const Navbar = (props) => {
    const [left, setLeft] = useState(false);

    function handleClick(index) {
        props.onPageChange(index, props.items[index]);
    }
    function toggleDrawer(event, open) {
        console.log(open);
        setLeft(open);
    };

    const focused = props.currentPage;
    const { classes } = props;
    /* Desktop Navbar */
    if (props.mediaQuery) {
        return (
            <div className={props.fixed && "fixed" + " " + classes.navbar}>
                <ButtonGroup className={classes.navbar} fullWidth size="medium" variant="contained" color="primary">
                    <Fade left cascade>
                        <a href="https://hackru.org/">
                            <img width="80" src={HackRUlogoURI} style={{ float: "left" }} />
                        </a>
                    </Fade>
                    {props.items.map(function (element, index) {
                        var style = "";
                        if (focused === index) {
                            style = "active";
                        }
                        return (
                            <Button
                                style={{ color: "white" }}
                                key={index}
                                className={style}
                                onClick={() => handleClick(index)}
                            >
                                {element}
                            </Button>
                        );
                    })}
                </ButtonGroup>

            </div>
        );
    }
    /* Mobile Drawer */
    else {
        return (
            <div className={props.fixed && "fixed" + " " + classes.navbar}
                onKeyDown={(event) => toggleDrawer(event, false)}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={(event) => toggleDrawer(event, true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography style={{ color: "white" }} variant="h6" className={classes.title}>
                            Pages
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Drawer classes={{ paper: classes.paper }} anchor={'left'} open={left} onClose={(event) => toggleDrawer(event, false)}>
                    <List>
                        {props.items.map(function (element, index) {
                            var style = "";
                            if (focused === index) {
                                style = "active";
                            }
                            return (
                                <ListItem
                                    style={{ color: "white" }}
                                    key={index}
                                    className={style}
                                    onClick={() => handleClick(index)}
                                >
                                    {element}
                                </ListItem>
                            );
                        })}
                    </List>
                </Drawer>
            </div>
        );
    }
}

Navbar.propTypes = {
    fixed: PropTypes.bool,
    items: PropTypes.array,
};

Navbar.defaultPropTypes = {
    fixed: true,
    items: [],
};

export default withStyles(useStyles)(withMediaQuery('(min-width:768px)')(Navbar))
