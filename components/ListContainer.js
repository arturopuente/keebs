import { Header, NavBar } from "./index";

export default function ListContainer({ children }) {
  return (
    <div className={"max-w-screen-lg mx-auto px-5 pb-10"}>
      <Header />
      <NavBar />
      {children}
    </div>
  );
}
