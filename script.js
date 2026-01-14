 const roles = ["Web Developer", "UI Designer"];
    let index = 0;
    const roleElement = document.getElementById("role");

    function changeRole() {
      roleElement.textContent = roles[index];
      roleElement.classList.remove("fade"); // reset animasi
      void roleElement.offsetWidth; // trigger reflow
      roleElement.classList.add("fade");

      index = (index + 1) % roles.length;
    }

    changeRole();
    setInterval(changeRole, 4000); 