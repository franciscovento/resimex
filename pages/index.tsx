import Divider from '@/components/Divider';
import Contact from '@/components/home/Contact';
import Hero from '@/components/home/Hero';
import Investment from '@/components/home/Investment';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import MainLayout from '@/components/layouts/MainLayout';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      {/* SECTION HERO */}
      <Hero />
      <Divider />
      {/* SECTION 2 */}
      <Investment />
      {/* SECTION 3 */}
      <Services />
      {/* SECTION 4 */}
      <WhyChooseUs />
      {/* FORM */}
      <Contact />
    </>
  );
};

export default Home;
Home.getLayout = (page) => {
  return <MainLayout type="main">{page}</MainLayout>;
};
