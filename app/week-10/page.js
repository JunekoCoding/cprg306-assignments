"use client";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Sign in to Firebase with GitHub authentication
  const login = async () => {
    await gitHubSignIn();
  };

  // Sign out of Firebase
  const logout = async () => {
    await firebaseSignOut();
  };

  // Display some of the user's information
  return (
    <main className="bg-gray-900 flex min-h-screen flex-col items-center justify-center px-6 py-10">
      <div className="bg-blue-800 rounded-md p-8 w-full max-w-md shadow-lg">
        {user ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">
              Welcome, {user.displayName}
            </h1>
            <p className="text-white text-lg mb-6">
              Navigate to your shopping list and start managing your items.
            </p>
            <Link
              href={`/week-10/shopping-list`}
              className="inline-block bg-orange-500 hover:bg-orange-700 text-white text-center px-6 py-2 rounded-md mb-4"
            >
              Go to Shopping List
            </Link>
            <button
              className="w-full bg-red-500 hover:bg-red-700 text-white text-center px-6 py-2 rounded-md"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">
              Welcome to the Shopping List App
            </h1>
            <p className="text-white text-lg mb-6">
              Please log in with your GitHub account to get started.
            </p>
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white text-center px-6 py-2 rounded-md"
              onClick={login}
            >
              Login with GitHub
            </button>
          </div>
        )}
      </div>
    </main>
  );
}