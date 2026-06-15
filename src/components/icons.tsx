import { SVGProps } from "react";
import { FaSteam, FaDiscord, FaXTwitter, FaYoutube, FaInstagram, FaPlaystation, FaXbox } from "react-icons/fa6";
import { Monitor } from "lucide-react";

export const SteamIcon = (props: SVGProps<SVGSVGElement>) => <FaSteam {...(props as any)} />;
export const DiscordIcon = (props: SVGProps<SVGSVGElement>) => <FaDiscord {...(props as any)} />;
export const XIcon = (props: SVGProps<SVGSVGElement>) => <FaXTwitter {...(props as any)} />;
export const YouTubeIcon = (props: SVGProps<SVGSVGElement>) => <FaYoutube {...(props as any)} />;
export const InstagramIcon = (props: SVGProps<SVGSVGElement>) => <FaInstagram {...(props as any)} />;
export const PlaystationIcon = (props: SVGProps<SVGSVGElement>) => <FaPlaystation {...(props as any)} />;
export const XboxIcon = (props: SVGProps<SVGSVGElement>) => <FaXbox {...(props as any)} />;
export const PCIcon = (props: SVGProps<SVGSVGElement>) => <Monitor {...(props as any)} />;

