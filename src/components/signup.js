import "../style.css";
export default function renderSignUp(app, navigate) {
  app.innerHTML = `
    <div class="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold text-center mb-4">Sign Up</h1>
      <form id="signupForm" class="space-y-4">
        <input type="text" placeholder="Full Name" class="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md" required />
        <input type="email" placeholder="Email" class="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md" required />
        <input type="password" placeholder="Password" class="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md" required />
        <button class="w-full bg-green-500 dark:bg-green-600 text-white py-2 rounded-md">Sign Up</button>
      </form>
      <p class="text-center mt-4">
        Already have an account? <a href="#" class="text-green-500 dark:text-green-400" id="loginLink">Login</a>
      </p>
    </div>
  `;

  document.getElementById('loginLink').addEventListener('click', () => navigate());
  document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    navigate(); // Simulate sign-up and redirect to login
  });
}
