import { Suspense } from "react";
import { ResourceDirectory } from "@/components/ResourceDirectory";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="page-loading" role="status">
          Loading resources…
        </div>
      }
    >
      <ResourceDirectory section="livelihood" />
    </Suspense>
  );
}
