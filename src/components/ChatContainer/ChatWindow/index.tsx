import React, { FC } from "react";
import SingleChatContainer from "../SingleChatContainer";

interface Props {
	className?: string;
	messages: any;
}

interface Message {
	userId: string;
	groupId: string;
	messageType: "Text" | "Image" | "Video" | "File";
	message: string;
	createdAt: Date;
}

const ChatContainer: FC<Props> = ({ className = "", messages }) => {
	return (
		<>
			<div className={`bg-white h-full justify-end flex flex-col ${className}`}>
				{messages.map((message: Message, index: number) => (
					<SingleChatContainer
						key={index}
						sender={false}
						name=""
						message={message.message}
						time={new Date(message.createdAt)}
					/>
				))}
			</div>
		</>
	);
};

export default ChatContainer;
