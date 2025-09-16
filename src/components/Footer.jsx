export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="text-aero p-8 text-center dark:text-gray-400">
      &copy; {year} Atlas School
    </div>
  );
}
