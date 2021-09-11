import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appID = "b3e88bbf6869425196f84892746a05f5";
const token = "006b3e88bbf6869425196f84892746a05f5IADZmLaFhvZ9MO5KIkLoqVCe1rV2h4+0CBkFTwopN0eNLmTNKL8AAAAAEABgsZT+b0M+YQEAAQBvQz5h";

export const config = {
    mode: "rtc",
    codec: "vp8",
    appID: appID,
    token: token
};

export const useClient = createClient(config);

export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

export const channelName = "main";