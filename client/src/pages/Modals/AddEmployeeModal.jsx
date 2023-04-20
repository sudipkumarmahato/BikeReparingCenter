import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Grid, TextField, Typography, Stack } from '@mui/material';
//import DoneIcon from '@mui/icons-material/Done';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 616,
    height: 679,
    bgcolor: 'white',
    borderRadius: 3,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
const CancelStyle = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 475,
    minHeight: 184,
    bgcolor: 'white',
    borderRadius: 4,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
const SaveStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400,
    minHeight: 184,
    bgcolor: 'white',
    borderRadius: 4,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};




export default function AddEmployeeModal({open,setOpen}) {
   
    const handleClose = () => {
        setOpen(false);
    };
  

    return (
        <div>
            
            <Modal
                open={open}
                
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style }}>
                    <Typography sx={{ margin: '10px 0 0 0px', fontSize: '24px' }}>Add New Employee</Typography>
                    <PersonalInfo />
                    <AccountDetail />
                    <ButtonBtn handleBigModalClose={handleClose}/> 
                </Box>
                
            </Modal>
        </div>
    );
}


const PersonalInfo = () => {
    return (
        <>
            <Typography component={'p'} mt={2} mb={2}>Personal Information</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <TextField label='Full Name' fullWidth />
                </Grid>
                <Grid item xs={6} >
                    <TextField label='Branch' fullWidth />
                </Grid>
                <Grid item xs={6} >
                    <TextField label='Address' fullWidth />
                </Grid>
                <Grid item xs={7} >
                    <TextField label='Phone' type={'number'} fullWidth />
                </Grid>
                <Grid item xs={5} >
                    <TextField label='Email' type={'email'} fullWidth />
                </Grid>
            </Grid>
        </>

    )
}

const AccountDetail = () => {
    return (
        <>
            <Typography component={'p'} mt={4} mb={2}>Account Details</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField label='Username' sx={{ width: '50%' }} />
                </Grid>
                <Grid item xs={6} >
                    <TextField label='Password' type={'password'} fullWidth />
                </Grid>
                <Grid item xs={6} >
                    <TextField label='Confirm Password' type={'password'} fullWidth />
                </Grid>

            </Grid>
        </>
    )
}

const ButtonBtn = ({handleBigModalClose}) => {
    
    return (
        <>
            <Stack direction='row' justifyContent='flex-end' spacing={3} mt={5}>
              
                <CancelModel handleBigModalClose={handleBigModalClose} />
                <SaveModel handleBigModalClose={handleBigModalClose}/>

            </Stack>
        </>
    )
}
function CancelModel({handleBigModalClose}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            
            <Button onClick={handleOpen} sx={{ color: '#EB5757' }}>
                    <Typography>Cancel</Typography>
                </Button>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
              
            >
                <Box sx={{ ...CancelStyle, width: 200 }} mt={10} textAlign={'center'}>
                    <Stack  spacing={2} alignItems='center' justifyContent={'center'}>

                <Typography component='div' variant='h5'  >Go Back?</Typography>
                <Typography variant='body2' component='span' sx={{marginTop:'10px'}}>Cancel current unsaved changes and go back to employee list?</Typography>
                <Stack direction={'row'} gap={2} >

                    <Button onClick={handleBigModalClose}>CANCEL AND GO BACK</Button>
                    <Button onClick={handleClose} variant='contained' color='secondary'>KEEP EDITING</Button>
                </Stack>
                    </Stack>
                </Box>
            </Modal>
        </React.Fragment>
    );
}
function SaveModel({handleBigModalClose}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            
            <Button onClick={handleOpen} variant='contained' sx={{color:'#3150A1'}}>
                    <Stack direction='row' spacing={2}>
                        {/* <DoneIcon sx={{color:'white'}}/> */}
                        <Typography sx={{color:'white'}}>Save</Typography>
                    </Stack>
                </Button>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
              
            >
                <Box sx={{ ...SaveStyle, width: 200, textAlign:'center' }}>
                   <Stack spacing={2} alignItems='center' justifyContent={'center'}>
                   <Typography variant='h5' component={'div'} sx={{color:'#219653'}}>Success</Typography>
                   <Typography variant='body1' component={'span'} sx={{margin:'10px 0 10px 0'}}>New Emoloyee registered successfully.</Typography>
                    <Button onClick={handleBigModalClose} variant='contained' sx={{backgroundColor:' #3150A1',color:'white',width:'50%'}}>Confirm</Button>
                   </Stack>
                </Box>
            </Modal>
        </React.Fragment>
    );
}
