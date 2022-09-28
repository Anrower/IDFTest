import PasswordInput from '../PasswordInput/PasswordInput';
import TelInput from '../TelInput/TelInput';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';
import styles from '../Form.module.scss';
import { useState } from 'react';

export interface IPassword {
  password: string
}


const SignUpInfoForm = () => {
  const [password, setPassword] = useState<IPassword>({
    password: 'hello',
  })

  return (
    <div className={styles.form}>
      <TelInput />
      <PasswordInput
        label='Password'
        value={password.password}

      />
      <PasswordInput
        label='Confirm Password'
        value={password.password}
      />

      <Button
        sx={{
          alignSelf: 'flex-end',
          width: '45%'
        }}
        variant="contained"
        color="primary"
        endIcon={<NavigateNextIcon />}
      >
        Next Step
      </Button>
    </div>
  )
}

export default SignUpInfoForm