export default function ticketReducer(state, action) {
  switch (action.type) {
    case "ADD_TICKET":
      return { ...state, tickets: [...state.tickets, action.payload] };
    case "UPDATE_TICKET":
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === action.payload.id ? action.payload : ticket
        ),
        editingTicket: null, // Clear editing state after update
      };
    case "DELETE_TICKET":
      if (state.editingTicket && state.editingTicket.id === action.payload.id) {
        return {
          ...state,
          tickets: state.tickets.filter(
            (ticket) => ticket.id !== action.payload.id
          ),
          editingTicket: null, // Clear editing state if the deleted ticket was being edited
        };
      } else {
        return {
          ...state,
          tickets: state.tickets.filter(
            (ticket) => ticket.id !== action.payload.id
          ),
        };
      }
    case "SET_EDITING_TICKET":
      return { ...state, editingTicket: action.payload };
    case "CLEAR_EDITING_TICKET":
      return { ...state, editingTicket: null };
    case "SET_SORT_PREFERENCE":
      return {
        ...state,
        sortPreference: action.payload,
      };
    default:
      return state;
  }
}
