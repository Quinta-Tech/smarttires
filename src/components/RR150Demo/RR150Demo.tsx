import { useContext } from 'react';
import TireDemo from '../TireDemo/TireDemo';
import { rr150Data } from '../TireDemo/data/rr150Data';
import { LanguageContext } from '../LanguageContext';

export default function RR150Demo() {
  const { language } = useContext(LanguageContext);
  const currentData = rr150Data[language];

  return (
    <TireDemo
      modelName={currentData.modelName}
      subtitle={currentData.subtitle}
      description={currentData.description}
      heroImage={currentData.heroImage}
      slides={currentData.slides}
      specifications={currentData.specifications}
    />
  );
}
