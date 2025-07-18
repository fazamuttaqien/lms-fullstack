"use client"

import { Suspense, useState, useTransition } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { authClient } from "@/lib/auth-client";

export default function VerifyRequestRoute() {
  return (
    <Suspense>
      <VerifyRequest />
    </Suspense>
  );
}

function VerifyRequest() {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [emailPending, startTransition] = useTransition();
  const params = useSearchParams();
  const email = params.get("email") as string;
  const isOtpCompleted = otp.length === 6;

  function verifyOtp() {
    startTransition(async () => {
      await authClient.signIn.emailOtp({
        email: email,
        otp: otp,
        fetchOptions: {
          onSuccess: () => {
            toast.success(
              "Email verified successfully! You are now logged in."
            );
            router.push("/");
          },
          onError: err => {
            toast.error(`Failed to verify email: ${err.error.message}`);
          },
        },
      });
    });
  }

  return (
    <Card className='mx-auto w-full'>
      <CardHeader className='text-center'>
        <CardTitle className='text-xl'>Please check your email</CardTitle>
        <CardDescription>
          We have sent a verification email code to your email address. Please
          open the email and paste the code below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col items-center space-y-2'>
          <InputOTP
            value={otp}
            onChange={value => setOtp(value)}
            maxLength={6}
            className='gap-2'
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className='text-muted-foreground text-sm'>
            Enter the 6-digit code from the email to verify your account.
          </p>
        </div>
        <Button
          className='w-full'
          disabled={emailPending || !isOtpCompleted}
          onClick={verifyOtp}
        >
          {emailPending ? (
            <>
              <Loader2 className='size-4 animate-spin' />
              <span>Loading...</span>
            </>
          ) : (
            "Verify Account"
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
