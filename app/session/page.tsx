import dynamic from "next/dynamic";

const HMSPrebuilt = dynamic(
	() => import("@100mslive/roomkit-react").then((mod) => mod.HMSPrebuilt),
	{ ssr: false } // This will load the component only on client side
);

export default function Home() {
	return (
		<div className="h-screen">
			<HMSPrebuilt roomCode="fwf-ghpj-mts" />
		</div>
	);
}
