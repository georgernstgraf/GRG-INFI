/* Teach-Workspace 3AHWII — Quiz-Widget mit sofortigem Feedback.
   Verwendung pro Frage:
   <div class="quiz" data-answer="b">
     <strong>Frage …</strong>
     <button data-opt="a">…</button>
     <button data-opt="b">…</button>
     <p class="feedback" aria-live="polite"></p>
   </div>
*/
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".quiz").forEach((box) => {
    const correct = box.getAttribute("data-answer");
    const fb = box.querySelector(".feedback");
    box.querySelectorAll("button[data-opt]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const hit = btn.getAttribute("data-opt") === correct;
        box.querySelectorAll("button[data-opt]").forEach((b) => {
          b.disabled = true;
          b.style.opacity = b.getAttribute("data-opt") === correct ? "1" : "0.55";
        });
        if (fb) {
          fb.textContent = hit ? "Richtig." : "Nicht ganz — lies den Abschnitt noch einmal.";
          fb.className = "feedback " + (hit ? "ok" : "no");
        }
      });
    });
  });
});
