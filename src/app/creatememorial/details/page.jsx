"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const DetailsFormPage = () => {
  const searchParams = useSearchParams();
  const firstName = searchParams?.get("firstName");
  const lastName = searchParams?.get("lastName");

  return (
    <div>
      <p>First Name: {firstName || "N/A"}</p>
      <p>Last Name: {lastName || "N/A"}</p>
      <form>
        <Link href="/creatememorial/pricing">
          <button type="button">Choose Pricing</button>
        </Link>
      </form>
    </div>
  );
};

const page = () => {
  return (
    <Suspense fallback={<div>Loading form details...</div>}>
      <DetailsFormPage />
    </Suspense>
  );
};

export default page;
