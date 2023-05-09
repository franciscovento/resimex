import MainLayout from '@/components/layouts/MainLayout';
import { NextPageWithLayout } from './_app';
const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className="text-app-blue">HOME</div>
    </>
  );
};

export default Home;
Home.getLayout = (page) => {
  return <MainLayout type="main">{page}</MainLayout>;
};
