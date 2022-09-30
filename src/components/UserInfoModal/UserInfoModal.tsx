import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { toggleUserInfoModal } from '../../store/slices/userInfoModalSlice';
import UserInfoTemplate from '../UserInfoTemplate/UserInfoTemplate';
import { pickSelectCrumb } from '../../store/slices/breadCrumbsSlice';
import { useMinWidth } from '../../hooks/useSize';
import { screenInnerWidth } from '../../helpers/consts';

interface Iprops {
  isOpen: boolean
}

export default function UserInfoModal(props: Iprops) {
  const minWidth = useMinWidth(screenInnerWidth);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: minWidth,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  const userInfo = useAppSelector(store => store.userInfoReducer)
  const dispatch = useAppDispatch();
  const { isOpen } = props;

  const handleClose = () => dispatch(toggleUserInfoModal());
  const handleChangeInfo = () => {
    dispatch(toggleUserInfoModal());
    dispatch(pickSelectCrumb('Sign Up Info'));
  }


  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={screenInnerWidth < 480 ? { ...style, p: 2 } : style}>
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          sx={{ textAlign: 'center' }}
        >
          {`${userInfo.firstName} Info`}
        </Typography>

        <UserInfoTemplate />

        <Button onClick={handleChangeInfo}>Change Information</Button>

        <Button onClick={handleClose}>Save</Button>
      </Box>
    </Modal>
  );
}