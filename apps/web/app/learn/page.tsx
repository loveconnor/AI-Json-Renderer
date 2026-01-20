import { Demo } from "@/components/demo";

export default function LearnPage() {
  return (
    <Demo
      api="/api/learn"
      promptPrefix="Interactive learn-by-doing lesson on "
      promptSuffix=". Use hints, micro-checks, immediate feedback, and progressive difficulty."
      placeholder="What topic do you want to learn?"
      helperText='Try: "Photosynthesis" or "Basics of SQL joins"'
      layout="full"
      showJsonToggle
      stepByStep
    />
  );
}
