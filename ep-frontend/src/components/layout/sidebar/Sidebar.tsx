import React from 'react';
import {Drawer, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MessageIcon from '@mui/icons-material/Message';
import ReportIcon from '@mui/icons-material/Report';
import LogoIcon from '@mui/icons-material/AcUnit';
import texts from '../../../texts.json';

import './sidebar.css';

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            anchor="left"
        >
            <div>
                <LogoIcon style={{color: '#fff'}}/>
                <span>{texts.sidebar.header}</span>
            </div>

            <div>
                <List>
                    {['Dashboard', 'Projects', 'Tasks', 'Messages', 'Reports'].map((text, index) => (
                        <ListItem button key={text}> {}
                            <ListItemIcon> {}
                                {index === 0 && <HomeIcon/>}
                                {index === 1 && <AssignmentIcon/>}
                                {index === 2 && <AssignmentIcon/>}
                                {index === 3 && <MessageIcon/>}
                                {index === 4 && <ReportIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}
                            />
                        </ListItem>
                    ))}
                </List>
            </div>
        </Drawer>
    );
};

export default Sidebar;