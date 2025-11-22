module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'lab-bg':'#0B1221',
        'lab-panel':'#111a2e',
        'lab-grid':'#1F2A44',
        'lab-text':'#e6eefc',
        'lab-muted':'#7486a8',
        'lab-yellow':'#F7C948',
        'lab-green':'#22C55E'
      }
    },
  },
  plugins: [],
};