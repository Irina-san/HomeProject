import React, { useState } from 'react';

const EditWordComponent = () => {
const [word, setWord] = useState('');

const handleSubmit = (event) => {
event.preventDefault();
console.log('Отредактированное слово:', word);
setWord(''); // Очистить поле после отправки формы
}

const handleChange = (event) => {
setWord(event.target.value);
}

return (
<div>
<h3>Редактировать слово:</h3>
<form onSubmit={handleSubmit}>
<input type="text" value={word} onChange={handleChange} placeholder="Введите отредактированное слово" />
<button type="submit">Сохранить</button>
</form>
</div>
);
};

export default EditWordComponent;