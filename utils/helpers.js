module.exports = {

  format_date: (date) => {
    const jsDate = new Date(date);
    return jsDate.toLocaleDateString("en-US", {
      timeZone: 'UTC',
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  },

  format_date_card_month: (date) => {
    const jsDate = new Date(date);
    return jsDate.toLocaleDateString("en-US", {
      timeZone: 'UTC',
      month: "short",
    });
  },

  format_date_card_day: (date) => {
    const jsDate = new Date(date);
    return jsDate.toLocaleDateString("en-US", {
      timeZone: 'UTC',
      day: "numeric",
    });
  },

  format_time: (date) => {
    const jsDate = new Date(date);
    return jsDate.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', timeZone: 'America/New_York'});
  },

  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },
};
