module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-background": "url('/src/assets/imgs/bg.png')",
        "message-block": "url('/src/assets/icons/message.svg')",
      },
      colors: {
        black: "#464646",
        gray: "#676E74",
        pink: "#7C68CB",
      },
      boxShadow: {
        platform: "0px 4px 33px 0px rgba(208, 214, 236, 0.25)",
      },
    },
  },
  plugins: [],
};
