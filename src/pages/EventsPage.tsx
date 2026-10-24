import EventCard from "../components/EventCard";
import { events } from "../data/events";

export function EventsPage() {
  return (
    <section>
      <h1 className="page-title">Events</h1>
      <div className="card-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}

export default EventsPage;
