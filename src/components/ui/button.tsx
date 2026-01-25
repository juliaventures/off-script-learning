import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-navy text-cream hover:bg-navy-light shadow-soft hover:shadow-medium",
        gold: "bg-gradient-gold text-navy font-semibold shadow-gold hover:shadow-gold-lg hover:scale-[1.02]",
        outline:
          "border-2 border-navy text-navy bg-transparent hover:bg-navy hover:text-cream",
        ghost: "text-navy hover:bg-navy/5",
        link: "text-gold underline-offset-4 hover:underline",
        secondary:
          "bg-cream-dark text-navy hover:bg-cream-dark/80",
      },
      size: {
        default: "h-11 px-6 rounded-lg text-sm",
        sm: "h-9 px-4 rounded-md text-sm",
        lg: "h-14 px-8 rounded-xl text-base",
        xl: "h-16 px-10 rounded-xl text-lg",
        icon: "h-11 w-11 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
