import { ME } from "../content";

export default function Skills() {
    return (
        <section>
        <h2>Tools I reach for</h2>
        <dl className="skills">
            {Object.entries(ME.skills).map(([k, v]) => (
            <div key={k}>
                <dt>{k}</dt>
                <dd>{v.join(", ")}</dd>
            </div>
            ))}
        </dl>
        </section>
    );
}