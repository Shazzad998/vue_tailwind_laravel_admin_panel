import { ref } from "vue";

export default function useDefaults() {
    // Theme Functions
    function getThemeFromLocalStorage() {
        // if user already changed the theme, use it
        if (window.localStorage.getItem("dark")) {
            return JSON.parse(window.localStorage.getItem("dark"));
        } else {
            // else return their preferences
            return (
                !!window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
            );
        }
    }

    function setThemeToLocalStorage(value) {
        window.localStorage.setItem("dark", value);
    }

    let dark = ref(getThemeFromLocalStorage());

    function setTheme() {
        if (dark.value) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }

    function toggleTheme() {
        dark.value = !dark.value;
        setThemeToLocalStorage(dark.value);
        setTheme();
    }

    // SideMenu Functions

    let isSideMenuOpen = ref(false);
    function toggleSideMenu() {
        isSideMenuOpen.value = !isSideMenuOpen.value;
    }

    function closeSideMenu() {
        isSideMenuOpen.value = false;
    }

    // Notificatons menu functons

    let isNotificationsMenuOpen = ref(false);

    function toggleNotificationsMenu() {
        isNotificationsMenuOpen.value = !isNotificationsMenuOpen.value;
    }

    function closeNotificationsMenu() {
        isNotificationsMenuOpen.value = false;
    }

    // profile menu function
    let isProfileMenuOpen = ref(false);

    function toggleProfileMenu() {
        isProfileMenuOpen.value = !isProfileMenuOpen.value;
    }

    function closeProfileMenu() {
        isProfileMenuOpen.value = false;
    }

    // Pages menu function
    let isPagesMenuOpen = ref(false);

    function togglePagesMenu() {
        isPagesMenuOpen.value = !isPagesMenuOpen.value;
    }

    function closePagesMenu() {
        isSideMenuOpen.value = false;
    }

    //modal
    let isModalOpen = ref(false);

    function openModal() {
        isModalOpen.value = true;
    }

    function closeModal() {
        isModalOpen.value = false;
    }

    return {
        dark,
        isNotificationsMenuOpen,
        isPagesMenuOpen,
        isProfileMenuOpen,
        isSideMenuOpen,
        isModalOpen,
        toggleTheme,
        setTheme,
        toggleSideMenu,
        closeSideMenu,
        toggleNotificationsMenu,
        closeNotificationsMenu,
        togglePagesMenu,
        closePagesMenu,
        toggleProfileMenu,
        closeProfileMenu,
        openModal,
        closeModal,
    };
}
