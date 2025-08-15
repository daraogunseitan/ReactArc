export const sortTickets = (tickets, sortPreference) => {
  switch (sortPreference) {
    case "high-to-low":
      return [...tickets].sort((a, b) => b.priority.localeCompare(a.priority));
    case "low-to-high":
      return [...tickets].sort((a, b) => a.priority.localeCompare(b.priority));
    default:
      return tickets;
  }
};
