import Image from "next/image";

export default function Picture() {
  return (
    <div>
      {/* Gray box positioned diagonally behind */}
      <div className="absolute w-64 h-64 bg-app-gray-300 transform translate-x-4 translate-y-4 shadow-lg dark:shadow-custom-gray"></div>

      {/* Main square image */}
      <div className="relative w-64 h-64 shadow-xl dark:shadow-custom-gray overflow-hidden">
        <img
          src="/assets/profile-pic.png"
          alt="Square image with diagonal offset"
          width={256}
          height={256}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
