import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useAuthCheck } from "@/lib/auth";

export default function Navbar() {
  const { isAuthenticated, user } = useAuthCheck();

  if (!isAuthenticated) return null;

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <img 
              src="/assets/logo.png" 
              alt="RainbowScientists" 
              className="h-8 w-auto"
            />
            <span className="hidden font-bold sm:inline-block bg-gradient-to-r from-primary/90 to-primary text-transparent bg-clip-text">
              IT Infrastructure Planner
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/">Dashboard</Link>
            <Link href="/plans/new">New Plan</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {user && (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {user.username}
              </span>
              <Button variant="ghost" size="sm">
                Sign out
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}