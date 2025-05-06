document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const container = document.createElement("div");
    container.style.padding = "20px";
    container.style.maxWidth = "600px";
    container.style.margin = "50px auto";
    container.style.backgroundColor = "#ffffffcc";
    container.style.borderRadius = "20px";
    container.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
    container.style.color = "#002b5c";
    container.style.fontSize = "18px";
    container.style.fontFamily = "'Oswald', sans-serif";

    if (cart.length === 0) {
        container.innerHTML = "<h2 style='text-align: center;'>Корзина пуста</h2>";
    } else {
        const title = document.createElement("h2");
        title.textContent = "Ваша корзина:";
        title.style.textAlign = "center";
        title.style.marginBottom = "20px";
        container.appendChild(title);

        cart.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.textContent = `${item.name} — ${item.price} сум`;
            itemDiv.style.marginBottom = "10px";
            itemDiv.style.display = "flex";
            itemDiv.style.justifyContent = "space-between";
            itemDiv.style.alignItems = "center";

            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Удалить";
            removeBtn.style.backgroundColor = "red";
            removeBtn.style.color = "white";
            removeBtn.style.border = "none";
            removeBtn.style.padding = "5px 10px";
            removeBtn.style.borderRadius = "6px";

            removeBtn.onclick = () => {
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));

                Toastify({
                    text: "Товар удалён из корзины!",
                    duration: 3000,
                    close: true,
                    gravity: "top",
                    position: 'center',
                    stopOnFocus: true,
                    style: {
                        background: "linear-gradient(to right, #ff416c, #ff4b2b)",
                        borderRadius: "10px",
                    },
                }).showToast();

                setTimeout(() => {
                    location.reload();
                }, 1000);
            };

            itemDiv.appendChild(removeBtn);
            container.appendChild(itemDiv);
        });
    }

    document.body.appendChild(container);
});




function zakaz(){
    alert("Ваш заказ принят!")
    alert("Ваш заказ будет доставлен в течение 30 минут!")
    alert("Спасибо за покупку!")
}