
/* FEATURES DROPDOWN */
const featuresNavItem = document.querySelector('#features');
const featuresDropdown = document.querySelector('#featuresDropdown');
const featuresArrowUp = document.querySelector('#featuresArrowUp');
const featuresArrowDown = document.querySelector('#featuresArrowDown');

let isFeaturesDropdownVisible = false;

featuresNavItem.addEventListener('click', () => {
    if (!isFeaturesDropdownVisible) {
        featuresDropdown.classList.remove('hidden');
        featuresArrowUp.classList.add('hidden');
        featuresArrowDown.classList.remove('hidden');
        featuresNavItem.classList.add('active')
        isFeaturesDropdownVisible = true;
    } else {
        featuresDropdown.classList.add('hidden');
        featuresArrowUp.classList.remove('hidden');
        featuresArrowDown.classList.add('hidden');
        featuresNavItem.classList.remove('active')
        isFeaturesDropdownVisible = false;
    }

    if (isCompanyDropdownVisible) {
        companyDropdown.classList.add('hidden');
        companyArrowUp.classList.remove('hidden');
        companyArrowDown.classList.add('hidden');
        companyNavItem.classList.remove('active')
        isCompanyDropdownVisible = false;
    }
});

/* COMPANY DROPDOWN */
const companyNavItem = document.querySelector('#company');
const companyDropdown = document.querySelector('#companyDropdown');
const companyArrowUp = document.querySelector('#companyArrowUp');
const companyArrowDown = document.querySelector('#companyArrowDown');

let isCompanyDropdownVisible = false;

companyNavItem.addEventListener('click', () => {
    if (!isCompanyDropdownVisible) {
        companyDropdown.classList.remove('hidden');
        companyArrowUp.classList.add('hidden');
        companyArrowDown.classList.remove('hidden');
        companyNavItem.classList.add('active')
        isCompanyDropdownVisible = true;
    } else {
        companyDropdown.classList.add('hidden');
        companyArrowUp.classList.remove('hidden');
        companyArrowDown.classList.add('hidden');
        companyNavItem.classList.remove('active')
        isCompanyDropdownVisible = false;
    }

    if (isFeaturesDropdownVisible) {
        featuresDropdown.classList.add('hidden');
        featuresArrowUp.classList.remove('hidden');
        featuresArrowDown.classList.add('hidden');
        featuresNavItem.classList.remove('active')
        isFeaturesDropdownVisible = false;
    }
});

/* MOBILE MENU */
const hamburger = document.querySelector('#hamburger');
const mobileNav = document.querySelector('#mobile-nav');
const closeButton = document.querySelector('#closeButton');
const mainContent = document.querySelector('#mainContent');
const header = document.querySelector('#header')
// const mobileHeroImage = document.querySelector('#mobileHeroImage')

hamburger.addEventListener('click', () => {
    mobileNav.classList.remove('hidden')
    mainContent.classList.add('overlay')
    header.classList.add('overlay')
    // mobileHeroImage.classList.add('overlay')
})

closeButton.addEventListener('click', () => {
    mobileNav.classList.add('hidden')
    mainContent.classList.remove('overlay')
    header.classList.remove('overlay')
    // mobileHeroImage.classList.remove('overlay')
})

/* MOBILE FEATURES DROPDOWN */
const mobileFeaturesNavItem = document.querySelector('#mobileFeatures');
const mobileFeaturesDropdown = mobileFeaturesNavItem.querySelector('.mobile-dropdown'); // Select the dropdown within mobileFeaturesNavItem
const mobileFeaturesArrowUp = document.querySelector('#mobileFeaturesArrowUp');
const mobileFeaturesArrowDown = document.querySelector('#mobileFeaturesArrowDown');

let isMobileFeaturesDropdownVisible = false;

mobileFeaturesNavItem.addEventListener('click', () => {
    if (!isMobileFeaturesDropdownVisible) {
        mobileFeaturesDropdown.classList.remove('hidden');
        mobileFeaturesArrowUp.classList.remove('hidden'); // Updated: Show the arrow up
        mobileFeaturesArrowDown.classList.add('hidden'); // Updated: Hide the arrow down
        mobileFeaturesNavItem.classList.add('active');
        isMobileFeaturesDropdownVisible = true;

        // Hide mobile company submenu if it's open
        if (isMobileCompanyDropdownVisible) {
            mobileCompanyDropdown.classList.add('hidden');
            mobileCompanyArrowUp.classList.add('hidden'); // Updated: Hide the arrow up
            mobileCompanyArrowDown.classList.remove('hidden'); // Updated: Show the arrow down
            mobileCompanyNavItem.classList.remove('active');
            isMobileCompanyDropdownVisible = false;
        }
    } else {
        mobileFeaturesDropdown.classList.add('hidden');
        mobileFeaturesArrowUp.classList.add('hidden'); // Updated: Hide the arrow up
        mobileFeaturesArrowDown.classList.remove('hidden'); // Updated: Show the arrow down
        mobileFeaturesNavItem.classList.remove('active');
        isMobileFeaturesDropdownVisible = false;
    }
});

/* MOBILE COMPANY DROPDOWN */
const mobileCompanyNavItem = document.querySelector('#mobileCompany');
const mobileCompanyDropdown = mobileCompanyNavItem.querySelector('.mobile-dropdown'); // Select the dropdown within mobileCompanyNavItem
const mobileCompanyArrowUp = document.querySelector('#mobileCompanyArrowUp');
const mobileCompanyArrowDown = document.querySelector('#mobileCompanyArrowDown');

let isMobileCompanyDropdownVisible = false;

mobileCompanyNavItem.addEventListener('click', () => {
    if (!isMobileCompanyDropdownVisible) {
        mobileCompanyDropdown.classList.remove('hidden');
        mobileCompanyArrowUp.classList.remove('hidden'); // Updated: Show the arrow up
        mobileCompanyArrowDown.classList.add('hidden'); // Updated: Hide the arrow down
        mobileCompanyNavItem.classList.add('active');
        isMobileCompanyDropdownVisible = true;

        // Hide mobile features submenu if it's open
        if (isMobileFeaturesDropdownVisible) {
            mobileFeaturesDropdown.classList.add('hidden');
            mobileFeaturesArrowUp.classList.add('hidden'); // Updated: Hide the arrow up
            mobileFeaturesArrowDown.classList.remove('hidden'); // Updated: Show the arrow down
            mobileFeaturesNavItem.classList.remove('active');
            isMobileFeaturesDropdownVisible = false;
        }
    } else {
        mobileCompanyDropdown.classList.add('hidden');
        mobileCompanyArrowUp.classList.add('hidden'); // Updated: Hide the arrow up
        mobileCompanyArrowDown.classList.remove('hidden'); // Updated: Show the arrow down
        mobileCompanyNavItem.classList.remove('active');
        isMobileCompanyDropdownVisible = false;
    }
});


