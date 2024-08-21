import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import './editmodal.css';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import { BasicModal } from '../BasicModal/modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '22px',
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <BasicModal className='child-modal-i' />
    </>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} className='btn-edited'><EditNoteRoundedIcon className="edit-icon" /> </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        className='modal-Ie'
      >
        <Box sx={{ ...style, width: 600 }} className='box-modal'>
          <h2 id="parent-modal-title">You Selected The Product for Changes...!?</h2>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
} 3