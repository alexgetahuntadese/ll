import { useMemo, memo } from 'react';

const generateStars = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.4 + 0.1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 5,
  }));

const generateShootingStars = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 80 + 10,
    y: Math.random() * 40,
    duration: Math.random() * 2 + 2,
    totalDelay: Math.random() * 12 + i * 5,
  }));

const StarField = memo(({ starCount = 50, shootingCount = 3 }: { starCount?: number; shootingCount?: number }) => {
  const stars = useMemo(() => generateStars(starCount), [starCount]);
  const shootingStars = useMemo(() => generateShootingStars(shootingCount), [shootingCount]);

  return (
    <>
      {/* Nebula glow layers */}
      <div
        className="absolute pointer-events-none rounded-full blur-[120px]"
        style={{
          width: '45%',
          height: '50%',
          left: '5%',
          top: '10%',
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.25) 0%, rgba(109,40,217,0.12) 50%, transparent 70%)',
          animation: 'nebula-drift 12s ease-in-out infinite alternate',
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full blur-[100px]"
        style={{
          width: '40%',
          height: '45%',
          right: '0%',
          top: '30%',
          background: 'radial-gradient(ellipse, rgba(167,139,250,0.2) 0%, rgba(124,58,237,0.1) 50%, transparent 70%)',
          animation: 'nebula-drift 15s ease-in-out 3s infinite alternate-reverse',
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full blur-[140px]"
        style={{
          width: '35%',
          height: '40%',
          left: '30%',
          bottom: '5%',
          background: 'radial-gradient(ellipse, rgba(192,132,252,0.18) 0%, rgba(147,51,234,0.08) 50%, transparent 70%)',
          animation: 'nebula-drift 18s ease-in-out 6s infinite alternate',
        }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `float-star ${star.duration}s ease-in-out ${star.delay}s infinite alternate`,
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={`shooting-${star.id}`}
          className="absolute pointer-events-none"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), rgba(168,130,255,0.6), transparent)',
            borderRadius: '9999px',
            animation: `shooting-star ${star.duration}s ease-in ${star.totalDelay}s infinite`,
            boxShadow: '0 0 6px 1px rgba(168,130,255,0.4)',
          }}
        />
      ))}
    </>
  );
});

export default memo(StarField);
