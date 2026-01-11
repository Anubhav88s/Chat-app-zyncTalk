import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar"
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";


const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <div className={`h-full w-full min-[600px]:max-lg:w-20 lg:w-72 border-r border-base-300 
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