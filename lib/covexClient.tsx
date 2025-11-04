"use client";
import React from "react";
import { ConvexReactClient, ConvexProvider } from "convex/react";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL || process.env.CONVEX_URL;

let convexClient: ConvexReactClient | null = null;

if (typeof window !== "undefined" && convexUrl) {
  convexClient = new ConvexReactClient(convexUrl);
}

export function ConvexProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!convexClient) {
    return <>{children}</>;
  }

  return <ConvexProvider client={convexClient}>{children}</ConvexProvider>;
}
