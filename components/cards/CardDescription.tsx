import { Card } from '@material-tailwind/react';
import React from 'react';
import Title from '../text/Title';

interface ICard {
  title: string;
  description: string;
}
const CardDescription: React.FC<ICard> = ({ title, description }) => {
  return (
    <Card className="sm:max-w-[250px] sm:min-h-[220px] px-6 py-12">
      <Title tag="h4" underline={false} size="md">
        {title}
      </Title>
      <p>{description}</p>
    </Card>
  );
};

export default CardDescription;
