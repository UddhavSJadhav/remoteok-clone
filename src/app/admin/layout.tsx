import { Metadata } from "next";
import Navbar from "./navbar";

export const metadata: Metadata = {
  title: "RemoteOkClone Admin",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
