import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Input } from '@mui/material';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 5,
};

const CreateTask: React.FC<{ open: boolean, setOpen: (val: boolean) => void, create: (val: string) => void }> = ({ open, setOpen, create }) => {
    const [text, setText] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setText(e.target.value);
    }

    return (
        <div>
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" className='border-b-2'>
                    Create a new task
                </Typography>

                <Input type="text" multiline={true} className='w-3/4' onChange={(e) => handleChange(e)}/>

                <Button color="info" className='float-right absolute bottom-6 right-5' onClick={() => {create(text); setOpen(false)}}>Create</Button>
            </Box>
        </Modal>
        </div>
    );
}

export default CreateTask;