import SignInPage from '../components/pages/sign-in/SignInPage';
import { withIronSessionSsr } from 'iron-session/next';
import { GetServerSideProps } from 'next';
import { ironSessionConfig } from '../ironSessionConfig';

const handler: GetServerSideProps = async ({ req }) => {
  const user = req.session.user;

  if (user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export const getServerSideProps = withIronSessionSsr(
  handler,
  ironSessionConfig
);

export default SignInPage;
