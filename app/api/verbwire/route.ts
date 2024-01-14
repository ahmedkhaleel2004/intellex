const verbwire = require("verbwire")(process.env.VERBWIRE_API_KEY);
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";

async function mintSimpleContractNFT(walletAddress: string) {
	let mintParams: {
		filePath: fs.ReadStream;
		name: string;
		description: string;
		data: string;
		contractAddress: string | undefined;
		chain: string | undefined;
		recipientAddress?: string; // This is now an optional property
	} = {
		filePath: fs.createReadStream(
			// hardcoded for now
			"C:\\Users\\ahmed\\Desktop\\PC\\Repos\\intellex\\public\\goldbadge.png"
		),
		name: "the intellex gold award",
		description: "intellex nft description",
		data: '[{"trait_type":"TraitType1","value":"TraitValue1"},{"trait_type":"TraitType2","value":"TraitValue2"}]',
		contractAddress: process.env.CONTRACT_ADDRESS,
		chain: process.env.CHAIN,
	};

	if (walletAddress) {
		mintParams.recipientAddress = walletAddress;
	}

	return verbwire.mint.mintFromFile(mintParams);
}

export async function POST(req: NextRequest, res: NextResponse) {
	const { walletAddress } = await req.json();

	//mintNFT(walletAddress).then(async function (response) {
	mintSimpleContractNFT(walletAddress).then(async function (response) {
		console.log("Response: ", response);

		if (
			!response.transaction_details ||
			!response.transaction_details.transactionID
		) {
			console.log("Data: ", response.response.data);
			const error = response.response.data;
			return NextResponse.error();
		} else {
			const transactionId = response.transaction_details.transactionID;
			const transactionHash = response.transaction_details.transactionHash;
			console.log("Transaction ID: ", transactionId);
			return NextResponse.json(response);
		}
	});
	return NextResponse.json("error!!!");
}
