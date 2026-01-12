import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X } from "lucide-react";
import toast from "react-hot-toast";


const MessageInput = () => {
  const [text, setText] = useState("")
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessages } = useChatStore();

  const handleImageChange = (e) => {

    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("please select an image file");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result)
    }
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;
    try {
      await sendMessages({
        text: text.trim(),
        image: imagePreview
      })

      //clear form 
      setText("")
      setImagePreview(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Failed to send message: ", error);
    }
  };

  return (

    <div className="p-4 w-full border-t border-base-content/5 bg-base-100/50 backdrop-blur-lg">
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative group">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-xl border border-base-content/10 shadow-sm"
            />
            <button
              onClick={removeImage}
              className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-base-100 border border-base-content/10
              flex items-center justify-center text-base-content/60 hover:text-red-500 hover:bg-base-200 transition-colors shadow-sm"
              type="button"
            >
              <X className="size-3.5" />
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="flex items-center gap-3">
        <div className="flex-1 flex gap-2">
          {/* Input Container */}
          <div className="flex-1 flex items-center gap-2 bg-base-200/50 rounded-full border border-base-content/5 px-4 h-12 sm:h-14 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/50 transition-all">
            <input
              type="text"
              className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-sm sm:text-base placeholder:text-base-content/40"
              placeholder="Type a message..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageChange}
            />

            <button
              type="button"
              className={`flex btn btn-circle btn-sm btn-ghost hover:bg-transparent
                       ${imagePreview ? "text-emerald-500" : "text-base-content/40 hover:text-base-content/80"}`}
              onClick={() => fileInputRef.current?.click()}
            >
              <Image size={20} />
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-circle btn-primary shadow-md hover:scale-105 active:scale-95 transition-transform"
          disabled={!text.trim() && !imagePreview}
        >
          <Send size={20} className={text.trim() || imagePreview ? "ml-0.5" : ""} />
        </button>
      </form>
    </div>
  )
}

export default MessageInput