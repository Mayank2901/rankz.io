import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

const useStyles = makeStyles({
    logo: {
        margin: '10% auto'
    },
    paper: {
        width: '15%',
        background: '#1e2640',
    },
    list: {
        color: "#cccccc",
        fontSize: '14px'
    }
})

export default function Menu(){
    const styles = useStyles()
    const [ menuItems, setMenuItems] = useState([
        {
            name: "Dashboard",
            icon: "/icons/dashboard.svg"
        },
        {
            name: "Site Explorer",
            icon: "/icons/siteexplorer.svg"
        },
        {
            name: "Keyword Explorer",
            icon: "/icons/keywordexplorer.svg"
        },
        {
            name: "Rank Tracker",
            icon: "/icons/ranktracker.svg"
        },
        {
            name: "Distribute Content",
            icon: "/icons/distributecontent.svg"
        },
        {
            name: "PPC Explorer",
            icon: "/icons/ppcexplorer.svg"
        },
        {
            name: "More Tools",
            icon: "/icons/more.svg"
        },
        {
            name: "Integrations",
            icon: "/icons/integrations.svg"
        }
    ])
    return (
        <Drawer
            variant="permanent"
            classes={{ paper: styles.paper}}
        >
            <div className={styles.logo}>
                <img src="/rankzlogo.svg" alt="logo"/>
            </div>
            <List className={styles.list}>
                {menuItems.map((item, index) => (
                    <ListItem button key={item.name}>
                        <ListItemIcon><img src={item.icon} alt={item.name}/> </ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

