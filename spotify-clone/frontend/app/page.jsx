import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="min-h-screen w-full  bg-gray-500">
      <SignedOut>
        <SignInButton>
          <Button>Sign In</Button>
        </SignInButton>
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton>
        </UserButton>
      </SignedIn>
    </div>
  );
}
