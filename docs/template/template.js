
function loadContent(page)
{

    $.get('../template/head.html', function(data) {
        $('head').append(data);
    })
    .done(function() {
        $.get('../template/body.html', function(data) {
            $('body').append(data);
        })
        .done(function() {
            $.get('../template/nav.html', function(data) {
                $('#my_nav').replaceWith($(data).html());
            });
        
            $.get('../template/footer.html', function(data) {
                $('#my_footer').replaceWith($(data).html());
            })
            .done(function() {
                loadPage(page);
                })
                .done(function(){
                    $("title").text(page.split(".")[0]);
                });
          });
      });

}

function loadPage(page)
{

    $.ajax({
        url: '../data/' + page,
        cache: false,
        success: function(data){
            $('#my_content').replaceWith($(data).html());
        },
        error: function(e){
            console.log('Error loading content', e);
        }
        
      });
}
