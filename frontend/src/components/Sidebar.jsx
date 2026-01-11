import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();

  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-full min-[600px]:max-lg:w-20 lg:w-72 border-r border-base-content/5 flex flex-col transition-all duration-200 bg-base-100">
      <div className="border-b border-base-content/5 w-full p-5">
        <div className="flex items-center gap-2">
          <Users className="size-6 text-primary" />
          <span className="font-medium block min-[600px]:max-lg:hidden lg:block text-base-content/80">Contacts</span>
        </div>
        {/* TODO: Online filter toggle */}
        <div className="mt-3 hidden lg:flex items-center gap-2">
          <label className="cursor-pointer flex items-center gap-2 hover:opacity-80 transition-opacity">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm checkbox-primary rounded-md"
            />
            <span className="text-sm text-base-content/60 font-medium">Show online only</span>
          </label>
          <span className="text-xs text-base-content/40">({onlineUsers.length - 1} online)</span>
        </div>
      </div>

      <div className="overflow-y-auto w-full py-3 px-2 space-y-3">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full p-3 flex items-center gap-3
              min-[600px]:max-lg:w-14 min-[600px]:max-lg:h-14 min-[600px]:max-lg:mx-auto min-[600px]:max-lg:justify-center min-[600px]:max-lg:p-0
              lg:w-full lg:h-auto lg:mx-0 lg:justify-start lg:p-3
              rounded-xl min-[600px]:max-lg:rounded-full lg:rounded-xl
              hover:bg-base-300 transition-colors
              ${selectedUser?._id === user._id ? "bg-base-300 ring-1 ring-base-300" : ""}
            `}
          >
            <div className="relative lg:mx-0 min-[600px]:max-lg:mx-auto">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.name}
                className="size-12 object-cover rounded-full ring-2 ring-base-100"
              />
              {onlineUsers.includes(user._id) && (
                <span
                  className="absolute bottom-0 right-0 size-3 bg-green-500 
                  rounded-full ring-2 ring-base-100 animate-pulse"
                />
              )}
            </div>

            {/* User info - visible on Mobile and Desktop, hidden on Tablet */}
            <div className="block min-[600px]:max-lg:hidden lg:block text-left min-w-0">
              <div className="font-medium truncate text-base-content/90">{user.fullName}</div>
              <div className="text-sm text-base-content/50">
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center text-base-content/40 py-8">No online users</div>
        )}
      </div>
    </aside>
  );
};
export default Sidebar;