/* eslint-disable default-case */
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningIcon from '@mui/icons-material/Warning';
import { yellow, red } from '@mui/material/colors';
import ErrorIcon from '@mui/icons-material/Error';
import ALERT from '../consts/status-alter';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const Alert = ({ isShow = false, status, children }) => {
    const [open, setOpen] = React.useState(isShow);

    const handleClose = () => {
        setOpen(false);
    };

    const Icon = () => {
        switch (status) {
            case ALERT.SUCCESS:
                return <CheckCircleOutlineIcon color="success" sx={{
                    fontSize: 40,
                    marginLeft: "1rem"
                }} />
            case ALERT.WARNING:
                return <WarningIcon sx={{
                    fontSize: 40,
                    marginLeft: "1rem",
                    color: yellow[600]
                }} />
            case ALERT.ERROR:
                return <ErrorIcon sx={{
                    fontSize: 40,
                    marginLeft: "1rem",
                    color: red[600]
                }} />
            default: return
        }
    }

    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Ký túc xá
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        {children}
                        {status && <Icon />}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}

export default Alert