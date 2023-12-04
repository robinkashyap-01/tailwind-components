
function handleClick(event) {
    // Remove the active class from all links
    document.querySelectorAll('a').forEach((el) => {
      el.classList.remove('bg-blue-700');
    });

    // Add the active class to the clicked link
    const currentLink = event.target.closest('a');
    currentLink.classList.add('bg-blue-700');
  }



  //dropdown 
  let categoryDropdown = document.getElementById('categoriesDropdown');
        document.addEventListener('DOMContentLoaded', function () {
            const dropdownToggle = document.getElementById('categoriesDropdown');
            const dropdownContent = document.querySelector('.cat-dropdown');

            dropdownToggle.addEventListener('mouseenter', function () {
                dropdownContent.classList.remove('hidden');
            });

            dropdownToggle.addEventListener('mouseleave', function () {
                dropdownContent.classList.add('hidden');
            });
        });