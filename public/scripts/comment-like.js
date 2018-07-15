$('.comment-like').on("click", function(event){
    event.preventDefault();
    const commentLike = $(this).data('likeable-type');
    const commentId = $(this).data('comment-id');

    if(commentLike == "comment"){
        $.ajax({
            url:"/comments/"+commentId+"/likes",
            type:"post",
            success:function(response){
                $("#" + commentId).text(response.likes+" Likes");
            },
        });
    } 
});

