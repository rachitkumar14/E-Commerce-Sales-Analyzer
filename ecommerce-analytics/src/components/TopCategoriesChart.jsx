const colors = [
  "#2563eb",
  "#7c3aed",
  "#10b981",
  "#f59e0b",
  "#ef4444",
];

function TopCategoriesChart({ data }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const segments = data.map((item, index) => {
    const previousValues = data
      .slice(0, index)
      .reduce((sum, category) => sum + category.value, 0);

    const start = (previousValues / total) * 100;
    const end = ((previousValues + item.value) / total) * 100;

    return {
      name: item.name,
      value: item.value,
      color: colors[index % colors.length],
      start,
      end,
    };
  });

  const gradient = segments
    .map(
      (item) =>
        `${item.color} ${item.start}% ${item.end}%`
    )
    .join(", ");

  return (
    <div className="flex items-center justify-center gap-8">
      
      {/* Donut Chart */}
      <div
        className="w-44 h-44 rounded-full relative"
        style={{
          background: `conic-gradient(${gradient})`,
        }}
      >
        <div className="absolute inset-8 bg-white rounded-full flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-gray-800">
            {total}%
          </span>

          <span className="text-xs text-gray-500">
            Total Sales
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3">
        {segments.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-2"
          >
            <span
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: item.color,
              }}
            />

            <span className="text-sm text-gray-600">
              {item.name}
            </span>

            <span className="text-sm font-semibold text-gray-800">
              {item.value}%
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default TopCategoriesChart;