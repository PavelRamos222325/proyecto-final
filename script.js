// Redirige a una URL externa
function redirect(url) {
    window.open(url, "_blank");
  }
  
  // Manejo de comentarios
  const commentForm = document.getElementById("commentForm");
  const commentsList = document.getElementById("commentsList");
  
  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;
  
    if (name && comment) {
      const li = document.createElement("li");
      li.textContent = `${name}: ${comment}`;
      commentsList.appendChild(li);
  
      // Limpiar formulario
      commentForm.reset();
    }
  });
  