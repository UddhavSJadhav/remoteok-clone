import { Nunito, Pacifico } from "next/font/google";

export const nunito = Nunito({ subsets: ["latin"] });
export const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});
