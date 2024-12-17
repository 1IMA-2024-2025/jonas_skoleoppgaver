function toggleDropdown(eventElement) {
    const dropdown = eventElement.nextElementSibling;

    if (dropdown.style.maxHeight && dropdown.style.maxHeight !== "0px") {
        // Collapse the dropdown
        dropdown.style.maxHeight = "0";
        dropdown.style.paddingTop = "0";
        dropdown.style.paddingBottom = "0";
    } else {
        // Expand the dropdown
        dropdown.style.maxHeight = dropdown.scrollHeight + "px";
        dropdown.style.paddingTop = "10px";
        dropdown.style.paddingBottom = "10px";
    }
}
