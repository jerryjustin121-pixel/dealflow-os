type Bar = { label: string; height: number };

type RevenueBarChartProps = {
  data: readonly Bar[];
};

export function RevenueBarChart({ data }: RevenueBarChartProps) {
  return (
    <div className="relative h-[220px] overflow-hidden rounded-[14px] bg-gradient-to-b from-[rgba(79,70,229,0.16)] to-[rgba(15,23,42,0.9)] p-3">
      <div className="flex h-full items-end gap-2">
        {data.map((bar) => (
          <div key={bar.label} className="relative flex min-h-5 flex-1 flex-col justify-end">
            <div
              className="rounded-t-lg bg-gradient-to-b from-[#818cf8] to-[#4f46e5]"
              style={{ height: `${bar.height}%` }}
            />
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[0.72rem] text-white">{bar.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
