import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAppDispatch } from '../../../hooks/redux';
import { updateconfirmPassword, updatePassword } from '../../../store/slices/userInfoSlice';
interface State {
  showPassword: boolean
}

interface IProps {
  label: 'Password' | 'Confirm Password'
  value: string
  required: boolean
  size?: 'small' | 'medium'
  inputlabelsize?: 'small' | 'normal'
  error: boolean
}

export default function PasswordInput(props: IProps) {
  const { label, required, inputlabelsize: inputLabelSize, error } = props;
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = React.useState<State>({
    showPassword: false,
  });

  const handleChange =
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      label === 'Password' ?
        dispatch(updatePassword(e.target.value)) :
        dispatch(updateconfirmPassword(e.target.value));
    };

  const handleClickShowPassword = () => {
    setShowPassword({
      showPassword: !showPassword.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl
      sx={{ width: '100%' }}
      variant="outlined"
      required={required}
      error={error}
    >
      <InputLabel
        htmlFor="password"
        size={inputLabelSize}
      >
        {label}
      </InputLabel>

      <OutlinedInput
        fullWidth
        id="password"
        type={showPassword.showPassword ? 'text' : 'password'}
        {...props}
        error={error}
        onChange={(e) => handleChange(e)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
