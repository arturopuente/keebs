import Link from "next/link";

export default function ListView({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.title} className={"flex-row mb-3"}>
          <Link href={`/topic/${item.topic}`}>
            <a className={"inline-block"}>
              <h2 className={"text-xl mb-2 font-medium hover:text-yellow-300"}>
                {item.title}
              </h2>
            </a>
          </Link>
          <div className={"space-x-2"}>
            {item.pages.map(page => (
              <a
                key={page.link}
                className={
                  "inline-block rounded bg-gray-700 border-gray-600 border-2 px-3 py-1 text-lg"
                }
                href={page.link}
                target="_blank"
              >
                {page.number}
              </a>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
