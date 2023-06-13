import { Headline } from "../components/Headline";

export default function About({ count, setCount }) {
  return (
    <>
      <Headline name={`About (count ${count})`} />
      <button onClick={() => setCount(count + 1)}>Increment by 1</button>
    </>
  );
}
