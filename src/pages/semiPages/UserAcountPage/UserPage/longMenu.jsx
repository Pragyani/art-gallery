import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './userpage.css';
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const options = [
    { label: 'Edit', icon: <AiFillEdit className="icons" /> },
    { label: 'Delete', icon: <MdDelete className="icons" /> }
];

const ITEM_HEIGHT = 48;

export default function LongMenu({ item, onEdit, onDelete }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (option) => {
        if (option.label === 'Edit') {
            onEdit(item);
        } else if (option.label === 'Delete') {
            onDelete(item);
        }
        handleClose();
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                className="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                style={{ color: 'white' }}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                className="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '15ch',
                        },
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem
                        key={option.label}
                        onClick={() => handleMenuItemClick(option)}
                        className="menu-item"
                    >
                        <span className="menu-item-icon">{option.icon}</span>
                        <span className="menu-item-label">{option.label}</span>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
