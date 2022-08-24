import { HttpClient } from "../../lib";

interface Message {
	userId: string;
	groupId: string;
	messageType: "Text" | "Image" | "Video" | "File";
	message: string;
}

interface MessageResponse {
	userId: string;
	groupId: string;
	messageType: "Text" | "Image" | "Video" | "File";
	message: string;
	createdAt: Date;
}

class Chat extends HttpClient {
	public async getRecentChatsByGroup(id: string): Promise<MessageResponse[]> {
		return this.get(`/message?groupId=${id}`);
	}
}

export default Chat;
