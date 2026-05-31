async function generate() {
    const idea = document.getElementById("idea").value;

    const res = await fetch("/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea })
    });

    const data = await res.json();
    document.getElementById("output").innerText = data.script;
}
