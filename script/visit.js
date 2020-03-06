export  default  class Visit {
    constructor(name, age, doctor, date, comment) {
        this.name = name;
        this.doctor = doctor;
        this.date=date;
        this.comment = comment;
        this.age= age;
        this.card = null;
        this.cardsContainer = null;
    }

    render(root) {
        this.card = document.createElement("div");
        this.card.className = "doctor-card";
        this.card.innerHTML = `
        <div class="card-header">
                <button id="open-card-menu" class="icon-button"><i class="fas fa-chevron-down tick"></i></button>
            </div>
            <div class="card-options">
                <button id="finish-card" class="icon-button"><i class="fas fa-power-off"></i></button>
                <button id="edit-card" class="icon-button"><i class="fas fa-edit"></i></button>
                <button id="close-card" class="icon-button"><i class="fas fa-times"></i></button>
            </div>
            <hr>
            <div class="card-content">
                <div class="card-heading">Кардиолог
                </div>
              <div class="show-more-info">Галина Степановна Крузенштерн</div>
                <button class="card-open-button">Показать больше</button>
                <button class="card-close-button">Скрыть инфо</button>
                <div class="card-info"></div>
            </div>
        `;

        const cardDesc = this.card.querySelector('.card-content');
        const showMoreBtn = this.card.querySelector('.card-open-button');
        showMoreBtn.addEventListener('click', () => {
            const showMoreCard = document.createElement('div');
            showMoreCard.innerText = 'test';
            console.log(cardDesc);
            cardDesc.append(showMoreCard)
        });
        const editBtn = this.card.querySelector('#edit-card');
        editBtn.addEventListener('click', () => {
            const editBtn = document.createElement('div');
            editBtn.innerText= 'edit';
            console.log(editBtn);
        });
        this.cardsContainer = this.card.querySelector("#main-visit-list");
        this.cardsForm = this.card.querySelector(".doctor-card");
        // this.cardsForm.addEventListener("submit",this.addCardiologistCard.bind(this));
        console.log(this.card);
        root.append(this.card);
    }

    addCardiologistCard(event) {
        event.preventDefault();
        console.log(this);
        const input = event.target.querySelector("");
        const value = input.value;
        const card = new CardiologistCard (value);
        card.render(this.cardsContainer);
    }
    addTherapistCard(event) {
        event.preventDefault();
        console.log(this);
        const input = event.target.querySelector("");
        const value = input.value;
        const card = new TherapistCard (value);
        card.render(this.cardsContainer);
    }
    addDentistCard(event) {
        event.preventDefault();
        console.log(this);
        const input = event.target.querySelector("");
        const value = input.value;
        const card = new DentistCard (value);
        card.render(this.cardsContainer);
    }


}

class CardiologistCard {
    constructor(doctor, status, description, priority, content  ) {
        this.name = name;
        this.doctor =doctor;
        this.status = status;
        this.description = description;
        this.priority = priority;
        this.card = null;
        this.content = {}
    }

    render(root) {
        this.card = document.createElement("div");
        this.card.className = "doctor-card";
        this.card.innerHTML = this.name;
        root.append(this.card);
    }
    drag(event) {
        event.dataTransfer.setData("id", ev.target.id);
    }
    drop(event) {
        event.preventDefault();
        console.log(event.target);
        console.log(event.dataTransfer.getData("id"));
        const id = event.dataTransfer.getData("id");
        const dragElement = document.getElementById(id);
        event.target.appendChild(dragElement);
    }
}
const cardForm = document.getElementById("doctor-card");
console.log(cardForm);
const cardInput = document.getElementById("input");
const root = document.getElementById("main-visit-list");

cardForm.addEventListener("click", (event)=> {
    event.preventDefault();
    // const value = cardInput.value;
    const visit = new Visit ('value');
    visit.render(root);

});

class Dentist extends Visit{
    edit(){
    }
    close() {
        document.getElementById('')
    }
    delete() {
    }
    drag() {

    }
    drop () {
    }
}
Dentist.edit();
Dentist.close();
Dentist.drag();
Dentist.drop();

class Therapist extends Visit {
    edit(){
    }
    close() {

    }
    delete() {

    }
    drag() {

    }
    drop () {
    }

}

