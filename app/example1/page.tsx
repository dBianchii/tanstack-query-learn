import { getDataFromServer } from "./_actions";
import QueryComponent from "./_components/query-component";

export default async function Page() {
  const initialInput = "initial input";
  const initialData = await getDataFromServer({ input: initialInput });

  return (
    <QueryComponent initialData={initialData} initialInput={initialInput} />
  );
}
