import "./App.css";
import "./styles.css";
import { useReducer } from "react";
import TicketForm from "./components/TicketForm";
import ticketReducer from "./reducers/ticketReducer";
import TicketList from "./components/TicketList";
import { sortTickets } from "./utilities/sortingUtilities";
function App() {
  const initialState = {
    tickets: [],
    editingTicket: null,
    sortPreference: "high-to-low", // Default sort preference
  };

  const [state, dispatch] = useReducer(ticketReducer, initialState);
  const sortedTickets = sortTickets(state.tickets, state.sortPreference);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch} editingTicket={state.editingTicket} />
        {state.tickets.length > 0 && (
          <div className="results">
            <h2>Active Tickets</h2>
            <select
              value={state.sortPreference}
              onChange={(e) =>
                dispatch({
                  type: "SET_SORT_PREFERENCE",
                  payload: e.target.value,
                })
              }
            >
              <option value="high-to-low">Descending Order</option>
              <option value="low-to-high">Ascending Order</option>
            </select>
            <TicketList tickets={sortedTickets} dispatch={dispatch} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
