"use client";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface featureProps {
  title: string;
  description: string;
  icon: string;
}

const features: featureProps[] = [
  {
    title: "Comprehensive Courses",
    description:
      "Explore a wide range of courses designed to enhance your skills and knowledge.",
    icon: "📚",
  },
  {
    title: "Interactive Learning",
    description:
      "Engage with interactive content that makes learning enjoyable and effective.",
    icon: "🎮",
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from industry experts who bring real-world experience to the classroom.",
    icon: "👨‍🏫",
  },
  {
    title: "Flexible Learning",
    description:
      "Access courses anytime, anywhere, and learn at your own pace.",
    icon: "⏰",
  },
];

export default function Home() {
  return (
    <>
      <section className='relative py-20'>
        <div className='flex flex-col items-center space-y-8 text-center'>
          <Badge variant='outline'>The Future of Online Education</Badge>
          <h1 className='tracking-light text-4xl font-bold md:text-6xl'>
            Elevate your Learning Experience
          </h1>
          <p className='text-muted-foreground max-w-[700px] md:text-xl'>
            Discover our new way to learn with our model, interactive learning
            management system. Access high-quality courses anytime, anywhere.
          </p>
          <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
            <Link
              className={buttonVariants({
                size: "lg",
              })}
              href='/courses'
            >
              Explore Courses
            </Link>
            <Link
              className={buttonVariants({
                size: "lg",
                variant: "outline",
              })}
              href='/login'
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>
      <section className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
        {features.map((feature, index) => (
          <Card key={index} className='transition-shadow hover:shadow-lg'>
            <CardHeader>
              <div className='mb-4 text-4xl'>{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}
