export default function GrayButton({ label }: { label: string }) {
  return (
    <p className="text-xs sm:text-sm text-center text-app-gray-500 bg-app-gray-200 px-4 py-1 rounded-md font-medium">
      {label}
    </p>
  );
}
