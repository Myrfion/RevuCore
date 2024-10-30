import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Reviews Management System
      </h1>
      <p className="mb-4">
        This is a self-hosted application for managing product reviews.
      </p>

      <Link href="/admin">
        <Button>View Products</Button>
      </Link>
    </div>
  );
}
