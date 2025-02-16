import { createUser, getAllUsers } from "./user";
import { createPost, getAllPosts } from "./post";
import { createComment, getAllComments } from "./comment";
import prisma from "./db";

async function main() {
  const user = await createUser("Taro", "taro@example.com");
  console.log(user);

  const post = await createPost("Prisma入門", "Prismaを使ってみよう！", user.id);
  console.log(post);

  const comment = await createComment("いい記事ですね！", post.id);
  console.log(comment);

  console.log(await getAllUsers());

  console.log(await getAllPosts());

  console.log(await getAllComments());

  await prisma.$disconnect();
}

main().catch((e) => console.error(e));
