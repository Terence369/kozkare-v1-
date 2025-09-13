"use client"

import React from "react"

export type FloodLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  floodColor?: string
  floodDuration?: number
}

export function FloodLink({ href, onClick, floodColor, floodDuration, ...rest }: FloodLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.altKey ||
      e.ctrlKey ||
      e.shiftKey ||
      rest.target === "_blank"
    ) {
      return
    }
    e.preventDefault()
    const x = e.clientX
    const y = e.clientY

    const event = new CustomEvent("flood:start", {
      detail: { x, y, href, color: floodColor, duration: floodDuration },
    })
    window.dispatchEvent(event)
  }

  return <a href={href} onClick={(e) => { onClick?.(e); handleClick(e) }} {...rest} />
}
