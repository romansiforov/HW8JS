window.onload = () => {

    function unsetTextColorToDefault() {

        const [...allElements] = document.getElementById("list").children;

        allElements.forEach(item => {
            item.style.color = "black";
        });
    }


    document.querySelector("input[value='Выбрать первый элемент']").onclick = () => {

        const firstElement = document.getElementById("list").firstElementChild;

        unsetTextColorToDefault();
        firstElement.style.color = "red";
    }

    document.querySelector("input[value='Выбрать последний элемент']").onclick = () => {

        const lastElement = document.getElementById("list").lastElementChild;

        unsetTextColorToDefault();
        lastElement.style.color = "red";
    }

    document.querySelector("input[value='Выбрать следующий элемент']").onclick = () => {

        const [...allElements] = document.getElementById("list").children;

        for (let i = 0; i < allElements.length; i++) {
            if (allElements[i].style.color == "red" && i != allElements.length - 1) {
                unsetTextColorToDefault();
                allElements[i].nextElementSibling.style.color = "red";
                return;
            }

            if (i == allElements.length - 1) {
                unsetTextColorToDefault();
                allElements[0].style.color = "red";
            }
        }
    }

    document.querySelector("input[value='Выбрать предыдущий элемент']").onclick = () => {

        const [...allElements] = document.getElementById("list").children;

        for (let i = allElements.length - 1; i > 0; i--) {
            if (allElements[i].style.color == "red" && i != 0) {
                unsetTextColorToDefault();
                allElements[i].previousElementSibling.style.color = "red";
                return;
            }

            if (i == 1) {
                unsetTextColorToDefault();
                allElements[allElements.length - 1].style.color = "red";
            }
        }
    }

    document.querySelector("input[value='Добавить элемент початок']").onclick = () => {

        const [...allElements] = document.getElementById("list").children;
        const liStart = document.createElement("li");
        liStart.textContent = "Item before all";

        allElements[0].before(liStart);
    }

    document.querySelector("input[value='Добавить элемент в кінець']").onclick = () => {

        const [...allElements] = document.getElementById("list").children;
        const liStart = document.createElement("li");
        liStart.textContent = "Item after all";

        allElements[allElements.length - 1].after(liStart);
    }

    document.querySelector("input[value='Удалить элемент з початку']").onclick = () => {

        const firstElement = document.getElementById("list").firstElementChild;
        firstElement.remove();

    }

    document.querySelector("input[value='Удалить элемент з кінця']").onclick = () => {

        const firstElement = document.getElementById("list").lastElementChild;
        firstElement.remove();

    }



}