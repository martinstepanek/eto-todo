export const ironSessionConfig = {
  cookieName: 'auth',
  password: process.env.SESSION_PASSWORD,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};
