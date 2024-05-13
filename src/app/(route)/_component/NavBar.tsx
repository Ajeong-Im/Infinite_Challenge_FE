import Link from "next/link";
import HeaderIcon from "../../../../public/svgs/header-icon.svg";

export default function NavBar() {
  return (
    <>
      <div className="flex items-center justify-between w-full h-[56px]">
        <div className="flex-1 flex justify-center">
          <Link href="/">
            <HeaderIcon width={138} height={25} />
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <Link href="/favorites">
            <div>즐겨찾기</div>
          </Link>
        </div>
      </div>
    </>
  );
}
