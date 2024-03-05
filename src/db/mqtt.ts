import type { mqtt_datas } from '@prisma/client'; // Importing the Post type from the Prisma client library.
import { db } from '@/db';
import { notFound } from 'next/navigation'; // Importing the notFound function from Next.js for handling 404 errors.

export async function fetchPostById(): Promise<mqtt_datas[]> {
  // Function to fetch a single post by its ID.
  const post = await db.mqtt_datas.findMany({
    orderBy: [
      {
        id: 'desc',
      },
    ],
  });

  if (!post) {
    notFound(); // If the post is not found, a 404 error is thrown.
  }

  return post;
}
