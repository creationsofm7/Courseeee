import { signIn } from "../auth"
 
export function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("resend", formData);
      }}
      className="flex flex-col items-center"
    >
      <input type="text" name="email" placeholder="Email" className="border border-gray-300 rounded-md px-4 py-2 mb-2" />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Signin with Resend
      </button>
    </form>
  );
}