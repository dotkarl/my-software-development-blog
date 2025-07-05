document.addEventListener('DOMContentLoaded', () => {
  const icon = document.getElementById('search-icon');
  const input = document.getElementById('search-input');
  const darkModeToggle = document.getElementById('menuDarkModeToggle');

  function showSearchInput() {
    input.classList.add('active');
    icon.setAttribute('aria-expanded', 'true');
    input.focus();
  }

  function hideSearchInput() {
    input.classList.remove('active');
    icon.setAttribute('aria-expanded', 'false');
  }

  function toggleSearchInput() {
    if (input.classList.contains('active')) {
      hideSearchInput();
    } else {
      showSearchInput();
    }
  }

  // Toggle on icon click or keyboard activation
  icon.addEventListener('click', (event) => {
    toggleSearchInput();
    event.stopPropagation();
  });
  icon.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleSearchInput();
      event.preventDefault();
      event.stopPropagation();
    }
  });

  // Dark mode toggle: click and keyboard
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', (event) => {
      if (typeof toggleDarkMode === 'function') toggleDarkMode();
    });
    darkModeToggle.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        if (typeof toggleDarkMode === 'function') toggleDarkMode();
        event.preventDefault();
        event.stopPropagation();
      }
    });
  }

  // Prevent input click from closing it
  input.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  // Handle search and tab-out
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      window.open(
        'https://www.google.com/search?q=site:www.karlvanheijster.com+' + encodeURIComponent(input.value),
        '_blank'
      );
    } else if (e.key === 'Tab') {
      hideSearchInput();
    }
  });

  // Hide input when clicking elsewhere
  document.addEventListener('click', () => {
    if (input.classList.contains('active')) {
      hideSearchInput();
    }
  });
});