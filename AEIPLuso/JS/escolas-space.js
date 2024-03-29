$(document).ready(function(){
    let spaceContainers = $('.space')

    for (let i=0; i < spaceContainers.length; i++)
    {
        spaceContainers.eq(i).data('idx', i)
    }

    spaceContainers.on('click',function(){
        let containerClicked = $(this);
        spaceContainers.each(e => {
            if(containerClicked.data('idx') != spaceContainers.eq(e).data('idx')){
                spaceContainers.eq(e).removeClass('clicked');
            }
        });
       containerClicked.toggleClass('clicked');
    })
})