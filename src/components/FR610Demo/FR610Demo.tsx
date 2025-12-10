import TireDemo from '../TireDemo/TireDemo';
import { fr610Data } from '../TireDemo/data/fr610Data';

export default function FR610Demo() {
  return (
    <TireDemo
      modelName={fr610Data.modelName}
      subtitle={fr610Data.subtitle}
      description={fr610Data.description}
      heroImage={fr610Data.heroImage}
      slides={fr610Data.slides}
      specifications={fr610Data.specifications}
    />
  );
}
