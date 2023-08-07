var form = document.getElementById('my-form');

form.addEventListener('submit', SaveToBackend);

function SaveToBackend(event) {
    event.preventDefault();

    const name = event.target.candyname.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value

    const obj = {
        name,
        description,
        price,
        quantity
    }

    axios.post("http://localhost:3000/candy/add-candy", obj)
        .then((response) => {
            const data = response.data.newCandyDetail;
            showCandyOnScreen(data)
        })
        .catch((err) => {
            document.body.innerHTML += "<h2>Something went Wrong</h2>";
            console.log(err);
        })


}

window.addEventListener("DOMContentLoaded", () => {

    axios.get("http://localhost:3000/candy/get-candies")
        .then((response) => {
            for (var i = 0; i < response.data.allCandies.length; i++) {
                showCandyOnScreen(response.data.allCandies[i])
            }
        })
        .catch((err) => {
            console.log(err);
        })

})

function Buy1(obj, parentElem, childElem) {

    obj.quantity = obj.quantity - 1;

    axios.put(`http://localhost:3000/candy/edit-candy/${obj.id}`, obj)
        // .then((response) => {
        //     console.log(response)
        //     // parentElem.removeChild(childElem);
        //     // showCandyOnScreen(obj)
        // })
        // .catch((err) => {
        //     document.body.innerHTML += "<h2>Something went Wrong</h2>";
        //     console.log(error)
        // })
        parentElem.removeChild(childElem);
        showCandyOnScreen(obj)

}

function Buy2(obj, parentElem, childElem) {

    obj.quantity = obj.quantity - 2;

    axios.put(`http://localhost:3000/candy/edit-candy/${obj.id}`, obj)
        // .then((response) => {
        //     console.log(response)
        //     // parentElem.removeChild(childElem);
        //     // showCandyOnScreen(obj)
        // })
        // .catch((err) => {
        //     document.body.innerHTML += "<h2>Something went Wrong</h2>";
        //     console.log(error)
        // })
        parentElem.removeChild(childElem);
        showCandyOnScreen(obj)

}
function Buy3(obj, parentElem, childElem) {

    obj.quantity = obj.quantity - 3;

    axios.put(`http://localhost:3000/candy/edit-candy/${obj.id}`, obj)
        // .then((response) => {
        //     console.log(response)
        //     // parentElem.removeChild(childElem);
        //     // showCandyOnScreen(obj)
        // })
        // .catch((err) => {
        //     document.body.innerHTML += "<h2>Something went Wrong</h2>";
        //     console.log(error)
        // })
        parentElem.removeChild(childElem);
        showCandyOnScreen(obj)

}

function showCandyOnScreen(obj) {
    const parentElem = document.getElementById('userlist');
    const childElem = document.createElement('li');

    childElem.textContent = obj.name + " - " + obj.description + " - " + obj.price + " - " + obj.quantity;

    const Buy1Button = document.createElement('input');
    Buy1Button.type = 'button';
    Buy1Button.value = 'Buy 1';
    Buy1Button.onclick = () => {
        Buy1(obj, parentElem, childElem);
    }
    const Buy2Button = document.createElement('input');
    Buy2Button.type = 'button';
    Buy2Button.value = 'Buy 2';
    Buy2Button.onclick = () => {
        Buy2(obj, parentElem, childElem);
    }
    const Buy3Button = document.createElement('input');
    Buy3Button.type = 'button';
    Buy3Button.value = 'Buy 3';
    Buy3Button.onclick = () => {
        Buy3(obj, parentElem, childElem);
    }

    childElem.appendChild(Buy1Button);
    childElem.appendChild(Buy2Button);
    childElem.appendChild(Buy3Button);
    parentElem.appendChild(childElem);

}

