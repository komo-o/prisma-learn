import prisma from "./db";

// 🟢 投稿作成
export async function createPost(title: string, content: string, authorId: number) {
  return await prisma.post.create({
    data: { title, content, authorId },
  });
}

// 🔵 投稿取得（ユーザー情報も含める）
export async function getAllPosts() {
  return await prisma.post.findMany({
    include: { author: true, comments: true },
  });
}

// 🟡 投稿更新
export async function updatePost(id: number, title: string) {
  return await prisma.post.update({
    where: { id },
    data: { title },
  });
}

// 🔴 投稿削除
export async function deletePost(id: number) {
  return await prisma.post.delete({
    where: { id },
  });
}
