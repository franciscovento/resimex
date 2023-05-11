import MainLayout from '@/components/layouts/MainLayout';
import Title from '@/components/text/Title';
import { Button, Card } from '@material-tailwind/react';
import { NextPageWithLayout } from '../_app';

const DashBoardPage: NextPageWithLayout = () => {
  const firstStep = false;
  const secondStep = false;
  const thirdStep = false;
  return (
    <div className="app-banner bg-app-sky-blue-light -mt-4 py-12 relative">
      <div className="app-container flex flex-col items-center justify-center max-w-xl mx-auto z-20 relative">
        <Title tag="h1" position="center">
          Get your Mexican Residence!
        </Title>
        <p className="text-center">
          Lifestyle choices vary, which is why we take the time to learn about
          your individual situation and requirements.
          <br />
          <br /> We ll assist you from start to ﬁnish, ensuring you have the
          insight and knowledge needed to succeed.
        </p>
        <Card className="py-8 px-2 sm:p-8 flex flex-col gap-8 my-12">
          {appMenu.map((item, index) => {
            return (
              <div
                key={index}
                className="flex w-full items-start gap-5 sm:gap-9"
              >
                <div className="relative">
                  <span
                    className={`w-8 h-8 min-w-[32px] sm:w-12 sm:h-12 sm:min-w-[48px] font-bold text-xl sm:text-3xl text-app-blue  rounded-full flex items-center justify-center transition-all border border-app-blue ${
                      firstStep && item.step === 1 && 'bg-app-blue text-white'
                    } ${
                      secondStep && item.step === 2 && 'bg-app-blue text-white'
                    }
                    ${
                      thirdStep && item.step === 3 && 'bg-app-blue text-white'
                    }`}
                  >
                    {index + 1}
                  </span>
                  {appMenu.length !== index + 1 && (
                    <span
                      className={`absolute w-[76px] left-[-22px] bottom-[-39px] sm:bottom-[-35px] sm:left-[-10px] sm:w-[68px] h-0.5 bg-app-sky-blue-light rotate-90 ${
                        firstStep && item.step === 1 && '!bg-app-blue'
                      } ${secondStep && item.step === 2 && '!bg-app-blue'}`}
                    ></span>
                  )}
                </div>
                <div>
                  <Title tag="h3" underline={false} size="md">
                    {item.title}
                  </Title>
                  <p className="break-before-auto text-sm sm:text-base">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </Card>
        <Button className="bg-app-sky-blue w-full sm:w-[344px]">
          {!firstStep
            ? 'Get Started'
            : thirdStep
            ? 'Schedule a meeting'
            : 'Continue'}
        </Button>
      </div>
      <div className="absolute bottom-0 z-0">
        <div
          style={{
            clipPath: 'polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)',
          }}
          className="app-banner h-72 bg-[url(/images/app-dashboard.png)] bg-no-repeat bg-cover bg-center "
        ></div>
      </div>
    </div>
  );
};

export default DashBoardPage;
DashBoardPage.getLayout = (page) => {
  return <MainLayout type="application">{page}</MainLayout>;
};

const appMenu = [
  {
    step: 1,
    title: 'Your personal information',
    content:
      'Your basic personal information help us to offer the better option to your case',
  },
  {
    step: 2,
    title: 'Up documentation',
    content:
      'Your basic personal information help us to offer the better option to your case',
  },
  {
    step: 3,
    title: 'Date with our lawyers',
    content:
      'Your basic personal information help us to offer the better option to your case',
  },
];
