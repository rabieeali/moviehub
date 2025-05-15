import Link from 'next/link';

export default function MovieNotFound() {
  return (
    <main className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-error mb-4">Movie Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          The movie you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </main>
  );
} 