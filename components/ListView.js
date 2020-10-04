import Link from "next/link";

export default function ListView({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.title}>
          <Link href={`/topic/${item.topic}`}>
            <a>
              <h2 className={"text-xl mb-2 font-medium hover:text-yellow-300"}>
                {item.title}
              </h2>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
