"use server";

export const getDataFromServer = async ({ input }: { input: string }) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return input;
};
