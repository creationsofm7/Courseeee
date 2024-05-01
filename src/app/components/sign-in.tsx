import { signIn } from "../auth"
 
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
      className="flex flex-col items-center"
    >
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Signin with Github
      </button>
    </form>
  );
}