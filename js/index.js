document.addEventListener('DOMContentLoaded', () => {
    const profileDropDownBtn = document.querySelector('.profile-drop-down-btn');
    const profileDropDown = document.querySelector('.profile-drop-down');

    // Toggle dropdown on button click
    profileDropDownBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        profileDropDown.style.display = (profileDropDown.style.display === 'flex') ? 'none' : 'flex';
    });

    // Hide dropdown on click outside
    document.addEventListener('click', () => {
        profileDropDown.style.display = 'none';
    });

    // Prevent dropdown from closing when clicking inside it
    profileDropDown.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

const up = document.getElementById('up');

// Hide the button initially
up.style.display = 'none';

window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        up.style.display = 'block';
    } else {
        up.style.display = 'none';
    }
});

up.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Function to add the scroll functionality to all elements with a specific class
function addScrollFunctionality(selector) {
    const rows = document.querySelectorAll(selector);

    rows.forEach(row => {
        let isDown = false;
        let startX;
        let scrollLeft;

        row.addEventListener('mousedown', (e) => {
            isDown = true;
            row.classList.add('active');
            startX = e.pageX - row.offsetLeft;
            scrollLeft = row.scrollLeft;
            e.preventDefault(); // Prevent default behavior
        });

        row.addEventListener('mouseleave', () => {
            isDown = false;
            row.classList.remove('active');
        });

        row.addEventListener('mouseup', () => {
            isDown = false;
            row.classList.remove('active');
        });

        row.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault(); // Prevent default behavior
            const x = e.pageX - row.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            row.scrollLeft = scrollLeft - walk;
        });
    });
}

// Apply the scroll functionality to all elements with the class 'scrollable-row'
addScrollFunctionality('.scrollable-row');
