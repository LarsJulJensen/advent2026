const adventDates = {
    1: new Date('2026-11-29'),
    2: new Date('2026-12-06'),
    3: new Date('2026-12-13'),
    4: new Date('2026-11-20')
};

function normalizeDate(date) {
    date.setHours(0, 0, 0, 0);
    return date;
}

function canOpenDoor(doorNo) {
    const today = normalizeDate(new Date());
    const openDate = normalizeDate(new Date(adventDates[doorNo]));
    return today >= openDate;
}

function openDoor(doorNo, page) {

    if (canOpenDoor(doorNo)) {
        window.location.href = page;
    } else {

        alert(
            `Lågen kan først åbnes ${adventDates[doorNo].toLocaleDateString('da-DK')}`
        );
    }
}

function protectDoorPage(doorNo) {

    if (!canOpenDoor(doorNo)) {

        document.body.innerHTML = `
            <div style="
                min-height:100vh;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                background:linear-gradient(#0b2242,#1e4c8f);
                color:white;
                font-family:Arial,sans-serif;
                text-align:center;
            ">
                <h1>🔒 Lågen er låst</h1>

                <p>
                    Denne adventsgave kan først åbnes
                    ${adventDates[doorNo].toLocaleDateString('da-DK')}
                </p>

                <p>
                    <a href="index.html"
                       style="color:#ffd700">
                       Tilbage til kalenderen
                    </a>
                </p>
            </div>
        `;
    }
}
