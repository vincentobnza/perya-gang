import React, { useState } from "react";
import { LiveComments as LiveCommentsData } from "@/data/dummy-data";
import Image from "next/image";

export default function LiveComments() {
  const [comments, setComments] = useState(LiveCommentsData);
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setComments([
      ...comments,
      {
        id: `lc-${Date.now()}`, // Generate a unique id for the new comment
        avatar: "/default-avatar.png", // Replace with actual avatar if available
        username: "You",
        comment: input,
      },
    ]);
    setInput("");
  };

  return (
    <div className="w-full max-w-sm mx-auto h-96 -mt-2 bg-zinc-950 z-50 relative overflow-hidden">
      {/* Comments container */}

      <div className="h-full overflow-y-auto px-4 py-2 space-y-2 pb-18">
        {comments.map((comment, i) => (
          <div key={i} className="flex items-center space-x-3 ">
            <LiveCommentUserCard
              avatar={comment.avatar}
              username={comment.username ?? ""}
              comment={comment.comment}
            />
          </div>
        ))}
      </div>
      {/* Top Fade */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-zinc-950 to-transparent pointer-events-none z-10" />
      {/* bottom fade  */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none z-10" />
      {/* Bottom Input */}
      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="absolute bottom-0 border border-zinc-900 left-0 right-0 w-full px-4 py-2 backdrop-blur-2xl bg-zinc-900/70 rounded-full flex items-center space-x-2 z-20"
        >
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Write your comment..."
            className="flex-1 rounded-lg px-3 py-2 text-white outline-none text-sm font-semibold"
          />
        </form>
        <div className="flex items-center gap-x-4">
          <Image
            src="/paper-plane.svg"
            alt="Send"
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

const LiveCommentUserCard = ({
  avatar,
  username,
  comment,
}: {
  avatar: string;
  username: string;
  comment: string;
}) => {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={avatar}
        alt="User Avatar"
        className="w-8 h-8 rounded-full object-cover"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-zinc-500 text-xs font-bold">@{username}</h3>
        <span className="text-zinc-300 text-sm font-medium">{comment}</span>
      </div>
    </div>
  );
};

const HallOfLoaders = () => {
  return (
    <div className="w-full flex items-start space-y-4">
      <div className="text-main bg-zinc-900/20 rounded-full font-bold text-orange-400 px-4 py-2">
        Hall of Loaders
      </div>
    </div>
  );
};
