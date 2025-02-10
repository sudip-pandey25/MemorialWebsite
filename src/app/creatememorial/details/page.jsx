"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const searchParams = useSearchParams();
  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");
  return (
    <div>
      firstName: {firstName}
      Details form page
      <form action="">
        <Link href="/creatememorial/pricing">
          <button>Choose Pricing</button>
        </Link>
      </form>
    </div>
  );
};

export default page;
