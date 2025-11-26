'use client';

import { LoginForm } from '@/components/ui/login-form';

export default function LoginDemoPage() {
  const handleLogin = (email: string, password: string) => {
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="bg-background min-h-screen p-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <div>
          <h1 className="mb-2 text-3xl font-bold">Login Form Variants</h1>
          <p className="text-muted-foreground">Two variants of the login form component</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Default Variant */}
          <div className="bg-card rounded-lg border p-8">
            <h2 className="mb-6 text-xl font-semibold">Default Variant</h2>
            <LoginForm variant="default" onSubmit={handleLogin} />
          </div>

          {/* Floating Variant */}
          <div className="bg-card rounded-lg border p-8">
            <h2 className="mb-6 text-xl font-semibold">Floating Label Variant</h2>
            <LoginForm variant="floating" onSubmit={handleLogin} />
          </div>
        </div>

        {/* Usage Examples */}
        <div className="bg-muted/50 rounded-lg border p-6">
          <h3 className="mb-4 text-lg font-semibold">Usage Examples</h3>
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-sm font-medium">Default variant:</p>
              <pre className="bg-background overflow-x-auto rounded-md p-4 text-xs">
                {`<LoginForm 
  variant="default" 
  onSubmit={(email, password) => console.log(email, password)}
/>`}
              </pre>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Floating label variant:</p>
              <pre className="bg-background overflow-x-auto rounded-md p-4 text-xs">
                {`<LoginForm 
  variant="floating" 
  onSubmit={(email, password) => console.log(email, password)}
  showDivider={true}
  showForgotPassword={true}
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
