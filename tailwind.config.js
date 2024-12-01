/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#A7C7E7", // Light Blue
          "primary-focus": "#A7C7E7", // Light Blue (same for focus)
          "primary-content": "#ffffff", // White content on primary
          secondary: "#F7CAC9", // Soft Pink
          "secondary-focus": "#F7CAC9", // Soft Pink (same for focus)
          "secondary-content": "#ffffff", // White content on secondary
          accent: "#A8E6CF", // Mint Green
          "accent-focus": "#A8E6CF", // Mint Green (same for focus)
          "accent-content": "#ffffff", // White content on accent
          neutral: "#D1D9E6", // Soft light gray-blue (neutral)
          "neutral-focus": "#D1D9E6", // Soft light gray-blue (same for focus)
          "neutral-content": "#ffffff", // White content on neutral
          "base-100": "#FFFFFF", // White base background
          "base-focus": "#f9fafb", // Very light gray for focus
          "base-content": "#1f2937", // Dark gray content on base
          info: "#5C9EBD", // Cool muted blue for info
          success: "#A8E6CF", // Mint Green (same as accent for success)
          warning: "#F7D78A", // Soft pale yellow for warning
          error: "#F7A0A0", // Soft red for error
        }
      }
    ]
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require('daisyui'),
  ],
};
