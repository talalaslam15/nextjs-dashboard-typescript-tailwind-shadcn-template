import { RouteGuard } from "@/components/route-guard";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RouteGuard requireAuth={false} redirectTo="/dashboard">
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </RouteGuard>
  );
}
