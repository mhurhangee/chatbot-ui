"use client"

import { LogoSVG } from "@/components/icons/logo-svg"
import { IconArrowRight } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { appText } from "@/config/apptext"

export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className="flex size-full flex-col items-center justify-center">
      <div>
        <LogoSVG theme={theme === "dark" ? "dark" : "light"} scale={5} />
      </div>

      <div className="mt-5 text-4xl font-bold">{appText.common.brandName}</div>

      <Link
        className="mt-5 flex w-[200px] items-center justify-center rounded-md bg-blue-500 p-2 font-semibold"
        href="/login"
      >
        Start with {appText.common.brandName}
        <IconArrowRight className="ml-1" size={20} />
      </Link>
    </div>
  )
}
