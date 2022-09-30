import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { toggleUserInfoModal } from '../../store/slices/userInfoModalSlice';
import UserInfoTemplate from '../UserInfoTemplate/UserInfoTemplate';
import { pickSelectCrumb, updateShowActiveCrumb } from '../../store/slices/breadCrumbsSlice';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 480,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface Iprops {
  isOpen: boolean
}

export default function UserInfoModal(props: Iprops) {

  const userInfo = useAppSelector(store => store.userInfoReducer)
  const dispatch = useAppDispatch();
  const { isOpen } = props;

  const handleClose = () => dispatch(toggleUserInfoModal());
  const handleChangeInfo = () => {
    dispatch(toggleUserInfoModal());
    dispatch(updateShowActiveCrumb(0));
    dispatch(pickSelectCrumb('Sign Up Info'));
  }


  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
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