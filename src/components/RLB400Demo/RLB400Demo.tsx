import TireDemo from '../TireDemo/TireDemo';
import { rlb400Data } from '../TireDemo/data/rlb400Data';

export default function RLB400Demo() {
  return (
    <TireDemo
      modelName={rlb400Data.modelName}
      subtitle={rlb400Data.subtitle}
      description={rlb400Data.description}
      heroImage={rlb400Data.heroImage}
      slides={rlb400Data.slides}
      specifications={rlb400Data.specifications}
    />
  );
}
