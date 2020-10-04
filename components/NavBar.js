import Link from "next/link";

const options = [
  {
    path: "/gb",
    name: "Group Buys"
  },
  {
    path: "/ic",
    name: "Interest Checks"
  }
];

export default function NavBar() {
  return (
    <div className={"mt-2 flex space-x-3"}>
      {options.map(opt => (
        <div
          className={"text-xl text-green-300 hover:text-yellow-300"}
          key={opt.path}
        >
          <Link href={opt.path}>
            <a>{opt.name}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
