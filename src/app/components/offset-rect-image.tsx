import Image from "next/image";

export default function RectPicture() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Gray box positioned diagonally behind */}
      <div className="absolute w-72 h-96 bg-app-gray-300 transform -translate-x-4 translate-y-4 shadow-lg dark:shadow-custom-gray"></div>

      {/* Main square image */}
      <div className="relative w-72 h-96 shadow-xl dark:shadow-custom-gray overflow-hidden">
        <img
          src="/landing-page-2025/assets/full-body.jpeg"
          alt="Square image with diagonal offset"
          width={256}
          height={256}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
