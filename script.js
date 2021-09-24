            var audio = new Audio('audio/zeldam.mp3');
            audio.play();      
            var total = 0;
            var quantites = 0;
       
        $("#button").click(function(){

            total = 0;
            quantites = 0;

            $("#categories").find("input").each(function()
            {
           
                if($(this).val() != ""){
                    quantites += parseInt($(this).val());
                }
                  
                //isNan-->une quantité qui n'est pas un nombre not a number 
                //.siblings pour cibler les spans
                if(!isNaN($(this).val())){
                    total += $(this).siblings("span").find(".prix").text() * $(this).val();
                }
                
            });

            $("#totalspan").text(total); // pour afficher le total
           
            $('#totalspan').each(function couleur() // pour changer la couleur de la somme en fonction de la limite de l'utilisateur
            {
                if(total<=50)
                {
                    $('#totalspan').css({"color": "green", "font-weight": "bold"});
                }
                else if (total<=75)
                {
                    $('#totalspan').css({"color": "orange", "font-weight": "bold"});
                }
                else 
                {
                    $('#totalspan').css({"color": "red", "font-weight": "bold"});
                    Swal.fire("Vous n'avez pas assez d'argent"); 
                }
            })
           

            if (quantites>15)
            {
                Swal.fire('Votre inventaire est plein, vous ne pouvez pas prendre plus de 15 items ! ');
                    
            }

          

           
            
        });

        $('#button2').click(function(){
                
                
                Swal.fire({
                            title: 'Etes vous sur?',
                            text: "Vous ne pouvez pas revenir en arrière !",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            cancelButtonText: 'Annuler',
                            confirmButtonText: 'Oui !'
                            }).then((result) => {
                            if (result.isConfirmed) {
                                $("#inp, #inp1, #inp2, #inp3, #inp4, #inp5, #totalspan").val('').text('');
                                Swal.fire('Supprimé !','Le panier a bien été vidé.','success')
      }
    })
                    
                    
                }) //pour vider le panier ainsi que le total

        $('#button3').click(function(){
                if (total>75)
                {
                    Swal.fire("Vous n'avez pas assez d'argent"); 
                }
                else if(quantites > 15){
                    Swal.fire("Pas plus de 15 items !!!"); 
                }
                else if(total <= 0){
                    Swal.fire("Panier vide..."); 
                }else
                {
                    Swal.fire({
                                title: 'Etes-vous sûr de valider le panier ?',
                                showDenyButton: true,
                                showCancelButton: true,
                                confirmButtonText: 'Oui, valider',
                                denyButtonText: `Ne pas valider`,
                                cancelButtonText: 'Annuler'
                                }).then((result) => {
                               
                                if (result.isConfirmed) {
                                    Swal.fire('Validé ! Merci de votre achat', '', '');
                                    $("#inp, #inp1, #inp2, #inp3, #inp4, #inp5, #totalspan").val('').text('');
                                } else if (result.isDenied) {
                                    Swal.fire({
                                                title: "Vous n'avez rien acheté",
                                                width: 600,
                                                padding: '3em',
                                                background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
                                                backdrop: `
                                                    rgba(0,0,123,0.4)
                                                    url("../images/zeld.gif")
                                                    left top
                                                    no-repeat
                                                    
                                                `
                                                },
                                                    "Vous n'avez rien acheté", '', 'info')
                                }
                                })
                }

            })

        $("#categories input").keyup(function(){
            var prix = 0;
            if(!isNaN($(this).val())){
                fiyat = $(this).siblings("span").find(".prix").text() * $(this).val();
            }
            $(this).next().text("Sous-Total:"+prix+"$");
        }); 
    