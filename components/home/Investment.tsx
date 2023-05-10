import Image from 'next/image';
import Title from '../text/Title';

const Investment = () => {
  return (
    <div className="pb-12 sm:py-12 grid sm:grid-cols-2 gap-8 z-10 relative">
      <div className="justify-self-center sm:justify-self-auto">
        <Image src={'/images/investment.png'} alt="" width={400} height={290} />
      </div>
      <div>
        <Title tag="h2" size="lg">
          The most valuable investment you may ever make
        </Title>
        {/* <h3 className="app-title">
        The most valuable investment you may ever make
      </h3> */}
        <p>
          Resimex is a multidisciplinary firm offering bespoke residence and
          citizenship solutions in Mexico. Whether it s matching you to your
          ideal investment, Golden Visa program or tax benefit, we help
          investors successfully uproot their lives and lifestyles.
        </p>
      </div>
    </div>
  );
};

export default Investment;
