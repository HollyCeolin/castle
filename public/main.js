//const input = document.querySelector('.name-input')
const img = document.querySelector('img')
const button = document.querySelector('.name-input')
const addGuest = (evt) => {
    alert('added')
    
}
button.addEventListener('click', addGuest)

const clickImage = (evt) => {
    alert('image clicked')
}
img.addEventListener('click', clickImage)










        //function putTheThingInTheView(res) {
        //     container.innerHTML = ''
        //     guestInput.value = ''

        //     res.data.forEach((guestName, index) => {
        //         container.innerHTML += `<p name=${index}>${guestName}</p>`
        //     })

        //     document.querySelectorAll('p').forEach(element => {
        //         const theIndexValue = element.getAttribute('name');

        //         element.addEventListener('click', () => {
        //             axios
        //                 .delete(`/api/guests/${theIndexValue}`)
        //                 .then(res => {
        //                     putTheThingInTheView(res)
        //                 })
        //         })
        //     })
        // }

        // function submitHandler(evt) {
        //     evt.preventDefault();

        //     axios
        //         .post('api/guests', { guest: guestInput.value })
        //         .then(res => {
        //             putTheThingInTheView(res)
        //         })
        //         .catch(err => {
        //             guestInput.value = ''

        //             const notif = document.createElement('aside')
        //             notif.innerHTML = `<p>${err.response.data}</p>
        //             <button class="close">close</button>`
        //             document.body.appendChild(notif)

        //             document.querySelectorAll('.close').forEach(btn => {
        //                 btn.addEventListener('click', (e) => {
        //                     e.target.parentNode.remove()
        //                 })
        //             })
        //         })
        // }

        // // get student list on initial load
        // axios
        //     .get('/api/guests')
        //     .then(res => {
        //         putTheThingInTheView(res)
        //     })

        // addForm.addEventListener('submit', submitHandler)
