import { ResourceDirectory } from "@/components/ResourceDirectory";
import { StructuredData } from "@/components/StructuredData";
import { directoryStructuredData } from "@/lib/structured-data";

export default function Page() {
  return (
    <>
      <StructuredData data={directoryStructuredData("services")} />
      <ResourceDirectory section="services" />
    </>
  );
}
