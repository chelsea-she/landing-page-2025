import Image from "next/image";

export default function RectPicture() {
  return (
    <div className="relative">
      {/* Gray box positioned diagonally behind */}
      <div className="absolute w-[320px] h-[430px] bg-app-gray-300 transform translate-y-4 shadow-lg dark:shadow-custom-gray"></div>

      {/* Main square image */}
      <div className="relative w-75 h-100 shadow-xl dark:shadow-custom-gray overflow-hidden transform translate-x-4">
        <Image
          src="/assets/full-body.jpeg"
          alt="Rectangle image with diagonal offset"
          width={256}
          height={256}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
