export function PageContainer({ 
  title, 
  children 
}: { 
  title: string; 
  children: React.ReactNode 
}) {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-[var(--foreground)] border-b-2 border-[var(--primary)] pb-4">
        {title}
      </h1>
      <div className="bg-white rounded-lg shadow-md p-8 border border-[var(--border)]">
        {children}
      </div>
    </div>
  );
}