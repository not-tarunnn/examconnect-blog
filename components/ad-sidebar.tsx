export default function AdSidebar() {
  return (
    <div className="space-y-6">
      {/* Advertisement Space 1 */}
      <div className="md:sticky md:top-96 rounded-lg border border-border bg-card p-6 text-center">
        <p className="text-xs font-medium uppercase tracking-wider text-foreground/50 mb-4">
          Advertisement
        </p>
        <div className="bg-muted rounded-lg h-60 md:h-80 flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm text-foreground/60 font-medium">loading...</p>
            <p className="text-xs text-foreground/40 mt-2">300x600 or 300x250</p>
          </div>
        </div>
      </div>

      {/* Advertisement Space 2 - Hidden on small screens */}
      <div className="hidden md:block rounded-lg border border-border bg-card p-6 text-center">
        <p className="text-xs font-medium uppercase tracking-wider text-foreground/50 mb-4">
          Advertisement
        </p>
        <div className="bg-muted rounded-lg h-60 flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm text-foreground/60 font-medium">loading...</p>
            <p className="text-xs text-foreground/40 mt-2">300x250</p>
          </div>
        </div>
      </div>
    </div>
  )
}
