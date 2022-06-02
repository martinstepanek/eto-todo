import IndexPage from '../components/pages/index/IndexPage';
import { GetServerSideProps } from 'next';
import { withIronSessionSsr } from 'iron-session/next';
import { ironSessionConfig } from '../ironSessionConfig';

const handler: GetServerSideProps = async ({ req }) => {
  const user = req.session.user;

  if (!user) {
    return {
      redirect: {
        destination: '/sign-in',
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

export default IndexPage;
