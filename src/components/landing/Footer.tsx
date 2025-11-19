import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="border-border bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-bold">
              <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-full text-xs">
                V
              </div>
              ViralAI
            </div>
            <p className="text-muted-foreground text-sm">
              The all-in-one platform for viral content discovery and creation.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Product</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  API
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Legal</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border text-muted-foreground flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm md:flex-row">
          <p>© 2024 ViralAI Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground">
              Twitter
            </Link>
            <Link href="#" className="hover:text-foreground">
              Instagram
            </Link>
            <Link href="#" className="hover:text-foreground">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
