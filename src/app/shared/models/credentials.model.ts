export interface LoginData {
  email: string;
  password: string;
}

export interface SignUpData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface PasswordReset {
  email: string;
}

export interface SetPassword {
  newPassword: string;
  confirmPassword: string;
}

