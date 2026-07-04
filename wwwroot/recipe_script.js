document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".row-checkbox");
    const counterSpan = document.getElementById("checkedCount");

    function updateTableState() {
        var count = 0;        
        checkboxes.forEach(checkbox => {
            const row = checkbox.closest("tr");
            if (checkbox.checked) {
                count++;
                row.classList.add("selected-row");
            } else {
                row.classList.remove("selected-row");
            }
        });
        counterSpan.innerText = count;
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateTableState);
    });
});