"use client"

import Link from "next/link"
import { FC } from "react"
import { LogoSVG } from "../icons/logo-svg"
import { appText } from "@/config/apptext" 


interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <Link
      className="flex cursor-pointer flex-col items-center hover:opacity-50"
      href="/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mb-2">
        <LogoSVG theme={theme === "dark" ? "light" : "dark"} scale={5} />
      </div>

      <div className="text-4xl font-bold tracking-wide">{appText.common.brandName}</div>
    </Link>
  )
}
