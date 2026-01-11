import { THEMES } from "../constants/index";
import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";


const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-semibold text-primary">Theme</h2>
          <p className="text-sm text-base-content/70">Choose a theme for your chat interface</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Theme Selection */}
          <div className="space-y-4">
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-4 gap-3">
              {THEMES.map((t) => (
                <button
                  key={t}
                  className={`
                    group flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all duration-300
                    ${theme === t ? "bg-base-200 ring-2 ring-primary ring-offset-2 ring-offset-base-100 shadow-md" : "hover:bg-base-200/50 hover:scale-105 active:scale-95 hover:shadow-sm"}
                  `}
                  onClick={() => setTheme(t)}
                >
                  <div className="relative h-10 w-full rounded-lg overflow-hidden border border-base-300 group-hover:border-primary/50 transition-colors" data-theme={t}>
                    <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                      <div className="rounded bg-primary opacity-80 group-hover:opacity-100 transition-opacity"></div>
                      <div className="rounded bg-secondary opacity-80 group-hover:opacity-100 transition-opacity"></div>
                      <div className="rounded bg-accent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                      <div className="rounded bg-neutral opacity-80 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium truncate w-full text-center text-base-content/80 group-hover:text-primary transition-colors">
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Preview */}
          <div className="lg:sticky lg:top-24 h-fit">
            <h3 className="text-lg font-semibold mb-3">Preview</h3>
            <div className="rounded-xl border border-white/10 overflow-hidden bg-base-100/50 backdrop-blur-3xl shadow-lg relative">
              <div className="p-4 bg-base-200/50">
                <div className="max-w-md mx-auto">
                  {/* Mock Chat UI */}
                  <div className="bg-base-100 rounded-3xl shadow-sm overflow-hidden border border-base-300 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]">
                    {/* Chat Header */}
                    <div className="px-4 py-3 border-b border-base-300 bg-base-100/80 backdrop-blur-md">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-primary flex items-center justify-center text-primary-content font-bold shadow-sm">
                          J
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm">John Doe</h3>
                          <div className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-success"></span>
                            <p className="text-xs text-base-content/70">Online</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="p-4 space-y-4 min-h-[240px] max-h-[240px] overflow-y-auto bg-base-100/50 custom-scrollbar">
                      {PREVIEW_MESSAGES.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`
                              max-w-[85%] rounded-2xl p-3 shadow-sm transition-all duration-300
                              ${message.isSent ? "bg-primary text-primary-content rounded-tr-none hover:brightness-110" : "bg-base-200 rounded-tl-none hover:bg-base-300"}
                            `}
                          >
                            <p className="text-sm leading-relaxed">{message.content}</p>
                            <p
                              className={`
                                text-[10px] mt-1.5 font-medium
                                ${message.isSent ? "text-primary-content/70" : "text-base-content/70"}
                              `}
                            >
                              12:00 PM
                            </p>
                          </div>
                        </div>
                      ))}

                      {/* Typing Indicator */}
                      <div className="flex justify-start">
                        <div className="bg-base-200 rounded-2xl p-3 rounded-tl-none shadow-sm flex items-center gap-1 w-16 h-10">
                          <span className="w-1.5 h-1.5 bg-base-content/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                          <span className="w-1.5 h-1.5 bg-base-content/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                          <span className="w-1.5 h-1.5 bg-base-content/40 rounded-full animate-bounce"></span>
                        </div>
                      </div>
                    </div>

                    {/* Chat Input */}
                    <div className="p-4 border-t border-base-300 bg-base-100">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          className="input input-bordered flex-1 text-sm h-11 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all focus:border-primary/50"
                          placeholder="Type a message..."
                          value="This is a preview"
                          readOnly
                        />
                        <button className="btn btn-primary h-11 w-11 rounded-2xl shadow-md hover:scale-105 active:scale-95 transition-transform">
                          <Send size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingsPage;