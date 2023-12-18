import React, { useState } from 'react';

const AddWordComponent = () => {
const [word, setWord] = useState('');

const handleSubmit = (event) => {
event.preventDefault();
console.log('Новое слово:', word);
setWord(''); // Очистить поле после отправки формы
}

const handleChange = (event) => {
setWord(event.target.value);
}

return (
<div>
<h3>Добавить новое слово:</h3>
<form onSubmit={handleSubmit}>
<input type="text" value={word} onChange={handleChange} placeholder="Введите слово" />
<button type="submit">Добавить</button>
</form>
</div>
);
};

export default AddWordComponent;