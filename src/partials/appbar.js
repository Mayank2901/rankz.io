import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Badge from '@material-ui/core/Badge';

const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#e50b20',
      color: '#44b700',
      border: '0px',
      '&::after': {
        border: '0px',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        content: '""',
      },
    }
}))(Badge);

const useStyles = makeStyles({
  appBar: {
    width: '85%',
    marginLeft: '15%',
    background: "white",
    color: 'black',
    boxShadow: '0px -1px 0px -1px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 1px 1px 0px rgba(0,0,0,0.12)',
  },
  trial: {
    color: 'white !important',
    background: '#009eff',
    margin: '0px',
    textAlign: 'center',
    padding: '9px'
  },
  trialUrl: {
    color: 'white'
  },
  heading: {
    fontSize: '20px',
    fontWeight: '500',
    marginRight: '3%'
  },
  subheading: {
    marginTop: '2px',
    marginLeft: '5px',
    fontSize: '12px',
    fontWeight: 'normal',
    color: '#4d4d4d',
  },
  appBarRight: {
    marginLeft: 'auto',
  },
  avatarSpacing: {
    margin: 'auto 8px',
    backgroundColor: '#e6e6e6',
    border: '0px solid white'
  },
  avatarIcon: {
    width: '50%',
    height: '50%'
  },
  badge: {
    border: '0px'
  }
})

export default function ApplicationBar(){
    const styles = useStyles()
    return (
        <AppBar position="fixed" className={styles.appBar}>
            <p className={styles.trial}>You have 14 days left in your trial. <a href="/" className={styles.trialUrl}>Upgrade now</a></p>
            <Toolbar>
                <Typography variant="h1" className={styles.heading} noWrap>
                    Rank Tracker
                </Typography>
                <img alt="help icon" src="/icons/help-white.svg"/>
                <Typography variant="h4" className={styles.subheading} noWrap>
                    How it works
                </Typography>
                <section className={styles.appBarRight}>
                    <AvatarGroup max={3}>
                        <Avatar className={styles.avatarSpacing}>
                            <img classname={styles.avatarIcon} alt="help icon" src="/icons/help-black.svg" />
                        </Avatar>
                        <StyledBadge
                            overlap="circle"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            variant="dot"
                            className={styles.badge}
                        >
                            <Avatar className={styles.avatarSpacing}>
                                <img classname={styles.avatarIcon} alt="help icon" src="/icons/notification.svg" />
                            </Avatar>
                        </StyledBadge>
                        <Avatar className={styles.avatarSpacing} alt="Remy Sharp" src="/rankzlogo.svg" />
                    </AvatarGroup>
                </section>
            </Toolbar>
        </AppBar>
    )
}

