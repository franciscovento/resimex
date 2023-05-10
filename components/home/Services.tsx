import { Button, Card } from '@material-tailwind/react';
import Title from '../text/Title';

const Services = () => {
  return (
    <div
      style={{
        clipPath: 'polygon(0 9%, 100% 0%, 100% 100%, 0% 100%)',
      }}
      className="app-banner bg-app-gray-lighter py-12 sm:pt-32 relative"
    >
      <div className="app-container grid sm:grid-cols-2 py-12 gap-8">
        <div className="pt-8 sm:pt-0 sm:max-w-sm">
          <Title tag="h3">Seamless service targeting your unique needs</Title>
          <p>
            Lifestyle choices vary, which is why we take the time to learn about
            your individual situation and requirements. We ll assist you from
            start to finish, ensuring you have the insight and knowledge needed
            to succeed.
          </p>
        </div>
        <div>
          <Card className="flex flex-col justify-center items-center p-8 gap-5">
            <span className="block w-16 h-16 bg-app-gray-lighter rounded-full"></span>
            <Title tag="h3" position="center" size="md">
              Residency Programs
            </Title>
            <p>
              Mexican residency safeguards against future instability and opens
              up a world of opportunities for investors and their families. A
              Golden Visa permit provides visa-free access to many countries
              across the globe.
            </p>
            <Button className="bg-app-sky-blue mt-8">Get Started</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
