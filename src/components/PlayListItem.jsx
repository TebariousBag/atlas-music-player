export default function PlayListItem() {
  return (
    <div className="hover:bg-picton-blue flex cursor-pointer items-center justify-between rounded-lg p-2">
      <div>
        <p className="text-french-blue font-medium dark:text-gray-300">
          Painted in Blue
        </p>
        <p className="text-sm text-slate-500 dark:text-gray-400">Soul Canvas</p>
      </div>
      <div>
        <p className="text-sm text-slate-500">5:55</p>
      </div>
    </div>
  );
}
