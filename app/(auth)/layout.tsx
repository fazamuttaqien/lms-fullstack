import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative flex min-h-svh flex-col items-center justify-center'>
      <Link
        href='/'
        className={buttonVariants({
          variant: "outline",
          className: "absolute top-4 left-4",
        })}
      >
        <ArrowLeft className='size-4' />
        Back to Home
      </Link>
      <div className='flex w-full max-w-sm flex-col gap-6'>
        <Link
          href='/'
          className='flex items-center gap-2 self-center font-medium'
        >
          Acme Inc.
        </Link>
        {children}
        <div className='text-muted-foreground text-center text-sm text-balance'>
          By continuing, you agree to our{" "}
          <Link href='/terms' className='underline underline-offset-4'>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href='/privacy' className='underline underline-offset-4'>
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
