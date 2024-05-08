import { BackgroundBeams } from "~/components/ui/background-beams";
import { GlobeDemo } from "./_components/GlobeDemo";

export default function HomePage() {
  return (
    <main >
      <div>
        <BackgroundBeams className="sticky h-screen"/>
      </div>
      <div>
        <GlobeDemo />
      </div>
    </main>
  );
}
