import './Calendar.css';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function RegistrarVacunas() {
	return (
		<div className='image-container'>
			<img src='/images/calendario.jpg' />
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Typography component='h1' variant='h5'>
						Cargar vacuna
					</Typography>
					<Box component='form' noValidate sx={{ mt: 1 }}>
						<TextField
							margin='normal'
							required
							fullWidth
							id='vacuna'
							label='Nombre de la vacuna'
							name='Vacuna'
							autoComplete='email'
							autoFocus
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='dosis'
							label='Número de dosis'
							type='dosis'
							id='dosis'
							autoComplete='dosis'
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='Fecha'
							label='Fecha de aplicacíon'
							type='date'
							id='Fecha'
							autoComplete='Fecha'
							autoFocus
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='lugar'
							label='Lugar de aplicación'
							type='lugar'
							id='lugar'
							autoComplete='lugar'
						/>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
							href='/profile'
						>
							Registrar vacuna
						</Button>
					</Box>
				</Box>
			</Container>
		</div>
	);
}

export default RegistrarVacunas;
