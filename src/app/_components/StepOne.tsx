"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowRightIcon } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(5, "Хамгийн багадаа 5 тэмдэгт байх ёстой").max(15),
  lastName: z.string().min(5, "Хамгийн багадаа 5 тэмдэгт байх ёстой").max(15),
  FirstName: z.string().min(5, "Хамгийн багадаа 5 тэмдэгт байх ёстой").max(15),
});

export default function FormPage({ onNext }: { onNext: () => void }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="p-5 flex justify-center">
      <Card className="w-[400px]">
        <CardHeader>
          <img src="4f.png" alt="logo" className="h-[60px] w-[60px]"></img>
          <h1 className="text-2xl font-bold">Join Us!</h1>
          <p className="text-gray-400">
            Please provide all current information accurately.
          </p>
        </CardHeader>
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="FirstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <button
                onClick={onNext}
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md flex items-center justify-center gap-3"
              >
                Continue 1/3 <ArrowRightIcon className="size-5" />
              </button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
