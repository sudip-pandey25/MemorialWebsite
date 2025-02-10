"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const page = () => {
  const searchParams = useSearchParams();
  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");
  return (
    <Suspense>
      <div>
        firstName: {firstName}
        Details form page
        <form action="">
          <Link href="/creatememorial/pricing">
            <button>Choose Pricing</button>
          </Link>
        </form>
      </div>
    </Suspense>
  );
};

export default page;
