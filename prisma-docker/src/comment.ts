import prisma from "./db";

// 🟢 コメント作成
export async function createComment(text: string, postId: number) {
  return await prisma.comment.create({
    data: { text, postId },
  });
}

// 🔵 コメント取得（投稿情報も含める）
export async function getAllComments() {
  return await prisma.comment.findMany({
    include: { post: true },
  });
}

// 🟡 コメント更新
export async function updateComment(id: number, text: string) {
  return await prisma.comment.update({
    where: { id },
    data: { text },
  });
}

// 🔴 コメント削除
export async function deleteComment(id: number) {
  return await prisma.comment.delete({
    where: { id },
  });
}
