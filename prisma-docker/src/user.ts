import prisma from "./db";

// 🟢 ユーザー作成
export async function createUser(name: string, email: string) {
  return await prisma.user.create({
    data: { name, email },
  });
}

// 🔵 ユーザー取得
export async function getAllUsers() {
  return await prisma.user.findMany();
}

// 🟡 ユーザー更新
export async function updateUser(id: number, name: string) {
  return await prisma.user.update({
    where: { id },
    data: { name },
  });
}

// 🔴 ユーザー削除
export async function deleteUser(id: number) {
  return await prisma.user.delete({
    where: { id },
  });
}
