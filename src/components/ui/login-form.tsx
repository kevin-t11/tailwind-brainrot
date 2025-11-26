"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Eye, EyeClosed } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const loginFormVariants = cva("w-full space-y-6", {
  variants: {
    variant: {
      default: "",
      floating: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

interface LoginFormProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSubmit">,
    VariantProps<typeof loginFormVariants> {
  onSubmit?: (email: string, password: string) => void
  showDivider?: boolean
  showForgotPassword?: boolean
}

function LoginForm({
  className,
  variant,
  onSubmit,
  showDivider = true,
  showForgotPassword = true,
  ...props
}: LoginFormProps) {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [showPassword, setShowPassword] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(email, password)
  }

  const isFloating = variant === "floating"

  return (
    <div className={cn(loginFormVariants({ variant, className }))} {...props}>
      {showDivider && (
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-muted-foreground text-sm">or</span>
          <div className="h-px flex-1 bg-border" />
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div className="relative">
          {isFloating ? (
            <>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="peer h-14 rounded-2xl border-2 border-border bg-background px-4 pt-6 pb-2 text-base placeholder:text-muted-foreground/60 focus-visible:border-border focus-visible:ring-0"
              />
              <Label
                htmlFor="email"
                className="pointer-events-none absolute left-4 top-2 text-sm font-semibold text-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-muted-foreground peer-focus:top-2 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-foreground"
              >
                Email
              </Label>
            </>
          ) : (
            <>
              <Label htmlFor="email" className="mb-2 block">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </>
          )}
        </div>

        {/* Password Field */}
        <div className="relative">
          {isFloating ? (
            <>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="you@example.com"
                className="peer h-14 rounded-2xl border-2 border-border bg-background px-4 pt-6 pb-2 pr-12 text-base placeholder:text-muted-foreground/60 focus-visible:border-border focus-visible:ring-0"
              />
              <Label
                htmlFor="password"
                className="pointer-events-none absolute left-4 top-2 text-sm font-semibold text-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-muted-foreground peer-focus:top-2 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-foreground"
              >
                Password
              </Label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? (
                  <EyeClosed className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </button>
            </>
          ) : (
            <>
              <Label htmlFor="password" className="mb-2 block">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeClosed className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>
            </>
          )}
        </div>

        {showForgotPassword && (
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Forgot Password?
            </button>
          </div>
        )}

        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </div>
  )
}

export { LoginForm, loginFormVariants }