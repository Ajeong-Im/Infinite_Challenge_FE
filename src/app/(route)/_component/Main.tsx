import Title from "./atoms/Title";
import SearchBar from "./molecules/SearchBar";

export default function Main() {
  return (
    <div className="bg-[#CAE9FF] w-full h-[460px] flex flex-col justify-center items-center ">
      <div className="mb-10">
        <Title />
      </div>
      <SearchBar />
    </div>
  );
}
