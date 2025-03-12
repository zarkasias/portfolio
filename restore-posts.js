const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function restorePosts() {
  try {
    const posts = JSON.parse(fs.readFileSync('./backups/posts-backup.json', 'utf8'));
    console.log(`Found ${posts.length} posts to restore`);
    
    for (const post of posts) {
      await prisma.post.create({
        data: {
          id: post.id,
          title: post.title,
          author: post.author,
          createdAt: new Date(post.createdAt),
          updatedAt: new Date(post.updatedAt),
          sections: post.sections,
          tags: post.tags || [],
          comments: {
            create: post.comments.map(comment => ({
              id: comment.id,
              content: comment.content,
              author: comment.author,
              createdAt: new Date(comment.createdAt)
            }))
          }
        }
      });
      console.log(`Restored post: ${post.title}`);
    }
    console.log('All posts restored successfully');
  } catch (error) {
    console.error('Error restoring posts:', error);
  } finally {
    await prisma.$disconnect();
  }
}

restorePosts(); 