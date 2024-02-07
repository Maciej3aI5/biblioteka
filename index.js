document.addEventListener("click",(event)=>{
    if(event.target.classList.contains('delete')){
        const remove=document.getElementsByClassName(event.target.id)[0];
        remove.remove();
    }
    if (event.target.classList.contains('stan')) {
        const button2 = event.target;
        if (button2.textContent === "Readed") {
            button2.textContent = "Not readed";
            button2.classList.remove("bg-green-500");
            button2.classList.add("bg-red-500");
        } else {
            button2.textContent = "Przeczytano";
            button2.classList.remove("bg-red-500");
            button2.classList.add("bg-green-500");
        }
    }
})

document.getElementById('dodaj').addEventListener("click", () => {
    document.getElementById('overlay').style.opacity = "1";
    document.getElementById('overlay').style.pointerEvents = "auto";
    document.getElementById('modal').style.display = "flex";
})

document.getElementById('overlay').addEventListener("click", () => {
    document.getElementById('overlay').style.opacity = "0";
    document.getElementById('overlay').style.pointerEvents = "none";
    document.getElementById('modal').style.display = "none";
})

document.getElementById('potwierdz').addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById('overlay').style.opacity = "0";
    document.getElementById('overlay').style.pointerEvents = "none";
    document.getElementById('modal').style.display = "none";
    let tytul = document.getElementById('tytul').value;
    let autor = document.getElementById('autor').value;
    let strony = document.getElementById('strony').value;
    if (tytul.length > 2 && autor.length > 2) {
        const ksiazka = new Ksiazka(tytul, autor, strony);
        const div = document.createElement('div');
        let losowa=Math.floor(Math.random()*10000);
        div.classList.add(
            losowa,"w-full", "h-80", "border-solid", "border-4", "border-slate-700",
            "rounded-lg", "flex", "justify-center", "items-center", "flex-column", "text-3xl"
        );
        const lista = document.createElement('ul');

        const lista1 = document.createElement('li');
        lista1.textContent = "Title: " + ksiazka.tytul;
        lista1.classList.add('mb-6');

        const lista2 = document.createElement('li');
        lista2.textContent = "Author: " + ksiazka.autor;
        lista2.classList.add('mb-6');

        const lista3 = document.createElement('li');
        lista3.textContent = "Pages: " + ksiazka.strony;

        const button = document.createElement('button');
        button.textContent = "Delete";
        button.id=losowa;
        button.classList.add('delete', 'text-white', 'mt-6', 'rounded-lg', 'h-12', 'w-3/5', 'bg-red-500', 'delete-book');
        const button2 = document.createElement('button');
        button2.textContent = "To read";
        button2.classList.add('text-white', 'mt-6', 'rounded-lg', 'h-12', 'w-3/5', 'bg-red-500', 'stan');
        lista.appendChild(lista1);
        lista.appendChild(lista2);
        lista.appendChild(lista3);
        div.appendChild(lista);
        div.appendChild(button2);
        div.appendChild(button);
        div.style.flexDirection = "column";
        if(document.getElementById('checkbox').checked){
            button2.textContent = "Readed";
            button2.classList.remove("bg-red-500");
            button2.classList.add("bg-green-500");
        }
        document.querySelector('main').appendChild(div);
    } else {
        alert('Field Author and Title must contain at least 3 letters!!!');
    }
});

class Ksiazka {
    constructor(tytul, autor, strony) {
        this.tytul = tytul;
        this.autor = autor;
        this.strony = strony;
    }
}
