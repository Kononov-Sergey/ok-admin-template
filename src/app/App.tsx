import Posts from "@/widgets/posts/Posts";
import { useCounter } from "./model/counter";

const App = () => {
  const { inc, count } = useCounter();
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center text-blue-500">Tailwind is working!</h1>
      <div className="text-2xl font-bold">{count}</div>
      <button className="bg-blue-500 text-white p-2 rounded-md cursor-pointer" onClick={inc}>
        Zustand is working! Click me!
      </button>
      <Posts />
    </main>
  );
};

export default App;
