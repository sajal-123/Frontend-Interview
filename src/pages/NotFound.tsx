import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";

const NotFound = () => {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-background via-muted to-background flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center space-y-6 animate-fade-in">

        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/ca_monk_logo.jpg"
            alt="CA Monk Logo"
            className="h-20 sm:h-24 object-contain animate-pop"
          />
        </div>

        {/* 404 */}
        <div className="text-7xl sm:text-8xl font-extrabold text-primary">
          404
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight">
          Page not found
        </h1>

        {/* Description */}
        <p className="text-muted-foreground text-sm sm:text-base">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Button asChild className="gap-2">
            <Link to="/">
              <ArrowLeft size={16} />
              Go back home
            </Link>
          </Button>

          <Button variant="outline" asChild className="gap-2">
            <a href="mailto:support@example.com">
              <Mail size={16} />
              Contact support
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
