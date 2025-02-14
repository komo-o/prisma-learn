import { createUser, getAllUsers } from "./user";
import { createPost, getAllPosts } from "./post";
import { createComment, getAllComments } from "./comment";
import prisma from "./db";

async function main() {
  console.log("▶️ Creating user...");
  const user = await createUser("Taro", "taro@example.com");
  console.log(user);

  console.log("▶️ Creating post...");
  const post = await createPost("Prisma入門", "Prismaを使ってみよう！", user.id);
  console.log(post);

  console.log("▶️ Creating comment...");
  const comment = await createComment("いい記事ですね！", post.id);
  console.log(comment);

  console.log("▶️ Fetching all users...");
  console.log(await getAllUsers());

  console.log("▶️ Fetching all posts...");
  console.log(await getAllPosts());

  console.log("▶️ Fetching all comments...");
  console.log(await getAllComments());

  await prisma.$disconnect();
}

main().catch((e) => console.error(e));
