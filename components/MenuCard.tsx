"use client";
import { cn } from "@/lib/utils";
import { LucideIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

interface MenuCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  baseColorClass: string;
  bgImage: string;
  buttonText: string;
  ctaLabel: string;
  className?: string;
  featured?: boolean;
}

export function MenuCard({
  title,
  description,
  href,
  icon: Icon,
  baseColorClass,
  bgImage,
  ctaLabel,
  className,
  featured = false,
}: MenuCardProps) {
  return (
    <Link href={href} className={cn("group block w-full", className)}>
      <div
        className={cn(
          // scale + shadow on hover for micro-interaction
          "relative h-full w-full overflow-hidden shadow-md transition-all duration-500",
          "hover:scale-[1.015] hover:shadow-2xl",
          featured ? "rounded-[1.75rem]" : "rounded-[1.5rem]",
        )}
      >
        {/* Background Image — subtle zoom on hover */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* Color Overlay — 75% base, lightens on hover to reveal more image */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-400",
            baseColorClass,
            featured
              ? "opacity-[0.72] group-hover:opacity-[0.62]"
              : "opacity-[0.78] group-hover:opacity-[0.68]",
          )}
        />

        {/* Content */}
        <div
          className={cn(
            "relative z-20 h-full flex flex-col justify-between text-white",
            featured ? "p-7" : "p-5",
          )}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center self-start rounded-xl bg-white/20 p-2.5 backdrop-blur-md">
            <Icon size={featured ? 22 : 18} strokeWidth={2} />
          </div>

          {/* Text + CTA */}
          <div>
            <h2
              className={cn(
                "font-bold tracking-tight mb-1",
                featured ? "text-2xl" : "text-lg",
              )}
            >
              {title}
            </h2>
            <p className="text-xs font-medium text-white/80 leading-snug mb-3 line-clamp-2">
              {description}
            </p>

            {/* CTA button — white fill, colored text, arrow slides on hover */}
            <div
              className="inline-flex items-center gap-2 bg-white rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide transition-all duration-200 shadow-sm group-hover:shadow-md group-hover:gap-3"
              style={{ color: "inherit" }}
            >
              <span className="text-slate-800">{ctaLabel}</span>
              <ArrowRight
                size={11}
                className="text-slate-600 transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
