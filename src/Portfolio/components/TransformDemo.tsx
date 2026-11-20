import { useState } from "react";

export default function TransformDemo() {
    const [mrn, setMrn] = useState("123456");
    const [last, setLast] = useState("Smith");
    const [first, setFirst] = useState("John");
    const [dob, setDob] = useState("1980-01-15");
    const [sex, setSex] = useState("");

    const [output, setOutput] = useState("");
    const [format, setFormat] = useState<"HL7" | "FHIR">("HL7");

    const sanitize = (value: string) => value.replace(/[^A-Za-z0-9 .'-]/g, "").trim();
    const cleanMrn = sanitize(mrn);
    const cleanLast = sanitize(last);
    const cleanFirst = sanitize(first);

    const today = new Date().toISOString().split("T")[0];

    const generateHL7 = () => {
        if (dob > today) {
            setOutput("Validation Error: DOB cannot be in the future.");
            return;
        }   
        setFormat("HL7");
        const hl7Dob = dob.replaceAll("-", "");

        const message = [
            "MSH|^~\\&|PORTFOLIO|LAB|EMR|HOSPITAL|202611191200||ADT^A04|12345|P|2.5",
            `PID|1||${cleanMrn}||${cleanLast}^${cleanFirst}||${hl7Dob}|${sex}`
        ].join("\n");

        setOutput(message);
    };

    const generateFHIR = () => {
        if (dob > today) {
            setOutput("Validation Error: DOB cannot be in the future.");
            return;
        }
        setFormat("FHIR");
        const fhirGender =
            sex === "M"
                ? "male"
                : sex === "F"
                    ? "female"
                    : "unknown";
        const patient = {
        resourceType: "Patient",
        identifier: [
            {
            system: "urn:mrn",
            value: cleanMrn,
            },
        ],
        name: [
            {
            family: cleanLast,
            given: [cleanFirst],
            },
        ],
        gender: fhirGender,
        birthDate: dob,
        };

        setOutput(JSON.stringify(patient, null, 2));
    };

    return (
        <section>
        <h2>Integration Demo</h2>
        <p className="lead">
            Example: transforming structured patient data into HL7 and
            FHIR interoperability formats.
        </p>

        <div className="hl7-demo">
            <div className="hl7-form">
                <label>
                MRN
                <input
                    value={mrn}
                    onChange={(e) => setMrn(e.target.value)}
                />
                </label>

                <label>
                    Last Name
                    <input
                        value={last}
                        onChange={(e) => setLast(e.target.value)}
                    />
                </label>

                <label>
                    First Name
                    <input
                        value={first}
                        onChange={(e) => setFirst(e.target.value)}
                    />
                </label>

                <label>
                    DOB
                    <input
                        type="date"
                        min="1900-01-01"
                        max={today}
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />
                </label>

                <label>
                    Sex
                    <select
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                    >
                        <option value="">-- Select --</option>
                        <option value="M">M</option>
                        <option value="F">F</option>
                        <option value="U">U</option>
                    </select>
                </label>

                <div className="transform-buttons">
                    <button
                        className={format === "HL7" ? "" : "ghost"}
                        onClick={generateHL7}
                    >
                        HL7
                    </button>

                    <button
                        className={format === "FHIR" ? "" : "ghost"}
                        onClick={generateFHIR}
                    >
                        FHIR
                    </button>
                </div>
            </div>

            <div className="hl7-result">
                <h3>Generated Output ({format})</h3>

                <pre className="hl7-output">
                    {output ||
                    "Select HL7 or FHIR to generate a message."}
                </pre>
            </div>
        </div>
        </section>
    );
}