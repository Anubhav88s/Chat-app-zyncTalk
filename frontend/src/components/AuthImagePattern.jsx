const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 overflow-hidden relative">
      <div className="absolute inset-0 bg-linear-to-br from-base-200 to-primary/10" />

      {/* Floating Bubbles */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Top Left - Text Bubble */}
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/10 backdrop-blur-md rounded-2xl rounded-tr-none animate-bounce delay-100 duration-[3s] flex items-center justify-center">
          <div className="w-12 h-2 bg-primary/20 rounded-full animate-pulse" />
        </div>

        {/* Top Right - Icon Bubble */}
        <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-base-100/50 backdrop-blur-xl rounded-2xl rounded-tl-none shadow-lg animate-[pulse_4s_ease-in-out_infinite] delay-700 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-primary/20" />
        </div>

        {/* Center - Large Bubble */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 backdrop-blur-sm rounded-full animate-[ping_7s_cubic-bezier(0,0,0.2,1)_infinite]" />

        {/* Bottom Left - Typing Bubble */}
        <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2 translate-y-1/2 w-28 h-16 bg-base-100/60 backdrop-blur-md rounded-2xl rounded-bl-none shadow animate-bounce delay-2000 duration-[4s] flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
          <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
          <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" />
        </div>

        {/* Bottom Right - Small Bubble */}
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-primary/15 backdrop-blur-md rounded-2xl rounded-br-none animate-[bounce_5s_infinite] delay-500 flex items-center justify-center opacity-80">
          <svg className="w-6 h-6 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      </div>

      <div className="max-w-md text-center relative z-10 glass rounded-3xl p-8 border border-white/10 shadow-xl backdrop-blur-lg">
        <h2 className="text-3xl font-bold mb-4 text-base-content">{title}</h2>
        <p className="text-base-content/70 leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;