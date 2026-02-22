import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar"
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";


const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-base-200 chat-bg">
      <div className="flex items-center justify-center pt-20 px-4 mb-4">
        <div className="bg-base-100/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-base-content/20 border border-base-content/10 w-full max-w-7xl h-[calc(100vh-6rem)] overflow-hidden">
          <div className="flex h-full">
            <div className={`h-full w-full min-[600px]:max-lg:w-20 lg:w-80 border-r border-base-content/10 
              ${!selectedUser ? "block" : "hidden min-[600px]:block"}`}
            >
              <Sidebar />
            </div>

            <div className={`flex-1 ${!selectedUser ? "hidden min-[600px]:flex" : "flex"} h-full`}>
              {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;