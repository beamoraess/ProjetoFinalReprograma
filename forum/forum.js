$(function () {
    generateQuestions();
    showForm();
});

var textArea = $("#text-area");

function showForm(){
textArea.on('click', function(){
    $('.form-invisivel').toggle(600);
});
}

var textQuestion = $(".text-question")
var textDescription = $(".text-description")
var textName = $(".text-name")
var btnQuestion = $("#btn-question")

function generateQuestions(){
    btnQuestion.on('click', function (){
        $(".card-question").append(`<div class="d-flex justify-content-center">
    <div class="card card-border mb-3" style="width: 50rem;">
        <div class="card-body">
            <h5 class="card-title">${textQuestion.val()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${textName.val()}</h6>
            <p class="card-text">${textDescription.val()}</p>
            <a href="#" class="card-link">Responder</a>
        </div>
    </div>
</div>
</div>`)
});    
}
