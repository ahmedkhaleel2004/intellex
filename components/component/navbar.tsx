"use client";
import * as React from "react";
import { ModeToggle } from "./mode-toggle";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import Image from "next/image";
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuLink,
	NavigationMenuItem,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navbar = () => {
	const mainNavItems = ["About", "Features", "Contact"];
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 50;
			if (isScrolled !== scrolled) {
				setScrolled(!scrolled);
			}
		};

		document.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, [scrolled]);

	const handleNavClick = (
		event: React.MouseEvent<HTMLAnchorElement>,
		id: string
	) => {
		event.preventDefault();
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		(event.target as HTMLAnchorElement).blur();
	};

	return (
		<NavigationMenu
			className={`sticky top-0 w-full bg-transparent max-w-none items-center mb-2 px-4 py-4 backdrop-blur-lg transition-colors duration-300 ${
				scrolled && "bg-black bg-opacity-[0.2] border-b border-border/80 "
			}`}
		>
			<div className="max-w-[60%] items-center flex w-full justify-between">
				<Link className="font-bold text-2xl" href="/">
					<div className="flex align-bottom items-center">
						<Image
							src="/intellex_logo.svg"
							width={40}
							height={40}
							alt="Intellex Logo"
							className="w-8 h-8 mr-2"
						/>
						<p className="pt-0.5">Intellex</p>
					</div>
				</Link>

				<NavigationMenuList className="space-x-4">
					{mainNavItems.map((item, index) => (
						<NavigationMenuItem key={index}>
							<Link href={`#${item.toLowerCase()}`} legacyBehavior passHref>
								<NavigationMenuLink
									className={` bg-transparent dark:hover:bg-foreground/20 hover:text-foreground ${navigationMenuTriggerStyle()}`}
									onClick={(event: any) =>
										handleNavClick(event, item.toLowerCase())
									}
								>
									{item}
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					))}
					<ModeToggle />
				</NavigationMenuList>
			</div>
		</NavigationMenu>
	);
};

export default Navbar;
