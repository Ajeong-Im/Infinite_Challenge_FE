import Link from "next/link";
import HeaderIcon from "../../../../public/svgs/header-icon.svg";

export default function NavBar() {
  return (
    <>
      <div className=" bg-gray-800">
        <Link href="/">
          <HeaderIcon width={138} height={25} />
        </Link>
      </div>
    </>
  );
}
