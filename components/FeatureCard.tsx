import React from "react";
import { Card, CardContent } from "./ui/card";

type FeatureCardProps = {
  title: string;
  description: string;
};

const FeatureCard = ({ title, description }: FeatureCardProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
