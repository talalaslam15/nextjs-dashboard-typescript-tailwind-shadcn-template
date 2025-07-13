import { DarkModeToggle } from "@/components/DarkModeToggle";

export default function Home() {
  return (
    <div className="grid place-items-center h-screen">
      <h1 className="text-3xl font-bold">Hello World!</h1>
      <div className="fixed top-2 right-2">
        <DarkModeToggle />
      </div>
    </div>
  );
}
