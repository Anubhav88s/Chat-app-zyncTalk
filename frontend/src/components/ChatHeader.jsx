import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="p-2.5 border-b border-base-content/5 bg-base-100/50 backdrop-blur-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="avatar">
            <div className="size-10 rounded-full relative ring-2 ring-primary/10">
              <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
            </div>
          </div>

          {/* User info */}
          <div>
            <h3 className="font-semibold">{selectedUser.fullName}</h3>
            <p className="text-sm text-base-content/70 flex items-center gap-1.5">
              {onlineUsers.includes(selectedUser._id) ? (
                <>
                  <span className="size-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs">Online</span>
                </>
              ) : (
                <span className="text-xs text-base-content/40">Offline</span>
              )}
            </p>
          </div>
        </div>

        {/* Close button */}
        <button onClick={() => setSelectedUser(null)} className="btn btn-ghost btn-sm btn-circle rounded-full ring-1 ring-base-content/5 hover:bg-base-200 transition-all">
          <X size={18} />
        </button>
      </div>
    </div>
  );
};
export default ChatHeader;