import { config } from "dotenv";
import type { StreamOutput } from "livekit-server-sdk";
import { EgressClient, StreamProtocol } from "livekit-server-sdk";

config();

const twitchStreamKey = process.env.TWITCH_STREAM_KEY;

const egressClient = new EgressClient(
	process.env.LIVEKIT_HOST,
	process.env.LIVEKIT_API_KEY,
	process.env.LIVEKIT_API_SECRET
);

const output: StreamOutput = {
	protocol: StreamProtocol.RTMP,
	urls: [`rtmp://live.twitch.tv/app/${twitchStreamKey}`],
};

try {
	const info = await egressClient.startWebEgress(process.env.WEBSITE_TO_STREAM, output);
	console.log(info.egressId);
} catch (error) {
	console.log(error);
}
