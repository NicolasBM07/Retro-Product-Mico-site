class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML =
        `
<header>
    <div class="header_left">
    <a href="index.html">
      <img src="./img/Bell-logo.PNG" alt="logo" class="logo">
    </a>
        <nav>
            <ul class="nav_links">
                <li><a href="index.html">Home</a>
                <li><a href="about.html">About us</a>
            </ul>
        </nav>
    </div>
    <a class="ContactBtn" href="contact.html"><button>Contact Us</button></a>
</header>
        `
    }
}
customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer>
            <p class="P1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt necessitatibus
            ex illum voluptate molestias? Facilis, dolor impedit et modi praesentium harum numquam ut 
            qui vero, ducimus, magnam reprehenderit. Quae a quas illo exercitationem id facere vel
            blanditiis, ut optio maiores, quis sint non!</p>
            <br>
            <li><a href="about.html" class="AboutF">About us</a>
            <p class="P2">© 2023 The Bell Telephone Company, Barrie,On Canada</p>
        </footer>
        `
    }
}
customElements.define('my-footer', MyFooter)