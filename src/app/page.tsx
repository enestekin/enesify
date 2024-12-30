import Sidebar from "@/components/Sidebar";
import ToggleTheme from "@/components/ToggleTheme";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <ToggleTheme />
    </main>
  );
}
