import { Github, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { ViewportInfo } from '@/components/viewport-info';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-4 md:p-8 font-sans">
      <header className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <Code className="h-7 w-7 md:h-8 md:w-8 text-primary" />
          <h1 className="text-xl md:text-2xl font-bold tracking-tighter">
            Viewport Detective
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/RootDeveloperDS/ViewPort_Detective.git"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center py-10">
        <ViewportInfo />
      </main>

      <footer className="text-center text-xs sm:text-sm text-muted-foreground py-4 space-y-1">
        <p>
          Contributions are welcome! You can help improve this website by enhancing its features and UI.
        </p>
        <p>
          Made With ♥️ By RootDeveloperDS (Devansh Sharma)
        </p>
      </footer>
    </div>
  );
}
