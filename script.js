const goodbye = (name) => {
    document.querySelector('.email__closing').textContent = `S pozdravem ${name}`;
};

const fillSubject = (subject) => {
    document.querySelector('.email__subject').textContent = subject;
};

const fillBody = (body, name) => {
    document.querySelector('.email__body').textContent = body;
    goodbye(name);
};

// Vyzkoušejte funkce
fillSubject('Žádost o zaměstnání');
fillBody('Reaguji na Vaši nabídku práce na pozici frontend vývojář.', 'Pavel Ovesný');