"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
      {/* Background grid pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <h1 className="mb-6 text-balance text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
          Majm
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl md:text-2xl">
          Szoftverfejlesztés. Problémamegoldás.
        </p>

        <div className="flex flex-col items-center gap-6">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Első publikus projektünk
          </span>
          <Button asChild size="lg" className="group bg-[#adfa1d] text-background hover:bg-[#adfa1d]/90">
            <a
              href="https://www.tivornya.hu?utm_source=majm.hu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tivornya.hu
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-6 text-xs text-muted-foreground">
        majm.hu
      </div>
    </section>
  )
}
