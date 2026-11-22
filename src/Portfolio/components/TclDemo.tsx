import { useState } from "react";

const TCL_RULES = {
    uppercase: {
        name: "Uppercase Last Name",
        code: `# Cloverleaf TPS Procedure

set lastName [hcitcl_getfield $msgid "PID:5(0).1"]

set upperName [string toupper $lastName]

hcitcl_setfield $msgid "PID:5(0).1" $upperName

return "CONTINUE $msgid"`
    },

    validateMrn: {
        name: "Validate MRN",
        code: `# Cloverleaf TPS Procedure

set mrn [hcitcl_getfield $msgid "PID:3"]

if {[string length $mrn] < 6} {
    return "KILL $msgid"
}

return "CONTINUE $msgid"`
    },

    normalizeSex: {
        name: "Normalize Sex",
        code: `# Cloverleaf TPS Procedure

set sex [hcitcl_getfield $msgid "PID:8"]

switch $sex {
    "M" { set sex "Male" }
    "F" { set sex "Female" }
    default { set sex "Unknown" }
}

hcitcl_setfield $msgid "PID:8" $sex

return "CONTINUE $msgid"`
    }
};

export default function CloverleafTclDemo() {
    const [selectedRule, setSelectedRule] = useState("uppercase");

    const [hl7Input, setHl7Input] = useState(
`MSH|^~\\&|PORTFOLIO|LAB|EMR|HOSPITAL|202611191200||ADT^A04|12345|P|2.5
PID|1||123456||Smith^John||19800115|M`
    );

    const [result, setResult] = useState("");

    const applyTransformation = () => {
        const lines = hl7Input.split("\n");

        const pidIndex = lines.findIndex((line) =>
            line.startsWith("PID|")
        );

        if (pidIndex === -1) {
            setResult("No PID segment found.");
            return;
        }

        const fields = lines[pidIndex].split("|");

        switch (selectedRule) {
            case "uppercase": {
                const [last, first] = (fields[5] || "").split("^");

                fields[5] =
                    `${(last || "").toUpperCase()}^${first || ""}`;

                break;
            }

            case "validateMrn": {
                const mrn = fields[3] || "";

                if (mrn.length < 6) {
                    setResult(
                        "MESSAGE KILLED: MRN Failed Validation"
                    );
                    return;
                }

                break;
            }

            case "normalizeSex": {
                const sex = fields[8];

                if (sex === "M") {
                    fields[8] = "Male";
                } else if (sex === "F") {
                    fields[8] = "Female";
                } else {
                    fields[8] = "Unknown";
                }

                break;
            }
        }

        lines[pidIndex] = fields.join("|");

        setResult(lines.join("\n"));
    };

    return (
        <section>
            <h2>Tcl TPS Simulator</h2>

            <p className="lead">
                Simulates common Tcl Protocol Stack procedures that
                transform HL7 messages before delivery to downstream
                systems.
            </p>

            <div className="hl7-demo">
                <div className="hl7-form">
                    <label>
                        Tcl Rule

                        <select
                            value={selectedRule}
                            onChange={(e) =>
                                setSelectedRule(e.target.value)
                            }
                        >
                            <option value="uppercase">
                                Uppercase Last Name
                            </option>

                            <option value="validateMrn">
                                Validate MRN
                            </option>

                            <option value="normalizeSex">
                                Normalize Sex
                            </option>
                        </select>
                    </label>

                    <label>
                        HL7 Input

                        <textarea
                            rows={8}
                            value={hl7Input}
                            onChange={(e) =>
                                setHl7Input(e.target.value)
                            }
                        />
                    </label>

                    <button onClick={applyTransformation}>
                        Apply Tcl Transformation
                    </button>
                </div>

                <div className="hl7-result">
                    <h3>Tcl Procedure</h3>

                    <pre className="hl7-output">
                        {
                            TCL_RULES[
                                selectedRule as keyof typeof TCL_RULES
                            ].code
                        }
                    </pre>

                    <h3>Output</h3>

                    <pre className="hl7-output">
                        {result ||
                            "Run a transformation to see the output."}
                    </pre>
                </div>
            </div>
        </section>
    );
}