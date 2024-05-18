import Link from "next/link";
import React from "react";
// import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>404</p>
      <button>Return Home</button>
      <Link href="/">Return Home</Link>
    </div>
  );
}
