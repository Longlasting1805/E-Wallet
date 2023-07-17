import React, {useState} from "react";
import imgUrl from './assets/ygt.JPG'
import { useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal';
import { Box, Typography } from "@mui/material";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const Forgot = (props) => {
    const [email, setEmail] = useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

   

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
}

const navigate = useNavigate()

return(
    <div style={{ display: 'flex', width: '100%', height: '670px'}}>
        <div className="img">
        <img src={imgUrl}alt="Italian Trulli"/>
        </div>
         <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10rem', marginTop: '15rem'}}>
        
        <label htmlFor="email">Enter Email to reset your Password</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="ken@gmail.com" id="email" name="email"/>
        <button onClick={handleOpen}>Next</button>
       
        <button className="link-btn" onClick={() => navigate('/login')}> cancel</button>

         <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    Check your mail for your OTP number
                </Box>
             </Modal>
        </div> 
    </div>
)

}