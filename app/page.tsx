import { redirect } from "next/navigation";

export default function Home() {
  redirect("/user/1");

  return (
    <div className="">
      <main className="">
      </main>
    </div>
  );
}
