function MonthlySalesTrendChart({ data }) {
  const maxValue = Math.max(...data.map((item) => item.value));

  const points = data
    .map((item, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - (item.value / maxValue) * 80;

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="w-full">
      
      <div className="h-64 relative">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          {/* Grid Lines */}
          {[20, 40, 60, 80].map((line) => (
            <line
              key={line}
              x1="0"
              y1={line}
              x2="100"
              y2={line}
              stroke="#e5e7eb"
              strokeWidth="0.4"
            />
          ))}

          {/* Area */}
          <polygon
            points={`0,100 ${points} 100,100`}
            fill="#dbeafe"
          />

          {/* Line */}
          <polyline
            points={points}
            fill="none"
            stroke="#2563eb"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Months */}
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        {data.map((item) => (
          <span key={item.month}>
            {item.month}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MonthlySalesTrendChart;