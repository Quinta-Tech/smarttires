import { useContext } from 'react';
import TireDemo from '../TireDemo/TireDemo';
import { rlb400Data } from '../TireDemo/data/rlb400Data';
import { LanguageContext } from '../LanguageContext';

export default function RLB400Demo() {
  const { language } = useContext(LanguageContext);
  const currentData = rlb400Data[language];

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
