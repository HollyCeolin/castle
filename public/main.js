const addForm = document.querySelector('form');
        const nameInput = document.querySelector('input');
        const container = document.querySelector('section');

        function putTheThingInTheView(res) {
            container.innerHTML = ''
            nameInput.value = ''

            res.data.forEach((studentName, index) => {
                container.innerHTML += `<p name=${index}>${guestName}</p>`
            })

            document.querySelectorAll('p').forEach(element => {
                const theIndexValue = element.getAttribute('name');

                element.addEventListener('click', () => {
                    axios
                        .delete(`/api/students/${theIndexValue}`)
                        .then(res => {
                            putTheThingInTheView(res)
                        })
                })
            })
        }
