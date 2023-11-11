import Swal from "sweetalert2";

document.getElementById('username-form').addEventListener('submit', async (e)=>{
    e.preventDefault();
    const userInputProp = document.getElementById('username');
    const messageInputProp = document.getElementById('message');

    const user = userInputProp.value;
    const message = messageInputProp.value;

    try {
        const response = await fetch('/api/msg',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({user, message}),
        });
        if (response.ok) {
            const responseData = await response.json();
            const successMessage = responseData.message;

            Swal.fire({
                icon: 'success',
                title: successMessage,
                text: 'mensaje enviado con éxito',
                confirmButtonText: 'Ok',
            }).then((result) =>{
                if (result.isConfirmed) {
                    location.reload();
                }
            });

            userInputProp.value = '';
            messageInputProp.value = '';
        }else {
            console.error('error al enviar el mensaje');
        }
        
    } catch (error) {
        console.error('Error:', error);
        
    }
});