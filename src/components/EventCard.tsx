import { Link } from "react-router";
import Card from "./ui/Card";
import Tag from "./ui/Tag";
import type { CampusEvent } from "../data/events";

type EventCardProps = {
  event: CampusEvent;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <Card as="article" className="card">
      <h2 className="card-title">{event.title}</h2>
      <p className="text-muted">
        {event.date} · {event.place}
      </p>
      <div className="tag-list">
        <Tag>{event.seats} seats</Tag>
      </div>
      <Link to={`/events/${event.id}`} className="text-link text-link--strong self-start">
        Details
      </Link>
    </Card>
  );
}

export default EventCard;
