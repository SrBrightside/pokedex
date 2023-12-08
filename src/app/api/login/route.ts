import users from "@/data/user.json";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let user = null;
  const { email, password } = await req.json();

  if (req.method !== "POST") {
    NextResponse.json({
      status: 400,
      statusText: "Only POST requests allowed",
    });
    return;
  }

  if (!email || !password) {
    NextResponse.json({ message: "Email and password required" });
    return;
  }

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      user = users[i];
      break;
    }
  }

  if (!user) {
    return NextResponse.json({ message: "Invalid credentials" });
  }

  return NextResponse.json(user);
}
