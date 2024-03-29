import React from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
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
            <div className='headerTitle'>
                {/*<LogoIcon style={{ color: '#fff' }} />*/}
                <span>{texts.sidebar.header}</span>
            </div>

            <div>
                <List>
                    {texts.sidebar.items.map((item, index) => (
                        <ListItemButton key={item.text}>
                            <ListItemIcon>
                                {index === 0 && <HomeIcon />}
                                {index === 1 && <AssignmentIcon />}
                                {index === 2 && <AssignmentIcon />}
                                {index === 3 && <MessageIcon />}
                                {index === 4 && <ReportIcon />}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    ))}
                </List>
            </div>
        </Drawer>
    );
};

export default Sidebar;