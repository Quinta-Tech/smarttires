import { useContext } from 'react';
import TireDemo from '../TireDemo/TireDemo';
import { fr610Data } from '../TireDemo/data/fr610Data';
import { LanguageContext } from '../LanguageContext';

export default function FR610Demo() {
  const { language } = useContext(LanguageContext);
  const currentData = fr610Data[language];

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
