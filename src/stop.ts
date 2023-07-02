import { config } from "dotenv";
import { EgressClient } from "livekit-server-sdk";

config();
const egressClient = new EgressClient(
	process.env.LIVEKIT_HOST,
	process.env.LIVEKIT_API_KEY,
	process.env.LIVEKIT_API_SECRET
);
try {
	const info = await egressClient.stopEgress(process.env.LIVEKIT_EGRESS_ID);
	console.log(info);
} catch (error) {
	console.log(error);
}
