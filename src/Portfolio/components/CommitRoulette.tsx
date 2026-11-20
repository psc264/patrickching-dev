import { useState } from "react";
import { COMMITS } from "../content";

export default function CommitRoulette() {
    const [i, setI] = useState(0);
    const [copied, setCopied] = useState(false);

    const spin = () => {
        setI((prev) => {
        let n = prev;
        while (n === prev) n = Math.floor(Math.random() * COMMITS.length);
        return n;
        });
        setCopied(false);
    };

    const copy = async () => {
        try {
        await navigator.clipboard.writeText('git commit -m "' + COMMITS[i] + '"');
        setCopied(true);
        } catch {
        setCopied(false);
        }
    };

    return (
        <section>
        <h2>Need a commit message?</h2>
        <p className="lead">Every engineer has stared at that empty prompt. Here is some help.</p>
        <div className="commit">
            <code>git commit -m "{COMMITS[i]}"</code>
            <div className="row">
            <button onClick={spin}>New message</button>
            <button className="ghost" onClick={copy}>
                {copied ? "Copied" : "Copy command"}
            </button>
            </div>
        </div>
        </section>
    );
}