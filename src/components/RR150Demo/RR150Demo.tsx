import TireDemo from '../TireDemo/TireDemo';
import { rr150Data } from '../TireDemo/data/rr150Data';

export default function RR150Demo() {
  return (
    <TireDemo
      modelName={rr150Data.modelName}
      subtitle={rr150Data.subtitle}
      description={rr150Data.description}
      heroImage={rr150Data.heroImage}
      slides={rr150Data.slides}
      specifications={rr150Data.specifications}
    />
  );
}
