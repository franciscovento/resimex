import Divider from '@/components/Divider';
import Hero from '@/components/home/Hero';
import MainLayout from '@/components/layouts/MainLayout';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      {/* SECTION HERO */}
      <Hero />
      <Divider />

      {/* SECTION 2 */}
      <div className="py-12 grid grid-cols-2">
        <div>IMAGE</div>
        <div>
          <h3>The most valuable investment you may ever make</h3>
          <p>
            Resimex is a multidisciplinary firm offering bespoke residence and
            citizenship solutions in Mexico. Whether it s matching you to your
            ideal investment, Golden Visa program or tax benefit, we help
            investors successfully uproot their lives and lifestyles.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
Home.getLayout = (page) => {
  return <MainLayout type="main">{page}</MainLayout>;
};
