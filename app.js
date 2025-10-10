let flashcards = [];

function saveWords() {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
}


function addWord() {
    const eng = document.getElementById(`english`).value.trim();
    const jpn = document.getElementById(`japanese`).value.trim();

    if (eng === `` || jpn === ``){
        alert('英単語と日本語訳を入力してください。');
        return;
    }

    const newCard = {
        english: eng,
        japanese: jpn
    };

    flashcards.push(newCard)
    saveWords();

    document.getElementById('result').innerText = '登録完了';

    // const li = document.createElement(`li`);
    // li.textContent = `${eng} → ${jpn}`;
    // document.getElementById(`wordList`).appendChild(li);

    // document.getElementById(`english`).value = ``;
    // document.getElementById(`japanese`).value = ``;
}