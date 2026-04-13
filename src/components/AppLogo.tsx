
type AppLogoProps = {
  compact?: boolean;
  className?: string;
  showText?: boolean;
};

const AppLogo = ({ compact = false, className = "", showText = true }: AppLogoProps) => {
  return (
    <div className={`flex min-w-0 items-center gap-3 ${className}`.trim()}>
      <img 
        src="/logo.svg" 
        alt="Simple Road" 
        className={`shrink-0 ${compact ? 'h-8 w-8' : 'h-10 w-10 sm:h-12 sm:w-12'}`}
      />
      {showText && !compact && (
        <div className="min-w-0 leading-tight">
          <div className="truncate text-xs font-black uppercase tracking-[0.18em] text-white sm:text-sm sm:tracking-[0.22em]">Simple Road</div>
          <div className="truncate text-[10px] text-white/60 sm:text-[11px]">Elite Education Platform</div>
        </div>
      )}
    </div>
  );
};

export default AppLogo;
