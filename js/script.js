window.addEventListener('DOMContentLoaded', () => {

    const tabsParent = document.querySelector('.tabheader__items'),
        tabs = tabsParent.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent');

    const hideTabsContent = () => {
        tabsContent.forEach((tabContent) => {
            tabContent.classList.remove('show', 'fade');
            tabContent.classList.add('hide');
        });

        tabs.forEach((tab) => tab.classList.remove('tabheader__item_active'));
    };

    const showTabContent = (tabIndex = 0) => {
        tabsContent[tabIndex].classList.remove('hide');
        tabsContent[tabIndex].classList.add('show', 'fade');

        tabs[tabIndex].classList.add('tabheader__item_active');
    };

    hideTabsContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((tab, index) => {
                if (target == tab) {
                    hideTabsContent();
                    showTabContent(index);
                }
            });
        }
    });
});