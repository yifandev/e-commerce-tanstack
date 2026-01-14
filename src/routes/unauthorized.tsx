import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShieldAlert } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/unauthorized')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="max-w-md">
        <CardHeader className="text-center space-y-2">
          <ShieldAlert className="mx-auto h-10 w-10 text-destructive" />
          <CardTitle className="text-2xl">Akses Ditolak</CardTitle>
        </CardHeader>

        <CardContent className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Kamu tidak memiliki izin untuk mengakses halaman ini.
          </p>

          <div className="flex justify-center gap-2">
            <Button asChild variant="default">
              <Link to="/">Kembali ke Beranda</Link>
            </Button>

            <Button asChild variant="outline">
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
