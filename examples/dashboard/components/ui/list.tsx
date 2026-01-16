"use client";

import { type ComponentRenderProps } from "@ai-json-renderer/react";
import { useData } from "@ai-json-renderer/react";
import { getByPath } from "@ai-json-renderer/core";

export function List({ element, children }: ComponentRenderProps) {
  const { dataPath } = element.props as { dataPath: string };
  const { data } = useData();
  const listData = getByPath(data, dataPath) as Array<unknown> | undefined;

  if (!listData || !Array.isArray(listData)) {
    return <div style={{ color: "var(--muted)" }}>No items</div>;
  }

  return <div>{children}</div>;
}
