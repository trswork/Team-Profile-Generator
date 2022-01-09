const generateManager = function (manager) {
    return`
    <div class="col-4 mt-4">
            <div class="card bg-primary border-dark">
                <div class="card-header text-white">
                    <h3 id="name">${manager.name}</h3>
                    <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

const generateEngineer = function (Engineer) {
    return`
    <div class="col-4 mt-4">
            <div class="card bg-primary border-dark">
                <div class="card-header text-white">
                    <h3 id="name">${engineer.name}</h3>
                    <h4>Engineer</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="GitHub">GitHub: ${engineer.gitHub}</p>
            </div>
        </div>
    </div>
    `;
}

const generateIntern = function (Intern) {
    return`
    <div class="col-4 mt-4">
            <div class="card bg-primary border-dark">
                <div class="card-header text-white">
                    <h3 id="name">${intern.name}</h3>
                    <h4>Intern</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
}