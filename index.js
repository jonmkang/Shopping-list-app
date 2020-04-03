$(function(){
    $('#js-shopping-list-form').submit( event => {
        event.preventDefault();
        const itemToAdd = $(event.currentTarget).find('input[name="shopping-list-entry"]');
        let result = [];
        result.push($(`<li>
        <span class="shopping-item">${itemToAdd.val()}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
        </li>`));
        $(".shopping-list").append(result);
        $('#js-shopping-list-form').each(function(){this.reset();});
    });
});

$(function(){
    $(".shopping-item-toggle").click(function(event){
        $(this).parent().prev().toggleClass("shopping-item__checked");
    });
});

$(function(){
    $(".shopping-item-delete").click(function(event){
        $(this).parent().parent().remove();
    });
});

