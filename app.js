import { auth, db } from "./firebase.js";
import { questions } from "./questions.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

let container = document.getElementById("quiz-container");

questions.forEach((q, index) => {
  let div = document.createElement("div");
  div.innerHTML = `<p>${q.question}</p>`;

  if (q.type === "multiple_choice") {
    q.options.forEach(opt => {
      div.innerHTML += `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label><br>`;
    });
  } else if (q.type === "true_false") {
    div.innerHTML += `
      <label><input type="radio" name="q${index}" value="true"> True</label><br>
      <label><input type="radio" name="q${index}" value="false"> False</label><br>
    `;
  }

  container.appendChild(div);
});

document.getElementById("submit-btn").onclick = async () => {
  const user = auth.currentUser;
  if (!user) return alert("Please login first");

  let score = 0;
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (!selected) return;
    if (
      q.type === "multiple_choice" && selected.value === q.answer ||
      q.type === "true_false" && String(q.answer) === selected.value
    ) {
      score++;
    }
  });

  await setDoc(doc(db, "users", user.uid), { score });
  alert("Your score: " + score);
};
