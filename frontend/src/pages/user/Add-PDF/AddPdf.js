import { padding } from '@mui/system';
import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Navbar from '../../../components/navbar/Navbar';
import SideBar from '../../../components/sidebar/SideBar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AddPdf() {
    return (
        <div>
            <Navbar />
            <div style={{ display: "flex" }}>
                <SideBar />
                <div className='mainbody'>
                    <div className='container' style={{ padding: "20px", width: "100%", height: "100vh", }}>
                        <div style={{ width: "100%", height: "100%", padding: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>

                            <Box sx={{
                                width: 500,
                                height: 500,
                                // backgroundColor: 'primary.dark',
                                border: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <DriveFolderUploadIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Uplad File
                                </Typography>
                                <Box component="form" sx={{
                                    mt: 5, width: 300,
                                    height: 300,
                                }} >
                                    <Grid container spacing={2} >
                                        <Grid item xs={12} sx={{ mt: 2 }}>
                                            <TextField
                                                autoComplete="given-name"
                                                name="fileName"
                                                required
                                                fullWidth
                                                id="fileName"
                                                label="File Name"
                                                autoFocus
                                            />
                                        </Grid>
                                        <Grid item xs={12} sx={{ mt: 2 }} >
                                            <TextField

                                                name="file"
                                                required
                                                fullWidth
                                                id="file"

                                                type="file"
                                                autoFocus
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                       Uplad
                                    </Button>
                                </Box>

                            </Box>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPdf
