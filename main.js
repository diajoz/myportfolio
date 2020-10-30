const Showmenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav + document.getElementById(navId)


    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classlist.toggle('show')

        })


    }


}
ShowMenu('nav-toggle', nav - menu)