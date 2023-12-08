"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";

const formSchema = z.object({
  email: z
    .string()
    .min(3, {
      message: "Please enter a valid email",
    })
    .email(),
  password: z.string().min(1, {
    message: "You have to enter a password",
  }),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl: "/pokedex",
      }).then((res) => {
        if (res && res.status === 401) {
          form.setError("email", {
            type: "manual",
            message: "",
          });
          form.setError("password", {
            type: "manual",
            message: "Invalid email or password. Please try again.",
          });
          return;
        }

        form.reset();
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <Image
        src="/assets/images/pokemon.webp"
        alt="pokemon catch them all"
        width={150}
        height={150}
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 border w-80 p-4 rounded-md shadow-md bg-white/50"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="johndoe@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button variant="default" size="default" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
}
