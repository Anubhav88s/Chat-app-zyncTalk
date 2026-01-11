import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50 backdrop-blur-lg border-l border-base-content/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 size-64 bg-primary/5 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 size-64 bg-secondary/5 rounded-full filter blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-md text-center space-y-6 relative z-10">
        {/* Logo Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative group">
            <div
              className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center
             justify-center animate-bounce shadow-xl ring-4 ring-base-100/50"
            >
              <img
                src="/logo.png"
                alt="zyncTalk Logo"
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">
            Welcome to zyncTalk!
          </h2>
          <p className="text-base-content/60 text-lg">
            Select a conversation from the sidebar to start chatting
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoChatSelected;