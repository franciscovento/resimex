import CardDescription from '../cards/CardDescription';
import BackToTop from '../svg/BackToTop';
import Title from '../text/Title';

const WhyChooseUs = () => {
  return (
    <div className="app-banner bg-app-gray-lighter pb-28 relative">
      <div className="app-container relative">
        <Title tag="h3" position="center">
          Why Choose Us
        </Title>
        <div className="grid sm:grid-cols-3 gap-4 justify-center mt-12">
          <div className="justify-self-center">
            <CardDescription
              title="Seed and Simplicity"
              description=" Easy, traveler-friendly application process. Simple and much
            less complicated than dealing with foreign governments."
            />
          </div>
          <div className="justify-self-center">
            <CardDescription
              title="Seed and Simplicity"
              description=" Easy, traveler-friendly application process. Simple and much
            less complicated than dealing with foreign governments."
            />
          </div>
          <div className="justify-self-center">
            <CardDescription
              title="Seed and Simplicity"
              description=" Easy, traveler-friendly application process. Simple and much
            less complicated than dealing with foreign governments."
            />
          </div>
        </div>
        <div className="absolute right-4 -bottom-16 flex gap-2 items-center font-medium text-sm animate-bounce">
          <BackToTop />
          <span>Back to Top</span>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
