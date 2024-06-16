import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Children } from "react";
// import LearnSocket from "../learn_socket/page";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <section>{children}</section>;
      <Footer />
    </>
  );
}
