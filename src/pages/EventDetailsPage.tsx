import { Link, useParams } from "react-router";
import Card from "../components/ui/Card";
import EventSignupForm from "../components/EventSignupForm";
import { events } from "../data/events";

export function EventDetailsPage() {
  const { eventId } = useParams();
  const event = events.find((item) => item.id === Number(eventId));

  if (!event) {
    return (
      <Card className="max-w-md mx-auto w-full">
        <h1 className="page-title">Event not found</h1>
        <p className="text-body">No event with id {eventId}.</p>
        <Link to="/events" className="text-link text-link--strong self-start">
          ← Back to events
        </Link>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto w-full">
      <h1 className="page-title">{event.title}</h1>
      <p className="text-muted">
        {event.date} · {event.place}
      </p>
      <EventSignupForm key={event.id} event={event} />
      <Link to="/events" className="text-link text-link--strong self-start">
        ← Back to events
      </Link>
    </Card>
  );
}

export default EventDetailsPage;
