import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Intellex",
	description: "Decentralized skill sharing platform",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="fixed h-screen w-full bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-950 from-zinc-50 to-zinc-300 -z-10" />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
