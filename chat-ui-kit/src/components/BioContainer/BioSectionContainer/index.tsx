import React, { FC, useEffect, useState } from "react";
import { useChattGator } from "../../../contexts";
import { useSearch } from "../../../hooks";
import { BioDescription, BioHeader, BioImage, BioInfo, BioParticipation } from "../../../index";
import { RecentChats as GroupResponseService, UserResponse as UserReponseService } from "../../../utils";
import { Loading } from "../../Misc";

interface Props {
	className?: string;
}

interface Member {
	_id: string;
	name: string;
}

interface Message {
	userId: string;
	groupId: string;
	messageType: "Text" | "Image" | "Video" | "File";
	message: String;
	createdAt: Date;
}

interface UserResponse {
	projectId: string;
	name: string;
	userId: string;
	avatar: string;
	userName: string;
	bio: string;
	_id: string;
	createdAt: string;
}

interface GroupMembersResponse {
	_id: string;
	projectId: string;
	name: string;
	description: string;
	isGroup: boolean;
	admins: Member[];
	membersList: Member[];
	messages: Message[];
	createdAt: string;
}

const ProfileContainer: FC<Props> = ({ className = "" }) => {
	const { user: info, isLoading, profileDetails } = useChattGator();
	const [isFetching, setIsFetching] = useState<boolean>(true);
	const [bio, setBio] = useState<any>();

	useEffect(() => {
		if (isLoading) return;
		const getData = async () => {
			let data = null;
			const useResponseService = new UserReponseService();
			const groupResponseService = new GroupResponseService();
			if (!profileDetails) return;
			if (profileDetails.isGroup) data = await groupResponseService.getGroupById(profileDetails.id);
			else data = await useResponseService.getUserById(info?._id);

			setBio(data);
			setIsFetching(false);
		};
		getData();
	}, [info?._id, isLoading, profileDetails]);

	return (
		<section className={`lg:col-span-2 ${className}`}>
			<div className="h-screen">
				<div className="bg-blue-50 min-h-full">
					<BioHeader isGroup={profileDetails?.isGroup ?? false} />
					{isLoading && isFetching ? (
						<div className="flex items-center justify-center pt-4 lg:pt-8 space-x-2 text-blue-600">
							<Loading className="w-5 h-5 lg:w-6 lg:h-6" />
							<span className="text-sm lg:text-base">Loading Bio Information</span>
						</div>
					) : (
						<>
							<BioImage
								link={
									bio?.avatar ??
									`https://ui-avatars.com/api/name=${bio?.name ?? "Unknown Name"}?&background=random`
								}
							/>
							{!profileDetails?.isGroup ? (
								<BioInfo
									name={bio?.name ?? "unknown_name"}
									username={bio?.userName}
								/>
							) : (
								<BioInfo
									name={bio?.name ?? "sdnajkdasn"}
									NoOfParticipates={bio?.membersList.length ?? 0}
								/>
							)}
							<BioDescription description={bio?.bio ?? bio?.description} />
							{profileDetails?.isGroup && (
								<>
									<hr className="border-slate-50" />
									<BioParticipation
										adminList={bio?.admins ?? []}
										memberList={bio?.membersList ?? []}
									/>
								</>
							)}
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default ProfileContainer;
