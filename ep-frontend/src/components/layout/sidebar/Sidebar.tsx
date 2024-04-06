import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import texts from '../../../texts.json';

import './Sidebar.css';

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            anchor="left"
            PaperProps={{
                style: {
                    position: 'relative',
                },
            }}
        >
            <List>
                {texts.sidebar.items.map((item, index) => (
                    <ListItemButton key={item.text}>
                        <ListItemIcon>
                            {index === 0 && <AssignmentIndOutlinedIcon />}
                            {index === 1 && <CodeOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Typography variant="body2">{item.text}</Typography>
                            }
                        />
                    </ListItemButton>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;