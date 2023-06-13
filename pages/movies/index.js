import Link from "next/link";
import Image from "next/image";

export default function Movies({ count, setCount }) {
  return (
    <>
      <h1>Movies (count {count})</h1>
      <button onClick={() => setCount(count + 1)}>Increment by 1</button>
      <ul>
        List of movies
        <Link href="/movies/hulk">
          <li>Zhe Incredible Hulk (German Version)</li>
        </Link>
        <Link href="/movies/spiderman">
          <li>Spiderman 1-25</li>
        </Link>
      </ul>
      <Image
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
        alt="Theater"
        width={640}
        height={427}
      />
    </>
  );
}
