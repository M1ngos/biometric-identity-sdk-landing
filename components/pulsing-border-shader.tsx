"use client"

import { PulsingBorder } from "@paper-design/shaders-react"

export default function PulsingBorderShader() {
  return (
    <PulsingBorder
      colors={["#10b981", "#0ea5e9", "#6366f1", "#8b5cf6"]}
      colorBack="#050505"
      speed={1.5}
      roundness={1}
      thickness={0.06}
      softness={0.12}
      intensity={1.2}
      spots={5}
      spotSize={0.15}
      pulse={0.25}
      smoke={0.5}
      smokeSize={2}
      scale={0.8}
      style={{
        width: "min(300px, 80vw)",
        height: "min(300px, 80vw)",
        borderRadius: "20px",
      }}
    />
  )
}
