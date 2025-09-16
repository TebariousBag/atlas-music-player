export default function PlayListItem() {
  return (
    <div className="flex cursor-pointer items-center justify-between rounded-lg hover:bg-gray-100">
      <div>
        <p className="font-medium">Painted in Blue</p>
        <p className="text-sm text-slate-500">Soul Canvas</p>
      </div>
      <div>
        <p className="text-sm text-slate-500">5:55</p>
      </div>
    </div>
  );
}
