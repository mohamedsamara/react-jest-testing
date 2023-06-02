import Layout from 'layouts/default';

export const HOME_TEST_ID = 'home';

const Home = () => {
  return (
    <Layout>
      <div data-testid={HOME_TEST_ID} className="h-full">
        <div className="flex flex-col items-center content-center justify-end h-full">
          <h4 className="mb-6 text-3xl">React Jest Testing</h4>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
