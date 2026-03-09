const RainbowStrip = ({ className = "" }: { className?: string }) => (
  <div
    className={`h-[5px] ${className}`}
    style={{
      background: `linear-gradient(90deg,
        hsl(4, 65%, 48%) 0%, hsl(4, 65%, 48%) 16.6%,
        hsl(28, 80%, 52%) 16.6%, hsl(28, 80%, 52%) 33.2%,
        hsl(46, 88%, 50%) 33.2%, hsl(46, 88%, 50%) 49.8%,
        hsl(145, 63%, 42%) 49.8%, hsl(145, 63%, 42%) 66.4%,
        hsl(204, 60%, 44%) 66.4%, hsl(204, 60%, 44%) 83%,
        hsl(282, 44%, 47%) 83%, hsl(282, 44%, 47%) 100%
      )`,
    }}
  />
);

export default RainbowStrip;
