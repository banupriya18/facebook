$('.post-like').on("click", function(event){
    event.preventDefault();
    const postLike = $(this).data('likeable-type');
    const postId = $(this).data('post-id');

    if(postLike == "post"){
        $.ajax({
            url:"/posts/"+postId+"/likes",
            type:"post",
            success:function(response){
                $("#" + postId).text(response.likes+" Likes");
            },
        });
    } 
});