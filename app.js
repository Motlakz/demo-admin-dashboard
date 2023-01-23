function toggleMenu() {
    let toggle = document.querySelector(".toggle");
    toggle.classList.toggle('active');

    let navigation = document.querySelector(".navigation");
    navigation.classList.toggle('active');

    let main = document.querySelector(".main");
    main.classList.toggle('active');
}