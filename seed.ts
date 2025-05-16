import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	// Seed Posts
	await prisma.post.createMany({
		data: [
			{
				title: 'My First Post',
				summary: 'This is the summary of my first article.',
				content: 'This is the content of my first article.',
				imageUrl: 'https://example.com/photo1.jpg',
				tags: ['Introduction', 'Photography'],
			},
			{
				title: 'Weekly Photography Tips',
				summary: 'Here are some tips for improving your photography.',
				content: 'Here are some tips for improving your photography.',
				imageUrl: 'https://example.com/photo2.jpg',
				tags: ['Tips', 'Photography'],
			},
		],
	});
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
